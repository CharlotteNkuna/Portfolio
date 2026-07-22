import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Journey from "./components/sections/Journey";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";
import LoadingScreen from "./components/common/LoadingScreen";
import CursorGlow from "./components/common/CursorGlow";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      {!loading && (
        <>
          <CursorGlow />

          <ScrollProgress />

          <Navbar />

          <Hero />

          <About />

          <Skills />

          <Projects />

          <Journey />

          <Experience />

          <Certifications />

          <Contact />

          <Footer />

          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;