import { SquareArrowOutUpRight } from "lucide-react";
import CertificatesCollection from "./CertificatesCollection";
import {javascriptICI,javascriptICP,softwareEngineerCI,softwareEngineerCP,commanwealhbankCI,commanwealhbankCP} from "../assets/index"
import { Link } from "react-router-dom";
import campushire from "../assets/campushire.webp";
import { motion } from "motion/react";

function Certificate() {
  return (
    <div
      id="Certificate"
      className="min-h-screen  sm:py-17 px-4 sm:px-6 lg:px-8"
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
            Certifications
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Link
            to="/certificates"
            className="hidden md:flex text-semibold jetbrains-mono text-sm  gap-2 hover:text-gray-400"
          >
            <SquareArrowOutUpRight size={20} />
            All Certificates
          </Link>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 ">
        {/* Card 1 */}
      
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <CertificatesCollection
            image={javascriptICI}
            title="JavaScript (Intermediate)"
            issuer="HackerRank"
            date={new Date("2026/10")}
            certificateLink={javascriptICP}
          />
        </motion.div>
        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <CertificatesCollection
            image={commanwealhbankCI}
            title="Software Engineering Job Simulation"
            issuer="Forage"
            date={new Date("2026/10")}
            certificateLink={commanwealhbankCP}
          />
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <CertificatesCollection
            image={softwareEngineerCI}
            title="Software Engineering"
            issuer="HackerRank"
            date={new Date("2026/10")}
            certificateLink={softwareEngineerCP}
          />
        </motion.div>
      </div>
      {/* Project showcase end */}
      <div className="w-full flex lg:hidden justify-center items-center mt-10">
        <Link
          to="/certificates"
          className="flex text-semibold jetbrains-mono text-sm  gap-2 hover:text-gray-400"
        >
          <button className="flex text-semibold jetbrains-mono text-sm  gap-2 hover:text-gray-400 bg-blue-500 px-4 py-2 rounded">
            <SquareArrowOutUpRight size={20} />
            All Certificates
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Certificate;
