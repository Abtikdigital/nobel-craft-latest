import React from "react"
import Footer from "../Section/Footer"
import Navbar from "../Section/Navbar"
import Hero from "../Section/Hero"
import Image1 from "../assets/ElectricalGoodsService/Image1.png"
import Contact from "../Section/Contact"
import FAQSection from "../Section/FAQSection"
import FadeInSection from "../utils/FadeIn"
import LatestProject from "../Section/LatestProject"
import Image2 from "../assets/ElectricalGoodsService/Image2.jpg"
import Image3 from "../assets/ElectricalGoodsService/Image3.jpg"
import IconImage from "../assets/ElectricalGoodsService/IconImage1.png"
import { useDispatch } from "react-redux"


const ElectricalGoods = () => {
  const disp = useDispatch()
  const handleOpenDialog = () => {
    disp({ type: "open" })
  }
  return (<>
    <Navbar />
    <FadeInSection>
      <Hero
        title="Electrical Goods"
        description="high-performance electrical items trusted by industry pros. We supply everything from switches, wires, and conduits to industrial-grade control systems – all sourced for reliability and safety."
        heading={[
          {
            heading: "Electrical Goods",
            description: `Certified, high-performance electrical items trusted by industry pros..`,
            img: IconImage,
          },
        ]}
        lists={["Switches & Sockets", "Wires & Cables", "LED Lights", "Panels & DB Boxes", "Plugs & Sockets", "Pipe & Fittings"]}
        bgImage={Image3}
      />
    </FadeInSection>
    <FadeInSection>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
        <div className="sub-description text-[#666666]">
          At NobleCraft Construction Pvt. Ltd., we offer a wide selection of electrical goods, perfectly suited for both residential and commercial needs. Our products are sourced from trusted brands and are known for durability, efficiency, and safety compliance.
        </div>
        <div className="sub-description text-[#666666]">
          Whether you're an architect, builder, or homeowner, our team ensures you get the right solutions for your project. From large-scale installations to everyday essentials, we provide expert recommendations and dependable products every time.


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
              At NobleCraft Construction Pvt. Ltd., our streamlined process ensures quality, efficiency, and transparency from concept to completion. Every project we handle follows a proven method that guarantees timely delivery and client satisfaction.
            </p>
            <ul className="flex flex-col gap-y-2 list-disc list-inside">
              <li className="sub-description">Initial Consultation & Requirement Gathering</li>
              <li className="sub-description">Planning, Design, and Cost Estimation</li>
              <li className="sub-description">Procurement of Quality Materials</li>
              <li className="sub-description">Skilled Execution with Continuous Supervision</li>
              <li className="sub-description">Final Handover and Client Review</li>
            </ul>
          </div>
          {/* Quote */}
          <div className="flex-1 flex justify-center items-center">
            <button className="white-red-button" onClick={handleOpenDialog}>FREE QUOTE</button>
          </div>
        </div>
        <div className="w-full md:w-3/4 relative ">
          <img src={Image2} className="w-full h-full" />
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
      <FAQSection faqData={[
        {
          question: "1. What types of electrical goods do you supply?",
          answer:
            "We supply a wide range of electrical items including switches, wiring, panels, conduits, distribution boards, lighting fixtures, industrial controls, and safety components.",
        },
        {
          question: "2. Are your electrical products certified?",
          answer:
            "Yes, all our electrical goods are certified by recognized safety and quality standards. We only deal with trusted brands that meet both national and international compliance.",
        },
        {
          question: "3. Do you provide installation support for electrical goods?",
          answer:
            "While we mainly supply the materials, we can connect you with reliable electricians and contractors in our network for professional installation and setup.",
        },
        {
          question: "4. Can I place small or individual orders for electrical products?",
          answer:
            "Yes, we cater to both bulk and small orders. Whether you're a homeowner needing a few items or a builder sourcing for an entire site, we’ve got you covered.",
        },
        {
          question: "5. Do you offer custom electrical solutions for projects?",
          answer:
            "Absolutely. We assist builders, architects, and engineers with tailored electrical product recommendations based on the project’s technical and safety needs.",
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
export default React.memo(ElectricalGoods)