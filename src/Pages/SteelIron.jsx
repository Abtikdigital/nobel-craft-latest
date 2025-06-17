import React from "react"
import Footer from "../Section/Footer"
import Navbar from "../Section/Navbar"
import Image1 from "../assets/SteelIron/Image1.png"
import Hero from "../Section/Hero"
import Contact from "../Section/Contact"
import LatestProject from "../Section/LatestProject"
import FadeInSection from "../utils/FadeIn"
import FAQSection from "../Section/FAQSection"
import Image2 from "../assets/SteelIron/Image2.jpg"
import Image3 from "../assets/SteelIron/Image3.jpg"
import IconImage from "../assets/SteelIron/IconImage1.png"
import { useDispatch } from "react-redux"
const SteelFurniture = () => {
  const disp = useDispatch()
  const handleOpenDialog = () => {
    disp({ type: "open" })
  }
  return (<>
    <Navbar />
    <FadeInSection>
      <Hero
        title="Steel Iron"
        description="Reliable, load-bearing steel and iron—ideal for columns, beams, gates, grills, and custom fabrication in both residential and commercial projects."
        heading={[
          {
            heading: "Steel Iron",
            description: `Stylish, long-lasting steel furniture for residential and commercial use.`,
            img: IconImage,
          },
        ]}
        lists={["Steel Rods & Bars", "Iron Sheets & Plates", "Channels & Angles", "Beams & Columns", "Pipes & Tubes", "Customized Supply"]}
        bgImage={Image2}
      />
    </FadeInSection>
    <FadeInSection>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
        <div className="sub-description text-[#666666]">
          At NobleCraft, we provide high-grade steel and iron materials engineered for durability and strength. From TMT bars and metal sheets to custom-cut sections, our materials meet rigorous industry standards for construction and fabrication.
        </div>
        <div className="sub-description text-[#666666]">
          Whether you're reinforcing a high-rise structure or fabricating heavy-duty frames, our steel and iron products ensure long-term performance and precision. We serve builders, fabricators, and contractors with reliable supply and custom solutions.
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
              At NobleCraft, we follow a streamlined, quality-first process to deliver high-performance steel and iron solutions for structural construction, industrial fabrication, and heavy-duty applications. Every step is tailored to meet your exact project needs — from planning to installation.
            </p>
            <ul className="flex flex-col gap-y-2 list-disc list-inside">
              <li className="sub-description">Requirement Discussion & Site Measurements</li>
              <li className="sub-description"> Custom Technical Design & Approval</li>
              <li className="sub-description">Material Cutting & Fabrication</li>
              <li className="sub-description">Welding, Finishing & Quality Check</li>
              <li className="sub-description">Final Delivery & On-Site Installation</li>
            </ul>
          </div>
          {/* Quote */}
          <div className="flex-1 flex justify-center items-center">
            <button className="white-red-button" onClick={handleOpenDialog}>FREE QUOTE</button>
          </div>
        </div>
        <div className="w-full md:w-3/4 relative ">
          <img src={Image3} className="w-full h-full" />
          <div className=" md:absolute w-full bottom-0  grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 ">
            <div className="bg-[#FF1616] w-full py-4 pl-6 ">
              <h2 className="sub-heading2  text-black ">Call for a Quote</h2>
              <h3 className="sub-heading2  text-black"><a href="tel:+91 70854 87001">+91 70854 87001</a></h3>
            </div>
            <div className=" border-b-1 border-black/25 flex justify-center items-center bg-white">
              <button className="white-red-button" onClick={handleOpenDialog}>
                GET A FREE QUOTE
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
            question: "1. What types of steel and iron work do you offer?",
            answer:
              "We specialize in structural steel, iron fabrication, heavy-duty frames, beams, columns, staircases, railings, gates, grills, and custom industrial components.",
          },
          {
            question: "2. Do you handle both residential and commercial projects?",
            answer:
              "Yes. We provide steel and iron solutions for residential buildings, commercial complexes, industrial structures, and infrastructure projects.",
          },
          {
            question: "3. What is your quality assurance process?",
            answer:
              "All materials are sourced from trusted suppliers and go through strict quality checks, including welding inspections, surface finishing, and load tests.",
          },
          {
            question: "4. Do you offer delivery and installation services?",
            answer:
              "Yes. We provide end-to-end service, including safe transport of fabricated parts and expert on-site installation.",
          },
          {
            question: "5. How long does fabrication and installation take?",
            answer:
              "Timelines depend on project size and complexity, but we always aim for fast, efficient delivery without compromising quality.",
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