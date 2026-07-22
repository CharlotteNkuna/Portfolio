import Container from "../layout/Container";
import Fade from "../animations/Fade";

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

        <Fade>
          <div className="text-center mb-20">

            <p className="uppercase tracking-[4px] text-pink-500 font-semibold mb-3">
              About Me
            </p>

            <h2
              className="text-5xl font-bold"
              style={{ color: "var(--heading)" }}
            >
              My Journey Into
              <span className="text-pink-500">
                {" "}Software Engineering
              </span>
            </h2>

            <p
              className="mt-6 max-w-2xl mx-auto text-lg"
              style={{ color: "var(--text)" }}
            >
              Passionate about learning, building and continuously improving
              through real-world software projects.
            </p>

          </div>
        </Fade>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Story Card */}

          <Fade direction="left">

            <div
              className="rounded-3xl p-10 border backdrop-blur-xl"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "0 15px 40px var(--shadow)",
              }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--heading)" }}
              >
                {about.title}
              </h3>

              <p
                className="leading-9 whitespace-pre-line text-lg"
                style={{ color: "var(--text)" }}
              >
                {about.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mt-10">

                <div>
                  <p className="font-semibold text-pink-500">
                    Qualification
                  </p>

                  <p style={{ color: "var(--text)" }}>
                    {about.qualification}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-pink-500">
                    Currently Studying
                  </p>

                  <p style={{ color: "var(--text)" }}>
                    {about.studying}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-pink-500">
                    Location
                  </p>

                  <p style={{ color: "var(--text)" }}>
                    {about.location}
                  </p>
                </div>

              </div>

            </div>

          </Fade>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (

              <Fade
                key={item.label}
                delay={index * 0.15}
              >
                <div
                  className="rounded-3xl p-8 text-center border"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    boxShadow: "0 10px 35px var(--shadow)",
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

                </div>

              </Fade>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default About;