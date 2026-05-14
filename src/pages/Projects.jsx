import { Link } from "react-router-dom";
import { Header, LightRays, ProjectCard } from "../component/index.js";
import campusHire from "../assets/campushire.png";
import careercompass from "../assets/careercompass.png";
import preschoollearning from "../assets/preschoollearning.png";
function Projects() {
  return (
    <div className="w-full min-h-screen ">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <LightRays />
      </div>
      <Header activePage="Projects" />
      <main className="mx-auto flex w-full flex-col gap-6 px-5 py-12 text-white">
        <div className="flex flex-col sm:flex-row justify-center items-center  gap-3 w-full">
          <div className=" self-start flex sm:w-[40%]">
            <Link
              to="/"
              className="w-fit rounded-full border border-white/20 px-4 py-2 text-xs sm:text-sm transition hover:border-white hover:bg-white hover:text-black"
            >
              Back to Home
            </Link>
          </div>
          <div className="align-center w-[50%] ">
            <h1 className="flex  self-center text-4xl font-bold">Projects</h1>
          </div>
        </div>
        <ProjectCard
          image={campusHire}
          title="Campus Hire"
          description="Campus Hire is a web-based placement management system that streamlines the recruitment process for students, placement officers, and recruiters. It allows students to manage profiles, upload resumes, and track opportunities, while administrators can manage placement drives, student data, and recruitment activities through a centralized dashboard."
          techStack={[
            "HTML5",
            "CSS3",
            "Bootstrap5",
            "JavaScript",
            "PHP",
            "MySQL",
          ]}
          githubLink="https://github.com/Varad110/campushire_portal"
          liveLink={[true, "http://www.campushire.infinityfree.me/?i=1"]}
        />
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
          githubLink="https://github.com/Varad110/CareerCompass"
          liveLink={[true, "https://career-compass-hackthon-seven.vercel.app/"]}
        />
        <ProjectCard
          title={"PreSchool Learning "}
          image={preschoollearning}
          description={
            "Preschool Learning is an interactive educational platform designed for early childhood learning. The project provides engaging activities, learning games, and basic educational content to help preschool children develop foundational skills in a fun and interactive way. The platform focuses on creating a simple, colorful, and child-friendly learning experience."
          }
          techStack={["HTML5", "CSS3", "Bootstrap5", "JavaScript"]}
          githubLink="https://github.com/Varad110/preschoollearning"
          liveLink={[true, "https://preschoolearning.netlify.app/"]}
        />
      </main>
    </div>
  );
}

export default Projects;
