import { motion } from "framer-motion";

import Container from "../layout/Container";

import about from "../../data/about";
import { stats } from "../../data/stats";

function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 w-96 h-96 rounded-full bg-pink-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-purple-300/20 blur-[150px]" />

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
            About Me
          </p>

          <h2
            className="text-5xl font-bold"
            style={{ color: "var(--heading)" }}
          >
            My Journey Into
            <span className="text-pink-500"> Software Engineering</span>
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto text-lg"
            style={{ color: "var(--text)" }}
          >
            Passionate about learning, building, and continuously improving
            through real-world software projects.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 backdrop-blur-xl border"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: `0 15px 40px var(--shadow)`
            }}
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "var(--heading)" }}
            >
              {about.title}
            </h3>

            <p
              className="text-lg leading-9 whitespace-pre-line"
              style={{ color: "var(--text)" }}
            >
              {about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

              <div>
                <p className="text-pink-500 font-semibold">
                  Qualification
                </p>

                <p style={{ color: "var(--text)" }}>
                  {about.qualification}
                </p>
              </div>

              <div>
                <p className="text-pink-500 font-semibold">
                  Currently Studying
                </p>

                <p style={{ color: "var(--text)" }}>
                  {about.studying}
                </p>
              </div>

              <div>
                <p className="text-pink-500 font-semibold">
                  Location
                </p>

                <p style={{ color: "var(--text)" }}>
                  {about.location}
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * .15,
                  duration: .5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                viewport={{ once: true }}
                className="rounded-3xl p-8 text-center border"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: `0 10px 35px var(--shadow)`
                }}
              >
                <h3 className="text-5xl font-bold text-pink-500">
                  {item.number}
                </h3>

                <p
                  className="mt-4 text-lg"
                  style={{ color: "var(--text)" }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default About;