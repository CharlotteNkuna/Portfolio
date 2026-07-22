import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-pink-300/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-[160px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-pink-500 font-semibold mb-3">
            Projects
          </p>

          <h2
            className="text-5xl font-bold"
            style={{ color: "var(--heading)" }}
          >
            Things I've
            <span className="text-pink-500"> Built</span>
          </h2>

          <p
            className="mt-5 max-w-2xl mx-auto text-lg"
            style={{ color: "var(--text)" }}
          >
            A collection of projects that helped me grow as a software developer.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-3xl border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: `0 15px 45px var(--shadow)`
              }}
            >
              {/* Image */}

              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-8">

                <h3
                  className="text-3xl font-bold"
                  style={{ color: "var(--heading)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="mt-4 leading-8"
                  style={{ color: "var(--text)" }}
                >
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm"
                      style={{
                        background: "rgba(244,143,177,.15)",
                        color: "var(--heading)"
                      }}
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-pink-500 text-white hover:scale-105 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--heading)"
                    }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Projects;