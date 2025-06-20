import { useNavigate } from "react-router-dom";
import Counter from "../Pages/Counter";
import ServiceImage from "../assets/HomeService/Image1.jpeg";

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full box-border  bg-white py-10 md:py-0 ">
      <div className="flex flex-col md:flex-row gap-7.5 ">
        <div className="flex-1/4 min-w-[280px]  h-full">
          <img
            src={ServiceImage}
            alt="Construction Image"
            className="w-full  object-fill h-full  max-h-[75vh]"
          />
        </div>
        <div className="flex-3/4  md:py-0 px-5 md:px-5 flex flex-col justify-center">
          <h2 className="sub-heading text-left text-[#2A2A2A]">
            No Project Too Big Or Too Small
          </h2>
          <div className="w-12 h-2  bg-red-500 mb-6 "></div>

          <div className="flex flex-wrap gap-5">
            <div className="flex-1 min-w-[250px]">
              <p className="sub-description text-black mb-4">
                At NobleCraft, every project matters. From large commercial
                sites to handcrafted steel furniture, we maintain the same high
                standards of quality and precision.
              </p>
              <p className="sub-description text-black ">
                Our services cover construction, steel and iron furniture,
                fabrication, electric goods, and building materials — tailored
                for builders, architects, and homeowners alike.
              </p>
            </div>
            <div className="flex-1 min-w-[250px]">
              <p className="sub-description text-black mb-4">
                With years of experience and a passion for excellence,
                NobleCraft ensures timely delivery, professional execution, and
                customer satisfaction in every project we undertake. No matter
                the size, your vision is our priority.
              </p>

              <button
                className="white-red-button"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 mt-8">
            <div className="flex-1 min-w-[200px] bg-red-500 text-white rounded-lg text-center py-7 px-5">
              <Counter target={12} />
              <p className="uppercase text-sm font-semibold mt-2 tracking-wide ">
                Years Established
              </p>
            </div>
            <div className="flex-1 min-w-[200px] bg-[#2c2c2c] text-white rounded-lg text-center py-7 px-5">
              <Counter target={250} />
              <p className="uppercase text-sm font-semibold mt-2 tracking-wide">
                Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
