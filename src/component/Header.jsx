import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky top-0 z-20 backdrop-blur-lg text-white ">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center md:justify-center justify-end">
          {/* Logo */}
          {/* <div className="text-2xl font-bold tracking-wide">MyLogo</div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#Home" className="hover:text-pink-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              About
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              Services
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-end space-y-4  backdrop-blur-lg px-4 py-4">
          <a
            onClick={() => setIsOpen(!isOpen)}
            href="#Home"
            className="hover:text-pink-400 transition"
          >
            Home
          </a>
          <a
            onClick={() => setIsOpen(!isOpen)}
            href="#"
            className="hover:text-pink-400 transition"
          >
            About
          </a>
          <a
            onClick={() => setIsOpen(!isOpen)}
            href="#"
            className="hover:text-pink-400 transition"
          >
            Services
          </a>
          <a
            onClick={() => setIsOpen(!isOpen)}
            href="#"
            className="hover:text-pink-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
