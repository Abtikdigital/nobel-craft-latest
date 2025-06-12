import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const FAQCard = ({ question, answer, isOpen, onToggle, arr, index}) => {
  return (
    <div className={`${(arr.length - 1) != index && 'border-b'} border-gray-300 px-4 py-1 `}>
      <div
        className="cursor-pointer flex justify-between items-center text-lg font-semibold text-black py-4"
        onClick={onToggle}
      >
        <span className="sub-heading3">{question}</span>
        <span
          className="w-6 h-6 bg-[#FF1616] text-white flex items-center justify-center rounded-full text-xl"
        >
          {isOpen ? <Minus className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
        </span>
      </div>
      {isOpen && (
        <div
          className="sub-description text-[#666666]"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = (props) => {
  const [openIndex, setOpenIndex] = useState(null);

 

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-[#F7F7F7] w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-10 px-0 md:py-10 md:px-20"
    >
      {/* Left Side */}
      <div className="grid gap-6 px-6 md:px-0">
        <h2 className="sub-heading text-left text-[#2A2A2A]">
          Let’s Build Something Together
        </h2>
        <div className="w-14 h-2 bg-red-500 mb-6"></div>
        <p className="sub-description text-black">
         Whether you’re planning a new build, custom furniture, or need reliable hardware and electrical goods — NobleCraft is ready to bring your vision to life with quality and expertise.
        </p>
        <button
          className="white-red-button"
        >
          Get in Touch
        </button>
      </div>

      {/* Right Side (FAQ List) */}
      <div className="bg-white ">
        {props?.faqData?.map((faq, index, arr) => (
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
    </section>
  );
};

export default FAQSection;
