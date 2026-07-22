import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../layout/Container";
import contact from "../../data/contact";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
      style={{ background: "var(--background)" }}
    >
      {/* ⭐ FIX - blobs cannot receive touches */}

      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-300/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-300/20 blur-[150px]" />

      {/* ⭐ FIX - entire content above blobs */}

      <Container className="relative z-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-pink-500 font-semibold">
            Contact
          </p>

          <h2
            className="text-5xl font-bold mt-4"
            style={{ color: "var(--heading)" }}
          >
            {contact.title}
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto text-lg"
            style={{ color: "var(--text)" }}
          >
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-30"   // ⭐ FIX
          >
            <InfoCard
              icon={<FaEnvelope />}
              title="Email"
              value={contact.email}
            />

            <InfoCard
              icon={<FaPhone />}
              title="Phone"
              value={contact.phone}
            />

            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              value={contact.location}
            />

            <div className="flex gap-6 mt-8 text-3xl">

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-30 rounded-3xl border p-10"   // ⭐ FIX
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "0 15px 40px var(--shadow)",
            }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full mb-5 p-4 rounded-xl outline-none"
              style={{
                background: "var(--background)",
                color: "var(--text)",
              }}
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full mb-5 p-4 rounded-xl outline-none"
              style={{
                background: "var(--background)",
                color: "var(--text)",
              }}
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              required
              className="w-full mb-6 p-4 rounded-xl outline-none resize-none"
              style={{
                background: "var(--background)",
                color: "var(--text)",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-pink-500 py-4 text-white font-semibold transition hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </Container>

    </section>
  );
}

interface InfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({ icon, title, value }: InfoProps) {
  return (
    <div
      className="mb-5 rounded-2xl border p-6"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl text-pink-500">
          {icon}
        </div>

        <div>
          <p className="font-semibold text-pink-500">
            {title}
          </p>

          <p style={{ color: "var(--text)" }}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;