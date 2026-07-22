import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Fade from "../animations/fade";
import Container from "../layout/Container";

import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Background */}

      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-pink-300/20 blur-[140px] pointer-events-none" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-[160px] pointer-events-none" />

      <Container className="relative z-10">

        {/* Heading */}

        <Fade>
          <div className="text-center mb-20">

            <p className="uppercase tracking-[4px] text-pink-500 font-semibold mb-3">
              Projects
            </p>

            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{ color: "var(--heading)" }}
            >
              Things I've
              <span className="text-pink-500"> Built</span>
            </h2>

            <p
              className="mt-5 max-w-2xl mx-auto text-lg"
              style={{ color: "var(--text)" }}
            >
              A collection of projects that helped me grow as a software
              developer through hands-on experience.
            </p>

          </div>
        </Fade>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <Fade
              key={project.title}
              delay={index * 0.15}
            >

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: .3 }}
                className="relative z-10 overflow-hidden rounded-3xl border h-full"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "0 15px 45px var(--shadow)",
                }}
              >

                {/* Image */}

                <div className="h-60 overflow-hidden pointer-events-none">

                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: .6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />

                </div>

                {/* Content */}

                <div className="relative z-20 p-8 flex flex-col min-h-[430px]">

                  <h3
                    className="text-3xl font-bold"
                    style={{ color: "var(--heading)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="mt-4 leading-8 flex-grow"
                    style={{ color: "var(--text)" }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full text-sm"
                        style={{
                          background:
                            "linear-gradient(135deg,#F48FB122,#C084FC22)",
                          border: "1px solid var(--border)",
                          color: "var(--heading)",
                        }}
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="relative z-30 flex flex-wrap gap-4 mt-8">

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: .96 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-pink-500 text-white"
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: .96 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-full border"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--heading)",
                      }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>

                  </div>

                </div>

              </motion.div>

            </Fade>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Projects;