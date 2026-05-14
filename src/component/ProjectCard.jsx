// import React from "react";
import github from "../assets/github.png";
import { SquareArrowOutUpRight } from "lucide-react";
function ProjectCard({
  image,
  title = "Project title",
  description = "Add a brief description of the project here. Highlight key features, technologies used, and any notable achievements or challenges overcome during development.",
  techStack = ["React", "Node.js", "Express", "MongoDB"],
  bgReverse = false,
  githubLink = "#",
  liveLink = [false, "#"],
  // projectScope = "Academic Project",
}) {
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`flex ${bgReverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"} justify-center items-center w-full sm:w-[80%] h-full mt-10 ${bgReverse ? "bg-linear-to-l" : "bg-linear-to-r"} from-gray-800/50   to-gray-700 rounded-lg px-4 py-4`}
      >
        <div className=" md:px-3 md:py-3 w-full md:w-[50%] h-full flex justify-center items-center animate-bounceUp rounded-lg overflow-hidden">
          <div className="w-full  md:w-150 self-center h-full flex justify-center items-center rounded-lg overflow-hidden">
            <img src={image} className="w-full h-full" alt="Campus Hire" />
          </div>
        </div>
        <div className="w-full p-3 md:w-[50%] h-full flex flex-col justify-start self-start items-start gap-4 mt-4 sm:mt-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl text-blue-500 sm:text-3xl  font-bold jetbrains-mono-bold">
              {title}
            </h1>
            {/* <span className="flex text-[clamp(0.5rem,2vh,1.5rem)] bg-gray-900/50  px-2 py-1 rounded-full text-gray-300 ">
              {projectScope}
            </span> */}
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <p
                key={index}
                className="jetbrains-mono-normal  text-green-500 bg-gray-900 group-[]: px-2 py-1 shadow-md shadow-green-900 rounded-lg text-xs sm:text-sm translate-y- hover:-translate-y-1 transition-all duration-300"
              >
                {tech}
              </p>
            ))}
          </div>
          <p className="text-[clamp(0.8rem,2vh,2rem)] montserrat-normal">
            {description}
          </p>
          <div className="flex gap-4 items-center justify-center">
            <a href={githubLink} target="_blank">
              <button
                className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600   text-sm font-bold jetbrains-mono-bold
              shadow-md shadow-blue-900 translate-0 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={github}
                  className="w-5 h-5 mr-1 inline"
                  alt="Github"
                />
                Github
              </button>
            </a>
            <a
              href={liveLink[1]}
              target="_blank"
              rel="noopener noreferrer"
              className={`${liveLink[0] ? "block" : "hidden"}`}
            >
              <button
                className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-bold jetbrains-mono-bold
              shadow-md shadow-blue-900 translate-y-0 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <SquareArrowOutUpRight size={16} className="inline mr-1" />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
