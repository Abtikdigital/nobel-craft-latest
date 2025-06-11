import Footer from "../Section/Footer";
import Navbar from "../Section/Navbar";
import Hero from "../Section/Hero";
import Image1 from "../assets/Contact/image1.png";
import LatestProject from "../Section/LatestProject";
import Image2 from "../assets/Project/image1.png";
import Image3 from "../assets/Project/image2.png";
import Image4 from "../assets/Project/image3.png";

const Project = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="project the Future, One Brick at a Time"
        heading2="checkFrom residential dream homes to industrial-scale developments, NobleCraft delivers unmatched construction quality, cutting-edge materials, and flawless execution — on time, every time."
        heading={[
          {
            heading: "Construction",
            description: `Full-scale building solutions for homes, offices, and industries—safe, strong, and precise.`,
            img: Image1,
          },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">About this Project</h2>
          <p className="text-gray-700 text-lg">
            This is a description of your content. It can include anything you
            want to communicate to your users about the section or topic.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={Image2}
            alt="Descriptive Alt Text"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="w-full h-screen p-10">
        <img
          src={Image3}
          alt="Full Screen Visual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={Image4}
            alt="Descriptive Image"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Engaging Headline</h2>
          <p className="text-gray-700 text-lg">
            This is a short, meaningful description that highlights your content
            or service. It adjusts beautifully across screen sizes and ensures a
            great user experience.
          </p>
        </div>
      </div>

      <LatestProject />

      <Footer />
    </>
  );
};
export default Project;
