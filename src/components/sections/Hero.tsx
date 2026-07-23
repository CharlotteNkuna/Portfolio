import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

import Container from "../layout/Container";
import Button from "../common/Button";

import profile from "../../assets/images/linkedin.webp";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* ================= BACKGROUND BLOBS ================= */}

      <div className="absolute -top-20 -left-24 w-96 h-96 rounded-full bg-pink-300/30 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-[150px] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-pink-200/20 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 pt-28 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-pink-500 font-semibold tracking-widest uppercase mb-4">
              Hello, I'm
            </p>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: "var(--heading)" }}
            >
              Charlotte
              <br />
              Nkuna
            </h1>

            {/* Typing Animation */}

            <div className="mt-6 text-2xl sm:text-3xl font-semibold text-pink-500 min-h-[48px]">
              <TypeAnimation
                sequence={[
                  "Aspiring Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Java Developer",
                  2000,
                  "Software Engineering in Progress",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                speed={50}
              />
            </div>

            <p
              className="mt-8 text-lg leading-8 max-w-xl"
              style={{ color: "var(--text)" }}
            >
              Passionate about building beautiful,
              responsive and user-friendly applications
              using Java, React, JavaScript and modern web
              technologies. I enjoy turning ideas into
              meaningful digital experiences.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <Button href="#projects">
                View Projects
              </Button>

              <Button
                variant="secondary"
                href="/CharlotteNkunaresume.pdf"
                download
              >
                Download CV
              </Button>
            </div>

            {/* Social Icons */}

            <div className="relative z-20 flex gap-6 mt-10 text-2xl">
              <a
                href="https://github.com/CharlotteNkuna"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/charlotte-nkuna-27a40717a/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:cnkuna920@gmail.com"
                className="hover:text-pink-500 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative z-10"
            >
              {/* Outer Glow */}

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-300 to-pink-300 blur-xl opacity-60 animate-pulse pointer-events-none" />

              {/* Ring */}

              <div className="absolute -inset-4 rounded-full border-2 border-pink-300 pointer-events-none" />

              {/* Profile Image */}

              <img
                src={profile}
                alt="Charlotte Nkuna"
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-pink-500 text-2xl"
        >
          <FaChevronDown />
        </motion.div>

      </Container>
    </section>
  );
}

export default Hero;