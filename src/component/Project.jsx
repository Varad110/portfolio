// import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div id="Project" className="min-h-screen   items-center justify-center ">
      <div className="grid grid-cols-3 ">
        <div className=" col-span-3 flex justify-between  ">
          <h1 className="   jetbrains-mono font-bold">
            Engineering Digital Excellence
          </h1>
          <Link
            to="/projects"
            className="text-semibold jetbrains-mono text-sm flex gap-2 hover:text-gray-400"
          >
            <SquareArrowOutUpRight size={20} />
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
