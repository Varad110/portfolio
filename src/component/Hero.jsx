function Hero() {
  return (
    <section
      id="Home"
      className=" grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[1.1fr_0.8fr] sm:grid-cols-2 "
    >
      <div className="flex flex-col gap-6 ">
        <div className=" w-fit flex items-center justify-between px-4 py-1 gap-2 bg-gray-800 text-sm text-white text-center rounded-full ">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          <span className="text-green-400 jetbrains-mono">
            System Online: Ready to Deploy
          </span>
        </div>
        <h1 className="text-4xl font-bold sm:text-6xl">
          Crafting{" "}
          <span className="text-[#004395] text-shadow-zinc-200/30 text-shadow-[0_0px_20px] font-bold">
            high-
            <br /> performance{" "}
          </span>
          digital <br /> architecture.
        </h1>
        <p className="text-lg font-semibold text-gray-300">
          A passionate software developer specializing in building exceptional
          digital experiences.
        </p>
      </div>
      <div className="flex justify-center items-center ">
        {/* Code snippet */}
        <code className="text-lg font-mono text-gray-300">
          {/* Example code snippet */}
          <pre>
            <code>
              {`function greet(name) {
  return \`Hello, \${name}!\`;
}`}
            </code>
          </pre>
        </code>
      </div>
    </section>
  );
}

export default Hero;
