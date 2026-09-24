import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./index.js";
import campusHire from "../assets/campushire.webp";
import careercompass from "../assets/careercompass.webp";
import { motion } from "motion/react";

// import { useState } from "react";
function Project() {
  return (
    <div
      id="Project"
      className="min-h-screen pt-60 sm:py-17 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}

      <div
        className=" flex flex-col md:flex-row justify-between
      items-start gap-4 sm:gap-0 md:items-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className=" text-2xl sm:text-4xl jetbrains-mono-bold ">
            Engineering Digital <br /> Excellence
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="hidden md:flex text-semibold jetbrains-mono text-sm  gap-2 hover:text-gray-400"
          >
            <SquareArrowOutUpRight size={20} />
            All Projects
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {/* Projects showcase */}
        <ProjectCard
          image={campusHire}
          title="Campus Hire"
          description="Campus Hire is a web-based placement management system that streamlines the recruitment process for students, placement officers, and recruiters. It allows students to manage profiles, upload resumes, and track opportunities, while administrators can manage placement drives, student data, and recruitment activities through a centralized dashboard."
          techStack={[
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JavaScript",
            "PHP",
            "MySQL",
          ]}
          githubLink="https://github.com/Varad110/campushire_portal"
          liveLink={[true, "http://www.campushire.infinityfree.me/?i=1"]}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <ProjectCard
          image={careercompass}
          title="Career Compass"
          description="Campus Compass helps students identify strengths and career pathways by combining dynamic quiz generation with adaptive, hybrid, and predictive recommendation engines. It delivers personalized learning and career recommendations, evaluates results through a secure pipeline, and provides student and admin dashboards plus curated resources and realtime updates."
          techStack={[
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "MySQL",
            "Radix UI",
            "React Hook Form",
            "Zod",
            "OpenAI",
            "bcryptjs/JWT",
            "Recharts",
          ]}
          // projectScope={"Hackathon Project"}
          bgReverse={true}
          githubLink="https://github.com/Varad110/CareerCompass"
          liveLink={[true, "https://career-compass-hackthon-seven.vercel.app/"]}
        />
      </motion.div>
      {/* Project showcase end */}
      <div className="w-full flex lg:hidden justify-center items-center mt-10">
        <Link
          to="/projects"
          className="flex text-semibold jetbrains-mono text-sm  gap-2 hover:text-gray-400"
        >
          <button className="flex text-semibold jetbrains-mono text-sm  gap-2 hover:text-gray-400 bg-blue-500 px-4 py-2 rounded">
            <SquareArrowOutUpRight size={20} />
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
