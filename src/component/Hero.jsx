import { TypingAnimation } from "./typing-animation";
import { motion } from "motion/react";
function Hero() {
  return (
    <section
      id="Home"
      className=" grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[1.1fr_0.8fr] sm:grid-cols-2"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-6 ">
          <div className=" w-fit flex items-center justify-between px-4 py-1 gap-2 bg-gray-800 text-[clamp(0.5rem,0.7rem,1rem)] sm:text-sm text-white text-center rounded-full ">
            {/* green ping dot */}
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-green-400 jetbrains-mono-normal">
              System Online: Ready to Deploy
            </span>
            {/* end */}
          </div>
          {/* Main text */}

          <h1 className="text-3xl font-bold sm:text-6xl ">
            Crafting{" "}
            <TypingAnimation
              showCursor={false}
              as="span"
              className="text-[#004395]  text-shadow-zinc-200/30 text-shadow-[0_0px_20px] font-bold "
            >
              high-
            </TypingAnimation>
            <br />
            <TypingAnimation
              showCursor={false}
              as="span"
              delay={700}
              className="text-[#004395]  text-shadow-zinc-200/30 text-shadow-[0_0px_20px] font-bold"
            >
              performance
            </TypingAnimation>
            {""} digital <br /> architecture.
          </h1>

          <p className="sm:text-lg text-mb font-semibold text-gray-300 text-wrap ">
            A passionate software developer specializing in building exceptional
            digital experiences.
          </p>
          {/* End Main text */}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      >
        {/* Side code snippet block */}
        <div className=" text-wrap flex flex-col bg-black/20 rounded-lg p-6 justify-center shadow-[0_0px_30px] shadow-gray-800/50">
          <div className=" flex gap-2 pb-3">
            <span className=" relative inline-flex  size-3 rounded-full bg-red-700"></span>
            <span className="relative inline-flex size-3 rounded-full bg-orange-600"></span>
            <span className="relative inline-flex  size-3 rounded-full bg-green-700"></span>
          </div>

          <div className="  flex flex-col gap-4 pt-2 text-wrap">
            {/* Code snippet */}
            <pre className="text-sm sm:text-lg font-mono text-gray-300 text-wrap sm:text-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {/* Example code snippet with span tags */}
              <code>
                <span className="text-cyan-300">function</span>{" "}
                <span className="text-yellow-300">Developer</span>() {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">const</span>{" "}
                <span className="text-blue-300">developer</span>
                {" = {"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-purple-300">name</span>:{" "}
                <span className="text-green-300">"Varad Gujarathi"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-purple-300">education</span>:{" "}
                <span className="text-green-300">"BCA"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-purple-300">passion</span>:{" "}
                <span className="text-green-300">
                  "Building meaningful digital experiences"
                </span>
                ,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-purple-300">status</span>:{" "}
                <span className="text-green-300">"Always learning"</span>,
                <br />
                &nbsp;&nbsp;{"};"}
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">return</span>{" "}
                <span className="text-orange-300">developer</span>;
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
