import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center bg-black text-gray-400"
      >
        <RevealOnScroll>
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent leading right">
            Hi, I'm Abdullah.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a developer who likes writing programs to address problems or to
            make things look more pleasant, ideally both. Avid tech
            restorationist and open source contributor.
          </p>

          {/* Buttons to navigate to other sections */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="border border-green-500 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
                         hover:bg-green-500 hover:text-black hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                         hover:bg-blue-500 hover:text-black hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
          </div>
         </div>
        </RevealOnScroll>
      </section>
    );
};
