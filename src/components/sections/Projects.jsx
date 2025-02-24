import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-10 bg-black text-gray-400"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["ETF Fund Closing Price Predictor", "EconoMe", "Employee Registration System", "This Website"].map((title, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">
                  {title === "ETF Fund Closing Price Predictor"
                    ? "Machine Learning model with 74% accuracy for specific funds trained on 5 million instances."
                    : title === "EconoMe"
                    ? "Lightweight personal finance tracking app with real time insights and alerts."
                    : title === "Employee Registration System"
                    ? "REST API application to track and modify personnel info securely and quickly."
                    : "React Native site to showcase my many virtues and skills (you are here!)."}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(title === "ETF Fund Closing Price Predictor"
                    ? ["C++", "Python", "Git"]
                    : title === "EconoMe"
                    ? ["Node.js", "Kubernetes", "MySQL", "Docker"]
                    : title === "Employee Registration System"
                    ? ["Node.js", "Postman", "Express", "PostgreSQL"]
                    : ["React", "TailwindCSS", "HTML", "Vite"]
                  ).map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-300/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Centered GitHub Button */}
          <div className="mt-10 text-center">
            <a
              href="https://github.com/AbdullahSiddiqiGit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            >
              View My GitHub
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
