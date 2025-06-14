import React from "react";
import Navbar from "../Section/Navbar";
import FadeInSection from "../utils/FadeIn";
import Hero from "../Section/Hero";
import Image1 from "../assets/Hero/Image1.png";
import Image2 from "../assets/Hero/Image2.png";
import Image3 from "../assets/Hero/Image3.png";
import OnOurBestImage1 from "../assets/OnOurBest/Image1.png";
import Footer from "../Section/Footer";
import Contact from "../Section/Contact";
import AboutSection from "../Section/About";
import ChevronImage from "../assets/OnOurBest/CheveronRight.png";
import { useDispatch } from "react-redux";

const AboutUs = () => {
  const disp=useDispatch()
  const openDialog=()=>{
disp({type:"open"})
  }
  const OnlyTheBest = [
    {
      title: "Eco Friendly Construction",
      description:
        "We use sustainable materials and energy-efficient methods for greener, long-lasting buildings. ",
    },
    {
      title: "The Newest Technology Repairs",
      description:
        "Precision-built steel and iron solutions using modern fabrication technology. ",
    },
    {
      title: "High Quality Construction Management",
      description:
        "Timely execution with strong quality control and safety standards. ",
    },
  ];
  return (
    <>
      <Navbar />
      <FadeInSection>
        <Hero
          title="About Our Construction Company"
          heading2="About Us"
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
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col-reverse md:flex-row w-full">
          {/* Left Column */}
          <div className="w-full md:w-1/4 bg-[#F7F7F7] px-6 py-6 md:py-10 flex flex-col ">
            <h2 className="sub-heading mb-4 text-[#2A2A2A]">Only the Best</h2>
            {OnlyTheBest.map((section, index) => (
              <div
                key={index}
                className="flex gap-4 items-start py-3 border-b-1 border-[#FF1616] rounded-lg"
              >
                <img
                  src={ChevronImage}
                  className="w-6 h-6 mt-1"
                  alt="chevron"
                />
                <div>
                  <h3 className="sub-heading2 text-black">{section.title}</h3>
                  <p className="sub-description text-[#666666]">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
            <div className=" flex-1  flex md:justify-center items-center mt-4 ">
              <button className="white-red-button" onClick={openDialog}>FREE QUOTE</button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/4 relative">
            <img
              src={OnOurBestImage1}
              alt="Only the Best"
              className="w-full h-auto object-cover"
            />
            <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:absolute w-full bottom-0">
              <div className="bg-[#FF1616] border-b roundedb--lg  hover:bg-transparent/10 cursor-pointer transition-all duration-300 delay-75 md:border-none md:rounded-none  flex flex-col justify-center items-center py-4">
                <h2 className="sub-heading">12</h2>
                <h3 className="sub-heading2">YEARS ESTABLISHED</h3>
              </div>
              <div className="bg-[#2A2A2A] border-b roundedb--lg md:border-none hover:bg-transparent/10 cursor-pointer transition-all duration-300 delay-75    md:rounded-none  text-white flex flex-col justify-center items-center py-4">
                <h2 className="sub-heading">250</h2>
                <h3 className="sub-heading2 text-white">COMPLETED PROJECTS</h3>
              </div>
              <div className="bg-[#F7F7F7] border-b rounded-b-lg  md:border-r md:border-l hover:bg-transparent/10 cursor-pointer transition-all duration-300 delay-75   md:border-b-0 md:rounded-none text-[#2A2A2A] flex flex-col justify-center items-center py-4">
                <h2 className="sub-heading">24</h2>
                <h3 className="sub-heading2">FIELD WORKERS</h3>
              </div>
              <div className="bg-[#F7F7F7] border-b rounded-b-lg hover:border-none  md:border-none md:rounded-none hover:bg-transparent/10 cursor-pointer transition-all duration-300 delay-75  text-[#2A2A2A] flex flex-col justify-center items-center py-4">
                <h2 className="sub-heading">18</h2>
                <h3 className="sub-heading2">OFFICE STAFF</h3>
              </div>
            </div>
          </div>
        </div>
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
export default React.memo(AboutUs);
