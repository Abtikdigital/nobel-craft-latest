import BgImage from "../assets/demo.webp";

const Section = ({ title, heading }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch w-full min-h-fit">
      {/* Left Section (Hero Content) */}
      <div
        className="w-full lg:w-3/4 text-white flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${BgImage})`,
        }}
      >
        <div className="flex flex-col justify-center w-full h-full py-16 px-6 md:px-12 lg:px-24 space-y-10">
          <div className="flex items-start gap-x-3 ">
            <div className="border-l-[8px] border-red-600 h-14 md:h-full"></div>
            <h1 className="text-[clamp(3rem,6vw,4rem)] font-extrabold leading-tight px-2 ">
              {title}
            </h1>
          </div>

          <p className="text-lg font-light text-gray-200 px-2 max-w-3xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis
            egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet
            viverra id aliquet neque odio.
          </p>

          <button className="red-white-button">
            View our work
          </button>
        </div>
      </div>

      {/* Right Section (Services) */}
      <div className="w-full lg:w-[30%] bg-[#DB2626] text-white p-6 sm:p-8">
        <h2 className="sub-heading border-b border-white/25  mb-2">
          Our Services
        </h2>

        <div className="space-y-6">
          {heading.map((e, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-4 rounded-md border-b cursor-pointer border-white/25 last:border-none 
                         hover:bg-red-600 hover:shadow-lg transition-colors duration-300"
            >
              <h3 className="sub-heading2">
                <img
                  src={e.img}
                  alt={`icon-${i}`}
                  className="w-7 h-7 object-contain"
                />
                {e.heading}
              </h3>
              <p className="sub-description">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
