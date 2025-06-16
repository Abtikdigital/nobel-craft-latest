import { motion } from "framer-motion";
import FadeInSection from "../utils/FadeIn";
import BgImage from "../assets/demo.webp";
import { Link } from "react-router-dom";

const Section = ({ title, heading, heading2, description, lists, bgImage, contactInfo, socialLinks }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch w-full min-h-fit  relative">

      {/* Left Section (Hero Content) */}
      <div className="w-full lg:w-3/4 relative overflow-hidden text-white flex items-center justify-center bg-black">
        {/* Smooth fade-in background layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bgImage ? bgImage : BgImage})`,
          }}
        />

        {/* Foreground content */}
        <FadeInSection delay={0.2}>
          <div className="relative z-10 flex flex-col justify-center  w-full h-full py-16 px-6 md:px-12 lg:px-24 space-y-10">
            <div className="flex items-start md:gap-x-3">
              <div className="border-l-[8px] border-red-600 h-12 translate-y-2 md:h-18"></div>
              <h1 className="text-[clamp(3rem,6vw,4rem)] font-extrabold leading-tight  px-2">
                {title}
              </h1>
            </div>

            <p className="text-lg font-light text-gray-200 px-2 max-w-3xl leading-relaxed">
              {description}
            </p>

            <Link className="red-white-button" to={"/services"}>View our work</Link>
          </div>
        </FadeInSection>
      </div>

      {/* Right Section (Services) */}
      <div className="w-full lg:w-[30%] bg-[#DB2626] text-white p-6 sm:p-8">
        <FadeInSection delay={0.4}>
          <h2 className="sub-heading border-b border-white/25 mb-2">
            {heading2}
          </h2>

          <div className="space-y-1">
            {heading.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3 + i * 0.37, // stagger each card
                }}
                className="flex flex-col gap-3 p-4 rounded-md border-b cursor-pointer border-white/25 last:border-none 
                           hover:bg-red-600 hover:shadow-lg transition-colors duration-300"
              >
                <h3 className="sub-heading2 flex items-center gap-2 text-white">
                  <img
                    src={e.img}
                    alt={`icon-${i}`}
                    className="w-7 h-7 object-contain"
                  />
                  {e.heading}
                </h3>
                <p className="sub-description">{e.description}</p>
              </motion.div>
            ))}
            {lists && <ul className="list-disc list-inside space-y-1.5  px-4">
              {lists?.map((list) => (
                <li className="sub-description border-b rounded py-0.5 cursor-pointer ">{list}</li>
              ))}</ul>}

            {
              contactInfo?.map((data) => {
                return (<div className=" gap-x-3 px-4 py-2 border-b rounded sub-description"><a className="flex gap-x-3 cursor-pointer items-center" href={data?.href}><img src={data?.icon} className="h-6 w-6" />{data?.link}</a></div>)
              })
            }
            {
              socialLinks && <div className="flex py-2 justify-start gap-x-3  px-4 sub-description border-b rounded">{socialLinks.map((item,idx) => (
               <Link
              key={idx}
              to={item.link}
              className="rounded-full group bg-gray-200 hover:bg-red-500 transition-colors duration-300 p-2 flex items-center justify-center"
            >
              <item.icons
                size={22}
                className="text-gray-700 group-hover:text-white transition duration-300"
              />
            </Link>
              ))
              }</div>}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Section;
