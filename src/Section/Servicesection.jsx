import Counter from "../pages/Counter";
import ServiceImage from "../assets/navbar/image.png";

const ServicesSection = () => {
  return (
<section className="w-full box-border py-10 px-5 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row gap-7.5">
        <div className="flex-1 min-w-[280px]">
          <img
            src={ServiceImage}
            alt="Construction Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex-2 px-2.5">
          <h2 className="sub-heading text-left text-[#2A2A2A]">
            No Project Too Big Or Too Small
          </h2>
          <div className="w-12 h-1 bg-red-500 mb-6 rounded"></div>

          <div className="flex flex-wrap gap-5">
            <div className="flex-1 min-w-[250px]">
              <p className="sub-description text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat. Scelerisque lorem posuere
                iaculis nunc amet phasellus.
              </p>
              <p className="sub-description text-black ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam.
              </p>
            </div>
            <div className="flex-1 min-w-[250px]">
              <p className="sub-description text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat. Scelerisque lorem posuere
                iaculis nunc amet phasellus.
              </p>
              <button
                className="white-red-button"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 mt-8">
            <div className="flex-1 min-w-[200px] bg-red-500 text-white rounded-lg text-center py-7 px-5">
              <Counter target={12} />
              <p className="uppercase text-sm font-semibold mt-2 tracking-wide">
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
