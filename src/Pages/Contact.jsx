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
        className="cursor-pointer flex justify-between items-center text-lg font-semibold text-black py-4 "
        onClick={onToggle}
      >
        <span className="sub-heading3 text-left w-full">{question}</span>
        <span className="w-8 h-8 bg-[#FF1616] text-white flex items-center justify-center rounded-full ">
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
      question: "1. How can I contact NobleCraft?",
      answer:
        "You can reach us via the contact form on this page, by phone, or by email. We’re here to assist you during business hours.",
    },
    {
      question: "2. Where is your office located?",
      answer:
        "Our office is located C/O Dorjee Wangmu. Khrimu, post office-kitpi, Tawang, Tawang, Tawang, Arunachal Pradesh, India. Pin 790104. You can also find the location map at the bottom of this page.",
    },
    {
      question: "3. What areas do you serve?",
      answer:
        "We primarily serve clients across Tawang, Arunachal Pradesh, but can also accommodate projects pan-India based on requirements.",
    },
    {
      question: "4. Is my information safe when I submit the form?",
      answer:
        "Absolutely. We respect your privacy and ensure all shared information is kept confidential and used only to respond to your inquiry.",
    },
    {
      question: "5. What are your working hours?",
      answer:
        "We are open from Monday to Saturday, 10:00 AM to 6:00 PM. We are closed on Sundays and public holidays.",
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
          heading={[
            {
              heading: "Contact Us",
              description:
                "Contact us for quick help with construction, fabrication, or material needs—fast, reliable, and expert support.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-6 py-10">
          {/* Contact Form */}
          <div className="bg-[#F7F7F7] p-6">
            <h2 className="sub-heading text-[#2A2A2A] text-left">Get In Touch</h2>
            <div className="h-2 w-12 bg-[#FF1616] my-2"></div>

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
