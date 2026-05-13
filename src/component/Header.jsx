import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header({ activePage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky  top-0 z-20 backdrop-blur-lg text-white ">
      <div className="mx-auto  max-w-full px-4">
        <div className="flex h-13 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-2xl  font-bold tracking-wide">
            {activePage === "Home" ? (
              <a href="#Home">
                <img
                  src={logo}
                  alt="logo"
                  className="w-16 lg:w-20 lg:h-16 object-contain "
                />
              </a>
            ) : (
              <Link to="/" className="w-16 lg:w-28">
                <img src={logo} alt="logo" className="w-16 lg:w-28" />
              </Link>
            )}
          </div>

          {/* Desktop Menu */}
          {activePage === "Home" ? (
            <div className="hidden md:flex items-center space-x-8 mr-6 text-bold ">
              <a href="#Home" className="hover:text-[#004395] transition">
                Home
              </a>
              <a href="#About" className="hover:text-[#004395] transition">
                About
              </a>
              <a href="#Project" className="hover:text-[#004395] transition">
                Project
              </a>
              <a href="#" className="hover:text-[#004395] transition">
                Contact
              </a>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-8 mr-6">
              <Link to="/#Home" className="hover:text-[#004395] transition">
                Home
              </Link>
              <Link to="/#About" className="hover:text-[#004395] transition">
                About
              </Link>
              <Link to="/#Project" className="hover:text-[#004395] transition">
                Project
              </Link>
              <Link to="/#Contact" className="hover:text-[#004395] transition">
                Contact
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {activePage === "Home" ? (
          <div className="flex flex-col items-end  space-y-4  backdrop-blur-lg px-4 py-4">
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#Home"
              className="hover:text-[#004395] transition"
            >
              Home
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#About"
              className="hover:text-[#004395] transition"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#Project"
              className="hover:text-[#004395] transition"
            >
              Project
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#"
              className="hover:text-[#004395] transition"
            >
              Contact
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-end  space-y-4  backdrop-blur-lg px-4 py-4">
            <Link to="/#Home" className="hover:text-[#004395] transition">
              Home
            </Link>
            <Link to="/#About" className="hover:text-[#004395] transition">
              About
            </Link>
            <Link to="/#Project" className="hover:text-[#004395] transition">
              Project
            </Link>
            <Link to="/#Contact" className="hover:text-[#004395] transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
