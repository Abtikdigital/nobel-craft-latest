import React from "react"
import Contact from "../Section/Contact"
import FAQSection from "../Section/FAQSection"
import Footer from "../Section/Footer"
import LatestProject from "../Section/LatestProject"
import Navbar from "../Section/Navbar"
import FadeInSection from "../utils/FadeIn"
import Hero from "../Section/Hero"
import Image1 from "../assets/BuildingHardwareService/Image1.png"
import Image2 from "../assets/BuildingHardwareService/Image2.jpg"
import Image3 from "../assets/BuildingHardwareService/Image3.jpg"
import IconImage from "../assets/BuildingHardwareService/IconImage1.png"
import { useDispatch } from "react-redux"
const BuildingHardware = () => {
  const disp = useDispatch()
  const handleOpenDialog = () => {
    disp({ type: "open" })
  }
  return (<>
    <Navbar />
    <FadeInSection>
      <Hero
        title="Building Hardware"
        description="Durable and high-performance building hardware solutions that ensure strength, reliability, and efficiency for all types of construction and renovation projects."
        heading={[
          {
            heading: "Building Hardware",
            description: `Durable hardware essentials for any construction or renovation project.`,
            img: IconImage,
          },
        ]}
        lists={["Door Handles & Locks", "Cabinet Hardware", "Screws & Nuts", "Window Fittings", "Wall Plugs & Anchors", "Hinges & Locks"]}
        bgImage={Image2}
      />
    </FadeInSection>
    <FadeInSection>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
        <div className="sub-description text-[#666666]">
          At NobleCraft Construction Pvt. Ltd., we offer a wide range of building hardware products that meet the highest industry standards. Whether you're working on a commercial structure or a residential property, our durable and precision-engineered components support every stage of construction with unmatched reliability.
        </div>
        <div className="sub-description text-[#666666]">
          Our hardware inventory includes fasteners, anchors, reinforcements, brackets, and other essential components — all manufactured to meet strict quality and safety standards. We collaborate with builders, contractors, and architects to ensure seamless integration of hardware that enhances structural integrity and long-term performance.
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
              At NobleCraft Construction Pvt. Ltd., our building hardware process is designed for precision, reliability, and long-term durability. We ensure each component we deliver is tested, standardized, and perfectly suited to your construction needs — whether you're a builder, architect, or contractor.

            </p>
            <ul className="flex flex-col gap-y-2 list-disc list-inside">
              <li className="sub-description">Initial Consultation & Site Assessment</li>
              <li className="sub-description">Customized Design & Material Planning</li>
              <li className="sub-description">Cost Estimation & Project Timeline Finalization</li>
              <li className="sub-description">On-Site Construction & Fabrication</li>
              <li className="sub-description">Ensure on-time delivery with ongoing support</li>
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
            question: " 1. What types of building hardware do you offer?",
            answer:
              "We offer a wide range of hardware products including fasteners, anchors, brackets, structural supports, and industrial fittings — suitable for residential, commercial, and industrial construction.",
          },
          {
            question: " 2. Are your hardware materials certified?",
            answer:
              "Yes, all our hardware components are sourced from certified manufacturers and meet industry standards for quality, safety, and durability.",
          },
          {
            question: "3. Do you provide custom hardware solutions?",
            answer:
              "Absolutely. We can recommend or source custom hardware based on your project’s specifications, load requirements, and structural design.",
          },
          {
            question: " 4. Can you help with bulk orders for large construction projects?",
            answer:
              "Yes. We specialize in handling bulk requirements for large-scale projects and ensure timely delivery with complete support.",
          },
          {
            question: " 5. Do you offer on-site support or consultation?",
            answer:
              "Yes, our team can assist with on-site hardware recommendations, installation guidance, and technical support as needed.",
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
export default React.memo(BuildingHardware)