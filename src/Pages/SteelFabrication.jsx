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
          title="Construction"
          heading2="checkFrom residential dream homes to industrial-scale developments, NobleCraft delivers unmatched construction quality, cutting-edge materials, and flawless execution — on time, every time."
          heading={[
            {
              heading: "Construction",
              description: `Full-scale building solutions for homes, offices, and industries—safe, strong, and precise.`,
              img: Image1,
            },
          ]}
        />
      </FadeInSection>
      <FadeInSection>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-6 gap-6 md:gap-10 py-10 ">
          <div className="sub-description text-[#666666]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorem iure in, provident tempore blanditiis voluptatum corrupti
            sed dolorum nesciunt voluptatibus sunt aut ipsum neque ullam? Sit
            ipsa iste ratione doloribus? Quaerat voluptate expedita consequatur
            explicabo quas, atque unde delectus.
          </div>
          <div className="sub-description text-[#666666]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorem iure in, provident tempore blanditiis voluptatum corrupti
            sed dolorum nesciunt voluptatibus sunt aut ipsum neque ullam? Sit
            ipsa iste ratione doloribus? Quaerat voluptate expedita consequatur
            explicabo quas, atque unde delectus.
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
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin cursus, dolor a mollis consectetur, risus dolor fermentum
                massa, a commodo elit dui sit amet risus.
              </p>
              <ul className="flex flex-col gap-y-2 list-disc list-inside">
                <li className="sub-description">List 1</li>
                <li className="sub-description">List 1</li>
                <li className="sub-description">List 1</li>
                <li className="sub-description">List 1</li>
                <li className="sub-description">List 1</li>
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
      <FadeInSection>
        <LatestProject />
      </FadeInSection>
      <FadeInSection>
        <FAQSection />
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