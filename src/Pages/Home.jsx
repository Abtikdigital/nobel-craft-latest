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

const Home = () => {
  return (
    <>
      <Navbar />
      <FadeInSection>
        <Hero
          title="Construction"
          heading={[
            {
              heading: "Construction",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio`,
              img: Image1,
            },
            {
              heading: "Foundation Work",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio`,
              img: Image2,
            },
            {
              heading: "Site Management",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio`,
              img: Image3,
            },
          ]}
        />
      </FadeInSection>
      <FadeInSection>
        <section className="grid grid-cols-1 md:grid-cols-4 md:gap-5 text-[#1b1b1b] py-2.5 px-5 md:px-10 items-center">
          <div className="md:col-span-3">
            <h2 className="sub-heading text-[#2A2A2A]">
              Get a Free Quote For Your Project
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <button className={`white-red-button`}>Free Quote</button>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
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
      </FadeInSection>

      <FadeInSection>
        <Servicesection />
      </FadeInSection>
      <FadeInSection>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#2A2A2A] p-6 flex flex-col gap-6 justify-center">
            <h2 className="sub-heading text-white text-left">
              We’ve Been Building For Over 10 Years
            </h2>
            <div className="w-24 h-2 bg-[#FF1616]"></div>
            <h3 className="sub-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
            </h3>
            <button className="white-red-button">About Us</button>
          </div>
          <div className="relative">
            <img src={AboutImage} alt="About Us" />
            <div className="md:absolute bottom-0  w-full  grid grid-rows-1 grid-cols-1 md:grid-cols-2  ">
              <div className="bg-[#FF1616] py-4 pl-6">
                <h2 className="sub-heading2 text-black text-left">
                  Call For Quote
                </h2>
                <a className="sub-heading2 text-black" href="tel:+13462346973">
                  (346) 234-6973
                </a>
              </div>
              <div className="border-b-1 border-black/25 pl-6 md:pl-0 md:bg-white py-4 pr-6 flex justify-start md:justify-end items-center">
                <button className="white-red-button">
                  ONLINE ESTIMATE FORM
                </button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <FAQSection />
      </FadeInSection>
      <FadeInSection>
        <TestimonialsSection />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </>
  );
};

export default Home;
