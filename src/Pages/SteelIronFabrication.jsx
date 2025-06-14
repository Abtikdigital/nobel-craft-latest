import Footer from "../Section/Footer"
import Navbar from "../Section/Navbar"
import Image1 from "../assets/SteelIronFabrication/Image1.png"
import Hero from "../Section/Hero"
import Contact from "../Section/Contact"
import LatestProject from "../Section/LatestProject"
import FadeInSection from "../utils/FadeIn"
import FAQSection from "../Section/FAQSection"


const SteelFurniture=()=>{
    return(<>
    <Navbar />
      <FadeInSection>
        <Hero
          title="Steel Iron Fabrication"
          description="Custom-engineered steel and iron solutions built for strength, precision, and modern architectural needs—ideal for residential, commercial, and industrial projects."
          heading={[
            {
              heading: "Steel Iron Fabrication",
              description: `Durable, custom steel-iron solutions for homes, offices, and industries.`,
              img: Image1,
            },
          ]}
           lists={["Gates & Grills", "Stair Railings", "Window Frames","Structural Supports", "Custom Welding", "Industrial Fabrication"]}
        />
      </FadeInSection>
      <FadeInSection>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
          <div className="sub-description text-[#666666]">
           At NobleCraft, we specialize in designing and manufacturing robust steel and iron structures. Our fabrication services are tailored for modern construction, blending high durability with contemporary design aesthetics.
          </div>
          <div className="sub-description text-[#666666]">
           Whether you need sturdy frameworks, industrial units, or custom architectural elements, our team delivers precision-crafted solutions to match your vision. From bulk production to bespoke installations, we ensure strength, reliability, and refined style.
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/4 flex flex-col bg-[#2A2A2A] p-6 space-y-6 py-6 md:space-y-10 md:py-10 ">
            {/* heading Section */}
            <div className="flex flex-col space-y-6">
              <h2 className="sub-heading text-4xl text-white text-left">
                Our Fabrication Process
              </h2>
              <div className="w-12 h-2 bg-[#FF1616]"></div>
            </div>
            {/* Content Section */}
            <div className="flex flex-col space-y-6">
              <p className="sub-description">
               At NobleCraft, we follow a streamlined, quality-driven process to deliver high-performance steel and iron solutions. From concept to completion, every stage is customized to meet your unique requirements.
              </p>
              <ul className="flex flex-col gap-y-2 list-disc list-inside">
                <li className="sub-description">Initial consultation & site measurements</li>
                <li className="sub-description">Custom design & client approval</li>
                <li className="sub-description">Precision cutting & fabrication</li>
                <li className="sub-description">Surface finishing & quality inspection</li>
                <li className="sub-description">Final delivery & on-site installation</li>
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
              question: "1. What does your steel and iron fabrication service include?",
              answer:
                "We offer full-service fabrication for beams, columns, gates, railings, industrial frames, and more—customized to meet structural, architectural, or industrial requirements.",
            },
            {
              question: "2. Do you fabricate components for residential and commercial buildings?",
              answer:
                "Yes. Our services cover residential, commercial, and industrial needs—whether it's a single custom piece or large-scale structural steelwork.",
            },
            {
              question: "3. Can you work with client-provided designs or blueprints?",
              answer:
                "Absolutely. We welcome your designs and also provide in-house drafting to refine or develop your ideas to fit your project goals.",
            },
            {
              question: "4. Is your steel and iron work weather-resistant or coated?",
              answer:
                "Yes. We offer galvanizing, powder coating, and anti-corrosion finishes to ensure long-lasting durability in all weather conditions.",
            },
            {
              question: "7. What’s the usual turnaround time?",
              answer:
                "Timelines depend on the scope, but we prioritize efficiency and quality—most projects are completed within 7–20 business days.",
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
export default SteelFurniture