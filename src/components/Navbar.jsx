import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Resume icon

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text"
          >
            | AHS Portfolio |
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com/AbdullahSiddiqiGit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-h-siddiqi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://drive.google.com/file/d/1hWlR2MqQWea-FLjfyU2x-i1khKH-qN6T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faFileAlt} size="lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden -translate-x-10"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
        </div>
      </div>
    </nav>
  );
};
