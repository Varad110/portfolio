// import React from "react";

function ProjectCard({
  image,
  title = "Project title",
  description = "Add a brief description of the project here. Highlight key features, technologies used, and any notable achievements or challenges overcome during development.",
  techStack = ["React", "Node.js", "Express", "MongoDB"],
}) {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-[80%] h-full mt-10 bg-linear-to-r from-gray-800/50   to-gray-700 rounded-lg px-4 py-4">
        <div className=" md:px-3 md:py-3 w-full sm:w-[50%] h-full flex justify-center items-center animate-bounceUp rounded-lg overflow-hidden">
          <div className="w-full  sm:w-150 self-center h-full flex justify-center items-center rounded-lg overflow-hidden">
            <img src={image} className="w-full h-full" alt="Campus Hire" />
          </div>
        </div>
        <div className="w-full p-3 sm:w-[50%] h-full flex flex-col justify-start self-start items-start gap-4 mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl  font-bold jetbrains-mono-bold">
            {title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <p
                key={index}
                className="jetbrains-mono-normal  text-green-500 bg-gray-900 group-[]: px-2 py-1 rounded-lg text-xs sm:text-sm  "
              >
                {tech}
              </p>
            ))}
          </div>
          <p className="text-[clamp(0.8rem,2vh,2rem)]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
