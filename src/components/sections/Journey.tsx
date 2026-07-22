import Fade from "../animations/fade";
import Container from "../layout/Container";

import { journey } from "../../data/journey";

function Journey() {
  return (
    <section
      id="journey"
      className="relative py-32"
      style={{ background: "var(--surface)" }}
    >
      <Container>

        {/* Heading */}

        <Fade>
          <div className="text-center mb-20">

            <p className="uppercase tracking-[4px] text-pink-500 font-semibold">
              My Journey
            </p>

            <h2
              className="text-5xl font-bold mt-3"
              style={{ color: "var(--heading)" }}
            >
              How I Got Here
            </h2>

            <p
              className="mt-6 max-w-2xl mx-auto text-lg"
              style={{ color: "var(--text)" }}
            >
              Every step has brought me closer to my goal of becoming a
              Full Stack Developer.
            </p>

          </div>
        </Fade>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}

          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
            style={{
              background: "var(--border)",
            }}
          />

          {journey.map((item, index) => {

            const left = index % 2 === 0;

            return (

              <Fade
                key={item.year}
                delay={index * 0.15}
                direction={left ? "left" : "right"}
              >

                <div
                  className={`relative mb-16 flex ${
                    left ? "justify-start" : "justify-end"
                  }`}
                >

                  {/* Card */}

                  <div
                    className="w-full md:w-[45%] rounded-3xl p-8 border transition duration-300 hover:-translate-y-2"
                    style={{
                      background: "var(--background)",
                      borderColor: "var(--border)",
                      boxShadow: "0 12px 35px var(--shadow)",
                    }}
                  >

                    <span className="text-pink-500 font-bold text-lg">
                      {item.year}
                    </span>

                    <h3
                      className="text-2xl font-bold mt-3"
                      style={{ color: "var(--heading)" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-4 leading-8"
                      style={{ color: "var(--text)" }}
                    >
                      {item.description}
                    </p>

                  </div>

                  {/* Timeline Dot */}

                  <div
                    className="absolute left-1/2 top-10 h-5 w-5 rounded-full -translate-x-1/2 border-4"
                    style={{
                      background: "var(--primary)",
                      borderColor: "var(--background)",
                    }}
                  />

                </div>

              </Fade>

            );

          })}

        </div>

      </Container>
    </section>
  );
}

export default Journey;