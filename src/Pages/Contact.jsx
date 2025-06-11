import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Navbar from "../Section/Navbar";
import Hero from "../Section/Hero";
import Footer from "../Section/Footer";
import FadeInSection from "../utils/FadeIn";
import Image1 from "../assets/ContactUs/Hero.webp";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { addContact } from "../apis/contactApis"; // ✅ adjust if needed

const FAQCard = ({ question, answer, isOpen, onToggle, arr, index }) => {
  return (
    <div
      className={`${arr.length - 1 !== index ? "border-b" : ""} border-gray-300 px-4 py-2`}
    >
      <div
        className="cursor-pointer flex justify-between items-center text-lg font-semibold text-black py-4"
        onClick={onToggle}
      >
        <span className="sub-heading3 text-left w-full">{question}</span>
        <span className="w-8 h-8 bg-[#FF1616] text-white flex items-center justify-center rounded-full">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </div>
      {isOpen && <p className="sub-description text-[#666666] pb-4">{answer}</p>}
    </div>
  );
};

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const faqData = [
    {
      question: "1. What types of construction projects do you handle?",
      answer:
        "We specialize in residential, commercial, and industrial construction projects—from small renovations to large-scale developments.",
    },
    {
      question: "2. Do you offer custom steel or iron furniture?",
      answer:
        "Yes. We specialize in custom-designed steel and iron furniture for homes, offices, and industrial spaces — built for durability, functionality, and aesthetics.",
    },
    {
      question: "3. What is your typical project timeline?",
      answer:
        "Project timelines vary depending on size and complexity. We provide clear timelines after consultation and stick to agreed schedules to ensure on-time delivery.",
    },
    {
      question: "4. Do you provide electrical goods and building materials too?",
      answer:
        "Yes, we supply certified electrical components and high-quality building materials. Our all-in-one service ensures you get everything you need from one trusted source.",
    },
    {
      question: "5. How can I request a quote or consultation?",
      answer:
        "You can contact us through our website's inquiry form, email, or phone. We’ll schedule a consultation and provide a detailed quote based on your needs.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const onSubmit = async (data) => {
    try {
      const res = await addContact(data);
      if (res?.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting us.",
          confirmButtonColor: "#FF1616",
        });
        reset();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#FF1616",
      });
    }
  };

  return (
    <>
      <Navbar />

      <FadeInSection>
        <Hero
          title="Contact Us"
          heading2="checkFrom residential dream homes to industrial-scale developments, NobleCraft delivers unmatched construction quality, cutting-edge materials, and flawless execution — on time, every time."
          heading={[
            {
              heading: "Construction",
              description:
                "Full-scale building solutions for homes, offices, and industries—safe, strong, and precise.",
              img: Image1,
            },
          ]}
        />
      </FadeInSection>

      <FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white py-10 px-6 text-center">
          <div className="md:col-span-2 flex flex-col justify-center items-center">
            <h3 className="sub-heading text-[#FF1616]">Call: (541) 931-3526</h3>
            <p className="sub-heading2 mt-2">
              We Can’t Wait to Make Your Ideas a Reality
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="white-red-button">ONLINE ESTIMATE FORM</button>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
          {/* Contact Form */}
          <div className="bg-[#F7F7F7] p-6">
            <h2 className="sub-heading text-[#2A2A2A] text-left">Get In Touch</h2>
            <div className="h-1 w-12 bg-[#FF1616] my-2"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
              <div>
                <input
                  className="w-full bg-white border border-gray-300 py-2 px-4 rounded"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  className="w-full bg-white border border-gray-300 py-2 px-4 rounded"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <textarea
                  className="w-full bg-white border border-gray-300 py-2 px-4 rounded"
                  placeholder="Message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="border border-[#666666] text-[#666666] py-2 px-6 text-sm font-medium hover:bg-[#666666] hover:text-white transition duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-white">
            {faqData.map((faq, index, arr) => (
              <FAQCard
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                arr={arr}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Contact;
