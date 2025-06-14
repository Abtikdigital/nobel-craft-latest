import React from "react"
import Footer from "../Section/Footer"
import Navbar from "../Section/Navbar"
import Image1 from "../assets/SteelFurniture/Image1.png"
import Hero from "../Section/Hero"
import Contact from "../Section/Contact"
import LatestProject from "../Section/LatestProject"
import FadeInSection from "../utils/FadeIn"
import FAQSection from "../Section/FAQSection"
import Image2 from "../assets/SteelFurniture/Image2.jpg"
import Image3 from "../assets/SteelFurniture/Image3.jpg"

const SteelFurniture=()=>{
    return(<>
    <Navbar />
      <FadeInSection>
        <Hero
          title="Steel Furniture"
          description="custom-designed steel furniture for residential, commercial, and industrial spaces—crafted for strength, utility, and modern style."
          heading={[
            {
              heading: "Steel Furniture",
              description: `Stylish, long-lasting steel furniture for residential and commercial use.`,
              img: Image1,
            },
          ]}
           lists={["Chairs & Stools", "Dining & Cafe Sets", "Cabinets & Lockers","Office Desks", "Custom Fabrications", "Beds & Bunk Frames"]}
          bgImage={Image3}
        />
      </FadeInSection>
      <FadeInSection>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
          <div className="sub-description text-[#666666]">
            At NobleCraft, we design and manufacture premium-quality steel and iron furniture tailored for modern homes, offices, and industrial environments. Our furniture is crafted with durability, precision, and contemporary aesthetics in mind.
          </div>
          <div className="sub-description text-[#666666]">
           From custom tables and cabinets to shelving units and workstations, we offer functional designs built to withstand daily wear while enhancing your space. Whether you need bulk manufacturing or a bespoke piece—we deliver on strength and style.
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/4 flex flex-col bg-[#2A2A2A] p-6 space-y-6 py-6 md:space-y-10 md:py-10 ">
            {/* heading Section */}
            <div className="flex flex-col space-y-6">
              <h2 className="sub-heading text-4xl text-white text-left">
                About Process
              </h2>
              <div className="w-12 h-2 bg-[#FF1616]"></div>
            </div>
            {/* Content Section */}
            <div className="flex flex-col space-y-6">
              <p className="sub-description">
               At NobleCraft, we follow a streamlined, quality-first process to deliver durable and stylish steel furniture. Every step is tailored to meet your exact needs—from design to installation.
              </p>
              <ul className="flex flex-col gap-y-2 list-disc list-inside">
                <li className="sub-description">Requirement discussion & measurements</li>
                <li className="sub-description"> Custom design drafting & approval</li>
                <li className="sub-description">Material cutting & fabrication</li>
                <li className="sub-description">Surface finishing & quality check</li>
                <li className="sub-description">Final delivery & on-site fitting</li>
              </ul>
            </div>
            {/* Quote */}
            <div className="flex-1 flex justify-center items-center">
              <button className="white-red-button">FREE QUOTE</button>
            </div>
          </div>
          <div className="w-full md:w-3/4 relative ">
            <img src={Image2} className="w-full h-full" />
            <div className=" md:absolute w-full bottom-0  grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 ">
              <div className="bg-[#FF1616] w-full py-4 pl-6 ">
                <h2 className="sub-heading2  text-black ">Call for a Quote</h2>
                <h3 className="sub-heading2  text-black">+91 70854 87001</h3>
              </div>
              <div className=" border-b-1 border-black/25 flex justify-center items-center bg-white">
                <button className="white-red-button">
                  ONLINE ESTIMATE FORM
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      {/* <FadeInSection>
        <LatestProject />
      </FadeInSection> */}
      <FadeInSection>
        <FAQSection
         faqData={[
            {
              question: "1. What types of steel furniture do you manufacture?",
              answer:
                "We offer a wide range of steel furniture including wardrobes, office tables, cabinets, chairs, storage racks, and custom-designed solutions for both residential and commercial use.",
            },
            {
              question: "2. Can I request a custom design?",
              answer:
                "Yes, we specialize in custom steel furniture. Share your design or requirements, and our team will craft it to your exact specifications.",
            },
            {
              question: "3. What is the average delivery time for an order?",
              answer:
                "Standard products are typically delivered within 7–10 business days. Custom furniture orders may take 2–4 weeks depending on complexity and quantity.",
            },
            {
              question: "4. Do you offer powder coating or other finishes?",
              answer:
                "Absolutely. We provide various finishes including powder coating, paint, matte, gloss, and rust-resistant treatments based on your preference.",
            },
            {
              question: "5. Is your steel furniture rust-proof and durable?",
              answer:
                "Yes. We use high-quality, treated steel to ensure durability, strength, and resistance to corrosion for long-term usage.",
            },
          ]} />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>)
}
export default React.memo(SteelFurniture)