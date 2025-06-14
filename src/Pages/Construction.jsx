import React from "react";
import Contact from "../Section/Contact";
import FAQSection from "../Section/FAQSection";
import Hero from "../Section/Hero";
import Footer from "../Section/Footer";
import LatestProject from "../Section/LatestProject";
import Navbar from "../Section/Navbar";
import FadeInSection from "../utils/FadeIn";
import Image1 from "../assets/ConstructionService/Image1.jpeg";
import Image2 from "../assets/ConstructionService/Image2.jpeg"

const Construction = () => {
  return (
    <>
      <Navbar />
      <FadeInSection>
        <Hero
          title="Construction"
          description="Building the future with strength and precision—our residential, commercial, and industrial projects are crafted to last and designed to inspire."
          heading={[
            {
              heading: "Construction",
              description: `Full-scale building solutions for homes, offices, and industries—safe, strong, and precise.`,
              img: Image1,
            },
          ]}
          lists={["Building", "Furniture", "Fabrication","Electrical", "Hardware", "decore"]}
         
          bgImage={Image2}
        />
      </FadeInSection>
      <FadeInSection>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
          <div className="sub-description text-[#666666]">
            NobleCraft Construction specializes in high-quality residential, commercial, and industrial building projects. We focus on durable construction, innovative design, and strict safety standards to ensure every structure stands the test of time.
          </div>
          <div className="sub-description text-[#666666]">
            From planning and design to final execution, our skilled team delivers projects on time and within budget. With a client-first approach and reliable project management, we create spaces that are both functional and future-ready.


          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/4 flex flex-col bg-[#2A2A2A] p-6 space-y-6 py-6 md:space-y-10 md:py-10 ">
            {/* heading Section */}
            <div className="flex flex-col space-y-6">
              <h2 className="sub-heading text-4xl text-white text-left">
                Our Construction Process
              </h2>
              <div className="w-12 h-2 bg-[#FF1616]"></div>
            </div>
            {/* Content Section */}
            <div className="flex flex-col space-y-6">
              <p className="sub-description">
                At NobleCraft Construction, we follow a simple and efficient process—from consultation to final handover—ensuring timely delivery, quality work, and complete client satisfaction.
              </p>
              <ul className="flex flex-col gap-y-2 list-disc list-inside">
                <li className="sub-description">Site visit & client consultation</li>
                <li className="sub-description">Concept planning & design</li>
                <li className="sub-description">Budgeting & project timeline approval</li>
                <li className="sub-description">Material selection & procurement</li>
                <li className="sub-description">Construction & progress updates</li>
                <li className="sub-description">Final inspection & handover</li>
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
        <FAQSection
          faqData={[
            {
              question: "1. What types of construction projects do you handle?",
              answer:
                "We undertake residential buildings, commercial offices, retail spaces, industrial units, and institutional projects. Our services range from new construction to remodeling and turnkey projects.",
            },
            {
              question: "2. Do you provide design and planning support as well?",
              answer:
                "Yes. We offer end-to-end solutions that include architectural design, structural planning, 3D visualization, and building approvals—ensuring a seamless start to your project.",
            },
            {
              question: "3. What is your typical project timeline?",
              answer:
                "Project timelines vary based on size and complexity. A typical residential build may take 3–6 months, while larger commercial projects may extend up to 12 months. We provide a detailed schedule before starting.",
            },
            {
              question: "4. Are your construction materials and methods up to standard?",
              answer:
                "Absolutely. We use high-grade materials that meet or exceed industry standards and follow best practices in construction safety, environmental compliance, and quality control.",
            },
            {
              question: "5. Can I visit past construction sites or completed projects?",
              answer:
                "Yes, we’re happy to arrange site visits for prospective clients. Seeing our completed work is the best way to understand our craftsmanship, attention to detail, and execution quality.",
            },
          ]}


        />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};
export default React.memo(Construction);
