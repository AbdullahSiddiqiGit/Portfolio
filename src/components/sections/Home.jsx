import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent leading right">
            Hi, I'm Abdullah.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a developer who loves writing programs to address problems or to
            make things look more pleasent, ideally both. Avid tech
            restorationist and open source contributor.
          </p>

          {/*buttons to go to the other pages*/}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className={`border borger-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition relative 
            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]`}
            >
              View Projects
            </a>

            <a
              href="#Contact"
              className={`"border border-blue-500/50 text-blue-500 py-4 px-7 rounded font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover: bg-blue-500/10`}
            >
              Contact Me
            </a>


          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
};

