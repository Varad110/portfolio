import { Link } from "react-router-dom";
import {
  Header,
  LightRays,
  CertificatesCollection,
} from "../component/index.js";
import {
  javascriptBCI,
  javascriptBCP,
  javascriptICI,
  javascriptICP,
  softwareEngineerCI,
  softwareEngineerCP,
  commanwealhbankCI,
  commanwealhbankCP,
} from "../assets/index";
function Projects() {
  return (
    <div className="w-full min-h-screen ">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <LightRays />
      </div>
      <Header activePage="Certificates" />
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
            <h1 className="flex  self-center text-4xl font-bold">
              Certificates
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 ">
          {/* Card 1 */}
          <CertificatesCollection
            image={javascriptBCI}
            title="JavaScript (Basic)"
            issuer="HackerRank"
            bgReverse={false}
            date={new Date("2026/10")}
            certificateLink={javascriptBCP}
          />

          {/* Card 2 */}

          <CertificatesCollection
            image={javascriptICI}
            title="JavaScript (Intermediate)"
            issuer="HackerRank"
            date={new Date("2026/10")}
            certificateLink={javascriptICP}
          />

          {/* Card 3 */}

          <CertificatesCollection
            image={commanwealhbankCI}
            title="Software Engineering Job Simulation"
            issuer="Forage"
            date={new Date("2026/10")}
            certificateLink={commanwealhbankCP}
          />

          {/* Card 4 */}

          <CertificatesCollection
            image={softwareEngineerCI}
            title="Software Engineering"
            issuer="HackerRank"
            date={new Date("2026/10")}
            certificateLink={softwareEngineerCP}
          />

          
        </div>
      </main>
    </div>
  );
}

export default Projects;
