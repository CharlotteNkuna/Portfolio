import { motion } from "framer-motion";
import Container from "../layout/Container";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32"
      style={{ background: "var(--background)" }}
    >
      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-pink-500 font-semibold">
            Experience
          </p>

          <h2
            className="text-5xl font-bold mt-3"
            style={{ color: "var(--heading)" }}
          >
            Professional Journey
          </h2>

          <p
            className="mt-5 max-w-2xl mx-auto text-lg"
            style={{ color: "var(--text)" }}
          >
            My education and practical experience continue to shape my journey
            into software engineering.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="space-y-10">

          {experiences.map((experience, index) => (

            <motion.div
              key={experience.company}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
                duration: .6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="rounded-3xl p-10 border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: `0 15px 45px var(--shadow)`
              }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

                <div>

                  <h3
                    className="text-3xl font-bold"
                    style={{ color: "var(--heading)" }}
                  >
                    {experience.role}
                  </h3>

                  <p className="text-pink-500 font-semibold mt-2">
                    {experience.company}
                  </p>

                </div>

                <span
                  className="px-5 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(244,143,177,.15)",
                    color: "var(--heading)",
                  }}
                >
                  {experience.period}
                </span>

              </div>

              <p
                className="mt-6 leading-8"
                style={{ color: "var(--text)" }}
              >
                {experience.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">

                {experience.achievements.map((achievement) => (

                  <div
                    key={achievement}
                    className="flex items-center gap-3"
                  >
                    <div className="h-3 w-3 rounded-full bg-pink-500"></div>

                    <p style={{ color: "var(--text)" }}>
                      {achievement}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;