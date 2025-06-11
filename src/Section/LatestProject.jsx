import React from "react";
import Image1 from "../assets/LatestProject/Image1.png";
import Image2 from "../assets/LatestProject/Image2.png";
import Image3 from "../assets/LatestProject/Image3.png";
import { Link } from "react-router-dom";

const LatestProject = () => {
  const projects = [
    {
      img: Image1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.s",
    },
    {
      img: Image2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.s",
    },
    {
      img: Image3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.s Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.s Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.s",
    },
  ];

  return (
    <div className="px-4 py-10">
      {/* Heading */}
      <section className="flex flex-col justify-center items-center mb-10 text-center">
        <h2 className="sub-heading text-[#2A2A2A]">Latest Project</h2>
        <div className="w-24 h-2 bg-[#FF1616] mt-2"></div>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 space-x-2  sm:grid-cols-2 md:grid-cols-3 md:px-12 gap-12 mx-auto place-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" flex flex-col gap-6   bg-white   duration-300"
          >
            <img src={project.img} alt={`project-${index}`} className=" " />

            <div className="p-6 border-1 rounded-xs border-[#666666]  flex flex-col space-y-6">
              <h3 className="sub-heading3 text-[#2A2A2A]">{project.title}</h3>
              <p className="sub-description text-[#666666] h-30 max-h-30 overflow-hidden">
                {project.description}
              </p>
              <div>
                <Link className="border-[#666666] border-1 py-2 text-sm cursor-pointer  duration-300 hover:text-white hover:bg-[#666666] font-medium px-4 lg:px-6  text-[#666666]">
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
