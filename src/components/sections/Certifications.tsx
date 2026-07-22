import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

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

      <div className="absolute -left-20 top-10 w-96 h-96 rounded-full bg-pink-300/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-purple-300/20 blur-[150px]" />

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
            Certifications
          </p>

          <h2
            className="text-5xl font-bold"
            style={{ color: "var(--heading)" }}
          >
            Learning Never Stops
          </h2>

          <p
            className="mt-5 max-w-2xl mx-auto text-lg"
            style={{ color: "var(--text)" }}
          >
            Every certification reflects another step in my journey toward
            becoming a professional Full Stack Developer.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {certifications.map((certificate, index) => (

            <motion.div
              key={certificate.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl p-8 border flex flex-col"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
                boxShadow: `0 12px 35px var(--shadow)`,
              }}
            >
              <div className="text-5xl text-pink-500 mb-6">
                <FaAward />
              </div>

              <span
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--primary)" }}
              >
                {certificate.year}
              </span>

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

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-pink-500 font-semibold hover:gap-3 transition-all"
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Certifications;