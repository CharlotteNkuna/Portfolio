import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

import Fade from "../animations/fade";
import Container from "../layout/Container";
import { certifications } from "../../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background Glow */}

      <div className="absolute -left-20 top-10 w-96 h-96 rounded-full bg-pink-300/20 blur-[140px] pointer-events-none" />

      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-purple-300/20 blur-[150px] pointer-events-none" />

      <Container>
        {/* Heading */}

        <Fade>
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-pink-500 font-semibold mb-3">
              Qualifications
            </p>

            <h2
              className="text-5xl font-bold"
              style={{ color: "var(--heading)" }}
            >
              Continuous Learning
            </h2>

            <p
              className="mt-5 max-w-2xl mx-auto text-lg"
              style={{ color: "var(--text)" }}
            >
              My learning journey continues through accredited
              qualifications and hands-on software development projects,
              helping me grow into a well-rounded Full Stack Developer.
            </p>
          </div>
        </Fade>

        {/* Qualification Cards */}

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((certificate, index) => (
            <Fade
              key={certificate.title}
              delay={index * 0.15}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl p-8 border flex flex-col h-full"
                style={{
                  background: "var(--background)",
                  borderColor: "var(--border)",
                  boxShadow: "0 12px 35px var(--shadow)",
                }}
              >
                <div className="text-5xl text-pink-500 mb-6">
                  <FaAward />
                </div>

                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--heading)" }}
                >
                  {certificate.title}
                </h3>

                <p className="mt-2 text-pink-500 font-medium">
                  {certificate.issuer}
                </p>

                <p
                  className="mt-5 leading-8 flex-grow"
                  style={{ color: "var(--text)" }}
                >
                  {certificate.description}
                </p>

                <div
                  className="mt-8 inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    background: "rgba(244,143,177,.15)",
                    color: "var(--primary)",
                  }}
                >
                  {certificate.year}
                </div>
              </motion.div>
            </Fade>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Certifications;