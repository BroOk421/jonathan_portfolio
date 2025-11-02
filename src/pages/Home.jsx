import "../Global.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../hooks/useCustomCursor.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import Hero from "../pages/Hero.jsx";
import About from "../pages/About.jsx";
import Experience from "../pages/Experience.jsx";
import Projects from "../pages/Projects.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col self-start w-full">
      <Navbar />
      <CustomCursor />

      <section
        id="home"
        style={{ backgroundColor: theme === "light" ? "#f0edd4" : "#2C2C29" }}
        className="flex justify-center items-center"
      >
        <Hero />
      </section>

      <section
        style={{ backgroundColor: theme === "light" ? "#f0edd4" : "#2C2C29" }}
        className="flex justify-center items-center"
      >
        <About />
      </section>

      <section
        id="experience"
        style={{ backgroundColor: theme === "light" ? "#f0edd4" : "#2C2C29" }}
        className="flex justify-center items-center"
      >
        <Experience />
      </section>

      <section
        id="projects"
        style={{ backgroundColor: theme === "light" ? "#f0edd4" : "#2C2C29" }}
        className="flex justify-center items-center"
      >
        <Projects />
      </section>

      <section
        id="contact"
        style={{ backgroundColor: theme === "light" ? "#f0edd4" : "#2C2C29" }}
        className="primary flex justify-center items-center"
      >
        <Footer />
      </section>
    </div>
  );
};

export default Home;
