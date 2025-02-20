 import { RevealOnScroll } from "../RevealOnScroll";
 
 export const About = () => {

    const frontendSkills = ["React", "TailwindCSS","HTML", "PHP", "Wordpress"];
    const backendSkills = ["C++", "Java", "Node.js", "Python"];
    const nicheSkills = ["Kubernetes", "Solidity", "Docker", "Microcontrollers", "Bash Scripting"];
    const dataSkills = ["PostgreSQL", "MySQL", "PowerBI", "S/4Hana"]
    
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-300 to-white-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
                                        {/*SKILLS*/}

          <div className="glass rounded xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Some hats I've worn: Software Engineer, Data Analyst, Machine
              Learning Engineer, Open Source Contributor, and E-Waste
              Minimization Advocate. <br />
              My familiar languages and frameworks categorized:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data</h3>
                <div className="flex flex-wrap gap-2">
                  {dataSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Other</h3>
                <div className="flex flex-wrap gap-2">
                  {nicheSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

                             {/*EDUCATION SECTION*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Education </h3>
                <ul className = "list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong> Bachelors in Computer Science </strong> - Ohio Wesleyan University (2019-2023)
                    </li>
                    <li>
                        Relevant Coursework:Theory of Computation, Data Mining and Machine Learning, Object Oriented Programming, Algorithm Analysis and Design
                    </li>

                    <li>
                        <strong> American Degree Transfer Program </strong> -Taylors University (2019-2021) Kuala Lumpur, Malaysia
                    </li>

                    <li>
                        <strong> Cambridge IGCSE </strong> - Karachi Grammar School (2011-2018)
                    </li>

                </ul>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold"> Software Engineer at GoMeat.Inc (March 2023 - current)</h4>
                        <p>
                            Here is where the relevant experience for GoMeat goes.
                        </p>
                    </div>

                    <div>
                    <h4 className="font-semibold"> Software Engineer at GoMeat.Inc (March 2023 - current)</h4>
                        <p>
                            Here is where the relevant experience for Advancement Ops goes.
                        </p>
                    </div>

                    <div>
                    <h4 className="font-semibold"> Software Engineer at GoMeat.Inc (March 2023 - current)</h4>
                        <p>
                            Here is where the relevant experience for Siemens goes.
                        </p>
                    </div>

                    <div>
                    <h4 className="font-semibold"> Software Engineer at GoMeat.Inc (March 2023 - current)</h4>
                        <p>
                            Here is where the relevant experience for Convsys goes.
                        </p>
                    </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
    );

 }