import { Link } from "react-router-dom";
import { Header } from "../component/index.js";
function Projects() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 text-white">
        <Link
          to="/"
          className="w-fit rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-white hover:bg-white hover:text-black"
        >
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold">Projects</h1>
      </main>
    </div>
  );
}

export default Projects;
