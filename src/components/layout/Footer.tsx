/* import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

import Container from "./Container";

function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer
      className="relative py-14 border-t"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h3
              className="text-3xl font-bold"
              style={{ color: "var(--heading)" }}
            >
              Charlotte Nkuna
            </h3>

            <p
              className="mt-2"
              style={{ color: "var(--text)" }}
            >
              Aspiring Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6 text-2xl text-pink-500">
            <a
              href="https://github.com/CharlotteNkuna"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/charlotte-nkuna-27a40717a"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: .9,
            }}
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        <div
          className="mt-12 pt-8 border-t text-center"
          style={{
            borderColor: "var(--border)",
            color: "var(--text)",
          }}
        >
          © {new Date().getFullYear()} Charlotte Nkuna • Built with React,
          TypeScript & Tailwind CSS <FaHeart className="inline text-pink-500" />
        </div>
      </Container>
    </footer>
  );
}

export default Footer; */

import { FaHeart } from 'react-icons/fa';
import Container from './Container';

function Footer() {
  return (
    <footer className="relative py-8 border-t" style={{
      background: 'var(--surface)', 
      borderColor: 'var(--border)',
    }}>
      <Container>
        <div className="text-center" style={{
          color: 'var(--text)',
        }}>
          &copy; {new Date().getFullYear()} Charlotte Nkuna • Built with React, TypeScript & Tailwind CSS <FaHeart className="inline text-pink-500" />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
