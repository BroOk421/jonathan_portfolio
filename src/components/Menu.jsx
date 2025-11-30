import "../Global.css";
import "../Menu.css";
import { useTheme } from "../context/ThemeContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuFacebook,
  LuLinkedin,
  LuInstagram,
  LuSunMedium,
  LuMoon,
} from "react-icons/lu";

const Menu = ({ menu, setMenu }) => {
  const { theme, toggleTheme } = useTheme();

  const scrollViewToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`flex justify-center items-center  absolute top-0 pt-[30px] left-0 w-full h-[100vh] opacity-[100%] ${
          theme === "light" ? "bg-[#f0edd4]" : "bg-[#2C2C29]"
        } z-[-1] transform transition-transform duration-500 ease-in-out p-[10px] hidden max-lg:block`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col justify-center items-center h-[100vh] w-full gap-[20px]">
          <button
            className="font2 hover-border w-[150px]"
            style={{
              color: theme !== "light" ? "#f0edd4" : "black",
              fontSize: "35px",
            }}
            onClick={() => {
              scrollViewToSection("home");
              setMenu(false);
            }}
          >
            Home
          </button>
          <button
            className="font2 hover-border w-[160px]"
            style={{
              color: theme !== "light" ? "#f0edd4" : "#2C2C29",
              fontSize: "35px",
            }}
            onClick={() => {
              scrollViewToSection("about");
              setMenu(false);
            }}
          >
            About
          </button>
          <button
            className="font2 hover-border w-[260px]"
            style={{
              color: theme !== "light" ? "#f0edd4" : "#2C2C29",
              fontSize: "35px",
            }}
            onClick={() => {
              scrollViewToSection("experience");
              setMenu(false);
            }}
          >
            Experience
          </button>
          <button
            className="font2 hover-border w-[220px]"
            style={{
              color: theme !== "light" ? "#f0edd4" : "#2C2C29",
              fontSize: "35px",
            }}
            onClick={() => {
              scrollViewToSection("projects");
              setMenu(false);
            }}
          >
            Projects
          </button>
          <button
            className="font2 hover-border w-[200px]"
            style={{
              color: theme !== "light" ? "#f0edd4" : "#2C2C29",
              fontSize: "35px",
            }}
            onClick={() => {
              scrollViewToSection("contact");
              setMenu(false);
            }}
          >
            Contact
          </button>
          <div className="flex justify-center items-center bg-[#d63737] pl-[35px] pr-[35px] pt-[10px] pb-[10px] mt-[20px] rounded-full hover:scale-[1.1] transition ease-out">
            <a href="https://drive.google.com/file/d/1oVaVuoQMRZtiH5bBX2Y9xZae4Vr_zQ7K/view?usp=sharing">
              <button
                className="font2 text-[#f0edd4]"
                style={{ fontSize: "20px" }}
              >
                Resume
              </button>
            </a>
          </div>
          <div className="flex f-auto w-auto pt-[20px] pb-[20px] pl-[10px] pr-[10px]">
            <div className="flex justify-center items-center gap-[35px] h-[4vh] w-full">
              <button
                className="font"
                style={{
                  color: theme !== "light" ? "#f0edd4" : "#2C2C29",
                }}
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <LuSunMedium className="text-[20px] text-[#f0edd4] hover:scale-[1.1] transition ease-in-out" />
                ) : (
                  <LuMoon className="text-[20px] text-[#2C2C29] hover:scale-[1.1] transition ease-in-out" />
                )}
              </button>
              <a href="https://www.facebook.com/rzq.polar/">
                <LuFacebook
                  className="text-[20px] hover:scale-[1.1] transition ease-in-out"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                />
              </a>
              <a href="https://www.linkedin.com">
                <LuLinkedin
                  className="text-[20px] hover:scale-[1.1] transition ease-in-out"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                />
              </a>
              <a href="https://www.instagram.com">
                <LuInstagram
                  className="text-[20px] hover:scale-[1.1] transition ease-in-out"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[100vh] w-full max-lg:hidden"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
