import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import Container from "./Container";
import ThemeToggle from "../common/ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "journey",
        "experience",
        "certifications",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <Container>
        <div
          className="rounded-full border px-8 h-20 flex items-center justify-between transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(255,255,255,.70)"
              : "rgba(255,255,255,.35)",
            backdropFilter: "blur(18px)",
            borderColor: "var(--border)",
            boxShadow: scrolled
              ? "0 12px 35px var(--shadow)"
              : "none",
          }}
        >
          {/* Logo */}

          <a
            href="#hero"
            className="relative text-2xl font-bold"
            style={{ color: "var(--heading)" }}
          >
            <span className="absolute -inset-2 blur-2xl bg-pink-300 opacity-40 rounded-full"></span>

            <span className="relative">
              Charlotte
              <span className="text-pink-500">.</span>
            </span>
          </a>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative font-medium transition"
                style={{
                  color:
                    activeSection === link.id
                      ? "var(--primary)"
                      : "var(--text)",
                }}
              >
                {link.label}

                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-pink-500"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile */}

          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />

            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={22}
            />
          </div>
        </div>

        {/* Mobile Menu */}

        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-4 rounded-3xl overflow-hidden border"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "0 12px 35px var(--shadow)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block px-8 py-5 transition hover:bg-pink-100"
              style={{
                color:
                  activeSection === link.id
                    ? "var(--primary)"
                    : "var(--text)",
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </Container>
    </header>
  );
}

export default Navbar;