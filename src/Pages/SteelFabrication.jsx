import Footer from "../Section/Footer"
import Navbar from "../Section/Navbar"
import Image1 from "../assets/SteelFabricationService/Image1.png"
import Contact from "../Section/Contact"
import FAQSection from "../Section/FAQSection"
import LatestProject from "../Section/LatestProject"
import FadeInSection from "../utils/FadeIn"
import Hero from "../Section/Hero"

const SteelFabrication=()=>{
    return(<>
      <Navbar />
      <FadeInSection>
        <Hero
          title="Steel Fabrication"
          description="We specialize in custom steel and iron fabrication for gates, grills, staircases, railings, and industrial structures—crafted with precision, strength, and design flexibility."
          heading={[
            {
              heading: "Steel Fabrication",
              description: `Custom metalwork for frames, gates, and railings—built with precision to match your needs.`,
              img: Image1,
            },
          ]}
           lists={["Gates & Railings", "Window Grills", "Steel Frames","Staircase Fabrication", "Custom Welding", "Industrial Structures"]}
        />
      </FadeInSection>
      <FadeInSection>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
          <div className="sub-description text-[#666666]">
            At NobleCraft Construction, we offer expert steel and iron fabrication services designed to meet both structural and aesthetic needs. From frames and gates to railings and staircases, our skilled team delivers durable and precise metalwork tailored to your project’s specifications.
          </div>
          <div className="sub-description text-[#666666]">
            Whether you need custom staircases, balcony railings, industrial frameworks, or decorative elements, we deliver with exacting standards and timely execution.


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
                LOur construction and fabrication process is built on precision, efficiency, and transparency. From concept to completion, we ensure every phase is executed with care and professionalism.
              </p>
              <ul className="flex flex-col gap-y-2 list-disc list-inside">
                <li className="sub-description">Site Visit & Client Consultation</li>
                <li className="sub-description">Custom Design Planning</li>
                <li className="sub-description">Material Selection & Cost Estimation</li>
                <li className="sub-description">Fabrication & On-Site Execution</li>
                <li className="sub-description">Final Quality Check & Project Delivery</li>
              </ul>
            </div>
            {/* Quote */}
            <div className="flex-1 flex justify-center items-center">
              <button className="white-red-button">FREE QUOTE</button>
            </div>
          </div>
          <div className="w-full md:w-3/4 relative ">
            <img src={Image1} className="w-full h-full" />
            <div className=" md:absolute w-full bottom-0  grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 ">
              <div className="bg-[#FF1616] w-full py-4 pl-6 ">
                <h2 className="sub-heading2  text-black ">Call for a Quote</h2>
                <h3 className="sub-heading2  text-black">(346) 234-6973</h3>
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
        <FAQSection faqData={[
            {
              question: "1. What types of steel fabrication services do you provide?",
              answer:
                "We specialize in custom metalwork for gates, railings, frames, staircases, grills, sheds, and industrial structures.",
            },
            {
              question: "2. Can you handle both residential and commercial projects?",
              answer:
                "Yes, we offer steel fabrication solutions for homes, commercial buildings, factories, and warehouses.",
            },
            {
              question: "3. What materials do you use for fabrication?",
              answer:
                "We primarily work with high-grade mild steel, stainless steel, and galvanized steel depending on your requirements.",
            },
            {
              question: "4. Is custom design and onsite measurement available?",
              answer:
                "Absolutely. We offer custom design services and also provide onsite measurements to ensure a perfect fit.",
            },
            {
              question: "5. How long does fabrication and installation typically take?",
              answer:
                "Depending on the size and complexity of the project, fabrication can take anywhere from 7 to 21 days including installation.",
            },
            ]}/>
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>)
}
export default SteelFabrication