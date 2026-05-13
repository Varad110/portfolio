import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./index.js";
import campusHire from "../assets/campusHire.png";
// import { useState } from "react";
function Project() {
  return (
    <div id="Project" className="min-h-screen ">
      {/* Heading */}
      <div
        className=" flex flex-col md:flex-row justify-between
      items-start gap-4 sm:gap-0 md:items-center w-full"
      >
        <h1 className=" text-2xl sm:text-4xl jetbrains-mono-bold ">
          Engineering Digital <br /> Excellence
        </h1>
        <Link
          to="/projects"
          className="flex text-semibold jetbrains-mono text-sm  gap-2 hover:text-gray-400"
        >
          <SquareArrowOutUpRight size={20} />
          All Projects
        </Link>
      </div>
      {/* Projects showcase */}
      <ProjectCard
        image={campusHire}
        title="Campus Hire"
        techStack={["React", "Node.js", "Express", "MongoDB"]}
      />
      <ProjectCard
        image={campusHire}
        title="Another Project"
        techStack={["JavaScript", "Python", "Django"]}
      />
      {/* Project showcase end */}
    </div>
  );
}

export default Project;
