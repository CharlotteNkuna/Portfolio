import { motion } from "framer-motion";
import Container from "../layout/Container";
import {
  skillCategories,
  technicalSkills,
} from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background Blobs */}

      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-pink-300/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-purple-300/20 blur-[170px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-pink-500 font-semibold">
            Skills
          </p>

          <h2
            className="text-5xl font-bold mt-4"
            style={{ color: "var(--heading)" }}
          >
            My Tech Stack
          </h2>

          <p
            className="max-w-3xl mx-auto mt-6 text-lg"
            style={{ color: "var(--text)" }}
          >
            Technologies I use while building modern applications.
            I'm continuously expanding my knowledge through projects
            and hands-on learning.
          </p>
        </motion.div>

        {/* ================= CATEGORY CARDS ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mb-24">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
              }}
              className="rounded-3xl p-8 border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
                boxShadow: `0 15px 40px var(--shadow)`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--heading)" }}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: .95,
                    }}
                    className="px-5 py-2 rounded-full cursor-default"
                    style={{
                      background:
                        "linear-gradient(135deg,#F48FB122,#C084FC22)",
                      color: "var(--heading)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* ================= TECHNICAL SKILLS ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <h3
            className="text-4xl font-bold text-center mb-14"
            style={{ color: "var(--heading)" }}
          >
            Technical Proficiency
          </h3>

          <div className="grid lg:grid-cols-2 gap-6">

            {technicalSkills.map((skill, index) => (

              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="rounded-2xl p-5 border"
                style={{
                  background: "var(--background)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex justify-between mb-3">

                  <span
                    className="font-semibold"
                    style={{ color: "var(--heading)" }}
                  >
                    {skill.name}
                  </span>

                  <span className="text-pink-500 font-bold">
                    {skill.level}%
                  </span>

                </div>

                <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{
                    background: "#e8e8e8",
                  }}
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg,#F48FB1,#C084FC)",
                    }}
                  />
                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default Skills;