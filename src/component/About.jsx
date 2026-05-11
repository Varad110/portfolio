import { Brain, Download, Code, Wrench } from "lucide-react";
import varad from "../assets/varad.jpg";
import resume from "../assets/varad_resume (3).pdf";
import ShapeGrid from "./ShapeGrid";
function About() {
  return (
    <section id="About" className=" min-h-screen flex items-center  ">
      <div className="grid sm:gap-12   ">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
          <div className="mb-6 lg:mb-0 flex justify-center items-center">
            <img
              src={varad}
              alt="Varad"
              className=" rounded-2xl min-w-30 min-h-90 max-h-90 max-w-80 lg:w-80 lg:h-90 object-fit shadow-[0_0px_30px] shadow-gray-800/70"
            />
          </div>
          <div className="col-span-3 lg:col-span-2 text-wrap flex flex-col justify-center ">
            <pre className=" text-4xl font-bold sm:text-6xl  text-wrap">
              {`Building the Architectures 
of Tommorrow`}
            </pre>

            <div className="w-full lg:w-2/4  mt-5">
              <p className=" text-lg text-gray-300 ">
                I'm a passionate software developer with a love for crafting
                exceptional digital experiences. With a strong foundation in web
                development and a keen eye for design, I specialize in creating
                high-performance, user-friendly applications that make an
                impact. Whether it's building responsive websites or developing
                innovative solutions, I'm always eager to learn and grow in the
                ever-evolving world of technology.
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  download={"Varad_Gujarathi_Resume.pdf"}
                  href={resume}
                  className=""
                >
                  <button className="bg-blue-500 hover:shadow-lg hover:shadow-blue-600/50 hover:-translate-y-1 transition-transform py-4 px-6 rounded-lg mt-2 flex items-center gap-2 text-sm  font-semibold  cursor-pointer ">
                    <Download size={20} color="white" strokeWidth={3} />
                    Download Resume
                  </button>
                </a>

                <a href="#">
                  <button className=" flex items-center gap-2 text-sm bg-transparent border-gray-600 border hover:shadow-lg hover:shadow-gray-600/50 hover:-translate-y-1 transition-transform text-white font-semibold py-4 px-6 rounded-lg mt-2 ">
                    <Code size={20} color="white" strokeWidth={3} /> View work
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-5 mt-10">
          <div className="bg-gray-700/30 col-span-3 sm:col-span-1 text-white p-6 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
              <ShapeGrid direction="diagonal" />
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mt-3 flex items-center gap-4">
                <Brain size={40} strokeWidth={2} color="#005AC2" />
                Philosophy
              </h1>
              <p className="text-gray-300 mt-4">
                My approach to software development is centered around creating
                solutions that are not only functional but also elegant and
                user-friendly.
              </p>
            </div>
          </div>

          <div className="bg-gray-700/30 col-span-3 sm:col-span-2 text-white p-4 rounded-xl flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-30 -z-10">
              <ShapeGrid direction="diagonal" />
            </div>
            <div className="relative z-10">
              <h1 className=" text-3xl font-bold mt-2 flex items-center gap-4">
                <Wrench size={35} strokeWidth={2} color="#005AC2" />
                Technical Arsenal
              </h1>
              <ul className="list-disc flex flex-wrap gap-3 list-inside mt-4 text-green-300 text-lg">
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  HTML5
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  CSS3
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  Bootstrap
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  TailwindCSS
                </li>
                <li className=" mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  JavaScript
                </li>
                <li className=" mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  React
                </li>
                <li className=" mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  Node.js
                </li>
                <li className=" mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  Express.js
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  Python
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  MySQL
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  MongoDB
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  Git & GitHub
                </li>
                <li className="mt-4 shadow-lg hover:shadow-green-500  hover:-translate-y-1 transition-all flex items-center gap-2 bg-gray-700/40 border-green-600 border rounded-lg px-3 py-1">
                  Prompt Engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
