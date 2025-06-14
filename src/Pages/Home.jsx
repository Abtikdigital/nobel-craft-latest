import React from "react";
import Navbar from "../Section/Navbar";
import AboutImage from "../assets/serviceimg.png";

import Servicesection from "../Section/Servicesection";
import FAQSection from "../Section/FAQSection";
import TestimonialsSection from "../Section/TestimonialsSection";
import Contact from "../Section/Contact";
import Footer from "../Section/Footer";
import Hero from "../Section/Hero";
import Image1 from "../assets/Hero/Image1.png";
import Image2 from "../assets/Hero/Image2.png";
import Image3 from "../assets/Hero/Image3.png";
import FadeInSection from "../utils/FadeIn";
import LatestProject from "../Section/LatestProject";
import { useDispatch } from "react-redux";

const Home = () => {
  const disp = useDispatch()
  const handleOpen = () => {
    disp({ type: "open" })
  }
  return (
    <>
      <Navbar />
      <FadeInSection>
        <Hero
          title="Building the Future, One Brick at a Time"
          heading2="Our Services"
          heading={[
            {
              heading: "Construction",
              description: `Solutions for home & office builds`,
              img: Image1,
            },
            {
              heading: "Steel Furniture",
              description: `Durable home & office furniture`,
              img: Image2,
            },
            {
              heading: "Steel Fabrication",
              description: `Custom metalwork, built to last`,
              img: Image3,
            },
             {
              heading: "Steel Iron",
              description: `Premium grade iron solutions`,
              img: Image3,
            },
             {
              heading: "Steel Iron Fabrication",
              description: `Tailored steel & iron fabrication`,
              img: Image3,
            },
            {
              heading: "Electrical Goods",
              description: `High Quality electrical essentials`,
              img: Image3,
            },
            {
              heading: "Building Hardware",
              description: `Strong hardware for any project`,
              img: Image3,
            }

          ]}
        />
      </FadeInSection>
      {/* <FadeInSection>
        <section className="grid grid-cols-1 md:grid-cols-4 md:gap-5 text-[#1b1b1b] py-2.5 px-5 md:px-10 items-center">
          <div className="md:col-span-3">
            <h2 className="sub-heading text-[#2A2A2A]">
              Get a Free Quote For Your Project
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <button className={`white-red-button`} onClick={handleOpen}>Free Quote</button>
          </div>
        </section>
      </FadeInSection> */}
      {/* <FadeInSection>
        <section className="grid grid-cols-3 md:grid-cols-4 gap-5 justify-center items-center py-2.5 px-5 md:px-10">
          {Array(8)
            .fill()
            .map((_, index) => (
              <img
                key={index}
                src={"http://localhost"}
                alt={`Logo ${index + 1}`}
                className="w-full max-w-[100px] md:max-w-[120px] h-auto md:h-[90px] object-contain"
              />
            ))}
        </section>
      </FadeInSection> */}

      <FadeInSection>
        <Servicesection />
      </FadeInSection>
      {/* 
      <FadeInSection>
        <LatestProject />
      </FadeInSection> */}

      <FadeInSection>
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#2A2A2A] justify-center items-center">
          <div className=" p-6 flex flex-col gap-6 justify-center">
            <h2 className="sub-heading text-white text-left">
              We Build Trust — One Project at a Time
            </h2>
            <div className="w-24 h-2 bg-[#FF1616]"></div>
            <h3 className="sub-description">
              At NobleCraft Construction Pvt. Ltd., we turn ideas into reality with strength, precision, and trust. Whether it’s large-scale construction, custom steel and iron furniture, or detailed fabrication work, every project reflects our unwavering commitment to quality, reliability, and craftsmanship.
            </h3>
            <button className="white-red-button">About Us</button>
          </div>
          <div className="relative">
            <img src={AboutImage} alt="About Us " className="md:w-full md:h-full" />
            <div className="md:absolute bottom-0  w-full  grid grid-rows-1 grid-cols-1 md:grid-cols-2  ">
              <div className="bg-[#FF1616] py-4 pl-6">
                <h2 className="sub-heading2 text-black text-left">
                  Call For Quote
                </h2>
                <a className="sub-heading2 text-black" href="tel:+13462346973">
                 +91 70854 87001
                </a>
              </div>
              <div className="border-b-1 border-black/25 px-6 md:pl-0 md:bg-white py-4  flex justify-start md:justify-end items-center">
                <button className="white-red-button">
                  ONLINE ESTIMATE FORM
                </button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <FAQSection

          faqData={[
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
          ]}
        />
      </FadeInSection>
      {/* <FadeInSection>
        <TestimonialsSection />
      </FadeInSection> */}
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </>
  );
};

export default React.memo(Home);
