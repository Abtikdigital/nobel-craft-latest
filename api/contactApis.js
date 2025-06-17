import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Joi from "joi";

// -------------------------
// ENV VARIABLES
// -------------------------
const {
  MONGODB_URI,
  SMTP_MAIL,
  SMTP_PASS
} = process.env;

// -------------------------
// MONGOOSE DB CONNECT
// -------------------------
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// -------------------------
// CONTACT SCHEMA
// -------------------------
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: { type: String },
  },
  { timestamps: true }
);
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// -------------------------
// VALIDATION SCHEMA
// -------------------------
const contactValidationSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  message: Joi.string().allow("").optional(),
});

// -------------------------
// EMAIL TEMPLATES
// -------------------------
const firmTemplate = (heading, tableData) => {
  const tableRows = tableData
    .map((item) =>
      !item?.value
        ? ``
        : `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">${item.label}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${item.value}</td>
      </tr>`
    )
    .join("");

  return `
    <html><body>
    <div style="font-family: Arial, sans-serif; background: #fff; max-width: 600px; margin: auto;">
      <div style="background-color: #1a1a1a; color: #fff; padding: 20px; text-align: center;">
        <h1>NOBLECRAFT CONSTRUCTION</h1>
      </div>
      <div style="background-color: #FF1616; color: #fff; padding: 15px; text-align: center;">
        <h2>${heading}</h2>
      </div>
      <div style="padding: 20px;">
        <p>Contact Details:</p>
        <table style="width: 100%; border-collapse: collapse;">${tableRows}</table>
      </div>
      <footer style="padding: 15px; text-align: center; font-size: 13px; color: #555;">
        <p><strong>NOBLECRAFT CONSTRUCTION</strong></p>
        <p>📞 (346) 234-6973 | 📧 support@noblecraft.com</p>
        <p>© ${new Date().getFullYear()} NOBLECRAFT. All rights reserved.</p>
      </footer>
    </div>
    </body></html>
  `;
};

const userTemplate = (heading, name) => {
  return `
    <html><body>
    <div style="font-family: Arial, sans-serif; background: #fff; max-width: 600px; margin: auto;">
      <div style="background-color: #1a1a1a; color: #fff; padding: 20px; text-align: center;">
        <h1>NOBLECRAFT CONSTRUCTION</h1>
      </div>
      <div style="background-color: #FF1616; color: #fff; padding: 15px; text-align: center;">
        <h2>${heading}</h2>
      </div>
      <div style="padding: 20px;">
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for contacting us. Our team will reach out to you shortly.</p>
        <p>📞 (346) 234-6973 | 📧 support@noblecraft.com</p>
        <p>– The NobleCraft Team</p>
      </div>
      <footer style="padding: 15px; text-align: center; font-size: 13px; color: #555;">
        <p><strong>NOBLECRAFT CONSTRUCTION</strong></p>
        <p>© ${new Date().getFullYear()} NOBLECRAFT. All rights reserved.</p>
      </footer>
    </div>
    </body></html>
  `;
};

// -------------------------
// EMAIL SENDER
// -------------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PASS,
  },
});

async function sendMail(from, to, subject, html) {
  return transporter.sendMail({ from, to, subject, html });
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
    const { name, email, message } = req.body;

    const { error } = contactValidationSchema.validate({ name, email, message });

    if (error) {
      return res.status(400).json({
        isSuccess: false,
        message: "Invalid Data",
        error: error.details[0].message,
      });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({
      isSuccess: true,
      message: "Contact submitted successfully",
    });

    // Send email in background
    Promise.all([
      sendMail(
        SMTP_MAIL,
        email,
        "We've received your message",
        userTemplate("Thank You for Contacting Us", name)
      ),
      sendMail(
        SMTP_MAIL,
        SMTP_MAIL,
        "New Contact Message",
        firmTemplate("New Contact Form Submission", [
          { label: "Name", value: name },
          { label: "Email", value: email },
          { label: "Message", value: message || "No message" },
        ])
      ),
    ]).catch(console.error);
  } catch (err) {
    console.error("Contact API error:", err);
    res.status(500).json({ isSuccess: false, message: "Internal Server Error" });
  }
}
