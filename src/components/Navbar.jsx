import "../Global.css";
import {
  LuMoon,
  LuSunMedium,
  LuX,
  LuFacebook,
  LuLinkedin,
  LuBolt,
  LuGithub,
} from "react-icons/lu";
import LogoWhite from "../assets/logo-white.png";
import LogoBlack from "../assets/logo-black.png";
import Menu from "../components/Menu.jsx";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menu, setMenu] = useState(false);

  const scrollViewToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "ease-in-out" }}
      className={`flex gap-6 justify-center fixed w-full top-0 z-[99] transition-colors duration-300 ease-in-out ${
        theme === "dark" && isScrolled
          ? "bg-[#30302c]"
          : theme === "light" && isScrolled
          ? "bg-[#ece9c8]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex justify-between items-center gap-[50px] min-w-full pt-[25px] pb-[25px] pl-[40px] pr-[40px] max-md:w-[100%]`}
      >
        <div className="flex justify-center items-center">
          {theme === "light" ? (
            <button
              onClick={() => {
                scrollViewToSection("home");
                setMenu(false);
              }}
            >
              <img
                src={LogoBlack}
                alt={LogoBlack}
                className="w-[40px] h-[30px]"
              />
            </button>
          ) : (
            <button onClick={() => scrollViewToSection("home")}>
              <img
                src={LogoWhite}
                alt={LogoWhite}
                className="w-[40px] h-[30px]"
              />
            </button>
          )}
        </div>

        {!menu ? (
          <>
            <div className="flex justify-center items-center gap-[70px] z-[50] max-lg:hidden">
              <button
                className="font hover-border w-[60px] hover:scale-[1.1] transition ease-in-out mix-blend-difference"
                style={{ color: theme !== "light" ? "#f0edd4" : "#2C2C29" }}
                onClick={() => scrollViewToSection("home")}
              >
                Home
              </button>
              <button
                className="font hover-border w-[60px] hover:scale-[1.1] transition ease-in-out mix-blend-difference"
                style={{ color: theme !== "light" ? "#f0edd4" : "#2C2C29" }}
                onClick={() => scrollViewToSection("about")}
              >
                About
              </button>
              <button
                className="font hover-border w-[85px] hover:scale-[1.1] transition ease-in-out"
                style={{ color: theme !== "light" ? "#f0edd4" : "#2C2C29" }}
                onClick={() => scrollViewToSection("experience")}
              >
                Experience
              </button>
              <button
                className="font hover-border w-[75px] hover:scale-[1.1] transition ease-in-out"
                style={{ color: theme !== "light" ? "#f0edd4" : "#2C2C29" }}
                onClick={() => scrollViewToSection("projects")}
              >
                Projects
              </button>
              <button
                className="font hover-border w-[70px] hover:scale-[1.1] transition ease-in-out"
                style={{ color: theme !== "light" ? "#f0edd4" : "#2C2C29" }}
                onClick={() => scrollViewToSection("contact")}
              >
                Contact
              </button>
            </div>
            <div
              className={`flex justify-center items-center pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-full bg-[#dbac12]
              hover:scale-[1.1] transition ease-out max-lg:hidden`}
            >
              <a href="https://drive.google.com/file/d/1oVaVuoQMRZtiH5bBX2Y9xZae4Vr_zQ7K/view?usp=sharing">
                <button className={`font1 uppercase text-[#30302c]`}>
                  My Resume
                </button>
              </a>
            </div>
            <div className="hidden max-lg:block">
              <button onClick={() => setMenu(true)}>
                <LuBolt
                  className="set-rotate text-[25px] mix-multiply"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                />
              </button>
            </div>
            <div
              className={`absolute top-[280px] right-[40px] flex h-auto w-auto`}
            >
              <div className="flex flex-col justify-start items-center gap-[35px] h-auto w-full max-lg:hidden">
                <button
                  className="font"
                  style={{
                    color: theme !== "light" ? "#f0edd4" : "#2C2C29",
                  }}
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? (
                    <LuSunMedium className="set-rotate text-[25px] text-[#f0edd4] hover:scale-[1.1] transition ease-in-out" />
                  ) : (
                    <LuMoon className="text-[25px] text-[#2C2C29] hover:scale-[1.1] transition ease-in-out" />
                  )}
                </button>
                <a href="https://www.facebook.com/rzq.polar/">
                  <LuFacebook
                    className="text-[25px] hover:scale-[1.1] transition ease-in-out"
                    style={{
                      color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/jonathan-gamboa-072b55248">
                  <LuLinkedin
                    className="text-[25px] hover:scale-[1.1] transition ease-in-out"
                    style={{
                      color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    }}
                  />
                </a>
                <a href="https://github.com/BroOk421">
                  <LuGithub
                    className="text-[25px] hover:scale-[1.1] transition ease-in-out"
                    style={{
                      color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    }}
                  />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <button onClick={() => setMenu(false)}>
                <LuX
                  className="text-[25px] hover:scale-[1.1] transition ease-in-out"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                />
              </button>
            </div>
            <Menu menu={menu} setMenu={setMenu} />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
