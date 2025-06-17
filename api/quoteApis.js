import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Joi from "joi";

// -------------------------
// ENV VARIABLES
// -------------------------
const { MONGODB_URI, SMTP_MAIL, SMTP_PASS } = process.env;

if (!MONGODB_URI || !SMTP_MAIL || !SMTP_PASS) {
  console.error("Missing required environment variables: MONGODB_URI, SMTP_MAIL, SMTP_PASS");
}

// -------------------------
// MONGOOSE DB CONNECT
// -------------------------
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// -------------------------
// QUOTE SCHEMA
// -------------------------
const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    number: { type: Number, required: true },
    serviceType: {
      type: String,
      required: true,
      enum: [
        "construction",
        "building-hardware",
        "electrical-goods",
        "steel-furniture",
        "teel-fabrication",
        "other",
      ],
    },
    message: { type: String },
  },
  { timestamps: true }
);

const Quote = mongoose.models.Quote || mongoose.model("Quote", quoteSchema);

// -------------------------
// VALIDATION SCHEMA
// -------------------------
const quoteValidationSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  number: Joi.number().required(),
  serviceType: Joi.string()
    .valid("construction", "building-hardware", "electrical-goods", "steel-furniture", "teel-fabrication", "other")
    .required(),
  message: Joi.string().allow("").optional(),
});

// -------------------------
// EMAIL TEMPLATES
// -------------------------
const firmTemplate = (heading, tableData) => {
  const rows = tableData
    .map((item) =>
      item.value
        ? `<tr>
            <td style="padding:8px;border:1px solid #ddd;">${item.label}</td>
            <td style="padding:8px;border:1px solid #ddd;">${item.value}</td>
          </tr>`
        : ""
    )
    .join("");

  return `
    <html><body>
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
      <div style="background:#1a1a1a;color:#fff;padding:20px;text-align:center;">
        <h1>NOBLECRAFT CONSTRUCTION</h1>
      </div>
      <div style="background:#FF1616;color:#fff;padding:15px;text-align:center;">
        <h2>${heading}</h2>
      </div>
      <div style="padding:20px;">
        <p>Contact Details:</p>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
      <footer style="padding:15px;text-align:center;font-size:13px;color:#555;">
        <p><strong>NOBLECRAFT CONSTRUCTION</strong></p>
        <p>📞 (346) 234-6973 | 📧 support@noblecraft.com</p>
        <p>© ${new Date().getFullYear()} NOBLECRAFT. All rights reserved.</p>
      </footer>
    </div>
    </body></html>`;
};

const userTemplate = (heading, name) => `
  <html><body>
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
    <div style="background:#1a1a1a;color:#fff;padding:20px;text-align:center;">
      <h1>NOBLECRAFT CONSTRUCTION</h1>
    </div>
    <div style="background:#FF1616;color:#fff;padding:15px;text-align:center;">
      <h2>${heading}</h2>
    </div>
    <div style="padding:20px;">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for reaching out. We’ll get back to you soon.</p>
      <p>📞 (346) 234-6973 | 📧 support@noblecraft.com</p>
      <p>– NobleCraft Team</p>
    </div>
    <footer style="padding:15px;text-align:center;font-size:13px;color:#555;">
      <p><strong>NOBLECRAFT CONSTRUCTION</strong></p>
      <p>© ${new Date().getFullYear()} NOBLECRAFT. All rights reserved.</p>
    </footer>
  </div>
  </body></html>`;

// -------------------------
// EMAIL SENDER
// -------------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PASS,
  },
  pool: true,
  maxConnections: 1,
  rateDelta: 20000,
  rateLimit: 5,
});

transporter.verify((err) => {
  if (err) console.error("SMTP verify error:", err.message);
  else console.log("SMTP transporter verified successfully");
});

async function sendMail(from, to, subject, html) {
  try {
    const result = await transporter.sendMail({ from, to, subject, html });
    console.log("Mail sent:", result.messageId);
    return result;
  } catch (err) {
    console.error("Mail error:", err.message);
    throw err;
  }
}

// -------------------------
// API HANDLER
// -------------------------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ isSuccess: false, message: "Method not allowed" });
  }

  try {
    await dbConnect();
    const { name, email, number, serviceType, message } = req.body;

    const { error } = quoteValidationSchema.validate({ name, email, number, serviceType, message });
    if (error) {
      return res.status(400).json({
        isSuccess: false,
        message: "Invalid data",
        error: error.details[0].message,
      });
    }

    // Save to DB
    const quote = new Quote({ name, email, number, serviceType, message });
    await quote.save();

    let emailStatus = "pending";

    try {
      await Promise.race([
        Promise.all([
          sendMail(
            SMTP_MAIL,
            email,
            "Thank you for contacting NobleCraft",
            userTemplate("Thank You for Contacting Us", name)
          ),
          sendMail(
            SMTP_MAIL,
            SMTP_MAIL,
            "New Quote Submission",
            firmTemplate("New Quote Received", [
              { label: "Name", value: name },
              { label: "Email", value: email },
              { label: "Number", value: number },
              { label: "Service Type", value: serviceType },
              { label: "Message", value: message || "No message" },
            ])
          ),
        ]),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Email timeout")), 8000)
        ),
      ]);

      emailStatus = "sent";
    } catch (emailErr) {
      console.error("Email error:", emailErr.message);
      emailStatus = "failed";
    }

    res.status(201).json({
      isSuccess: true,
      message:
        emailStatus === "sent"
          ? "Quote submitted successfully and emails sent"
          : "Quote submitted successfully, but email sending failed",
      emailStatus,
    });
  } catch (err) {
    console.error("Quote API error:", err.message);
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
}
