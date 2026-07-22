import Fade from "../animations/fade";
import Container from "../layout/Container";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32"
      style={{ background: "var(--background)" }}
    >
      <Container>

        {/* Heading */}

        <Fade>
          <div className="text-center mb-20">

            <p className="uppercase tracking-[4px] text-pink-500 font-semibold">
              Experience
            </p>

            <h2
              className="text-5xl font-bold mt-3"
              style={{ color: "var(--heading)" }}
            >
              Professional Journey
            </h2>

            <p
              className="mt-5 max-w-2xl mx-auto text-lg"
              style={{ color: "var(--text)" }}
            >
              Every role has strengthened my communication,
              leadership and problem-solving skills while I
              continue my transition into Software Engineering.
            </p>

          </div>
        </Fade>

        {/* Experience Cards */}

        <div className="space-y-10">

          {experiences.map((experience, index) => (

            <Fade
              key={experience.company}
              delay={index * 0.15}
            >

              <div
                className="rounded-3xl border p-10 transition duration-300 hover:-translate-y-2"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "0 15px 40px var(--shadow)",
                }}
              >

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  <div>

                    <h3
                      className="text-3xl font-bold"
                      style={{ color: "var(--heading)" }}
                    >
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-pink-500 font-semibold">
                      {experience.company}
                    </p>

                  </div>

                  <span
                    className="px-5 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: "rgba(244,143,177,.15)",
                      color: "var(--heading)",
                    }}
                  >
                    {experience.period}
                  </span>

                </div>

                <p
                  className="mt-6 leading-8"
                  style={{ color: "var(--text)" }}
                >
                  {experience.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  {experience.achievements.map((achievement) => (

                    <div
                      key={achievement}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-2 h-3 w-3 rounded-full bg-pink-500 flex-shrink-0"></div>

                      <p
                        style={{
                          color: "var(--text)",
                        }}
                      >
                        {achievement}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </Fade>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;