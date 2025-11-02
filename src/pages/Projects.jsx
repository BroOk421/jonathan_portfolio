import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";
import projects from "../project.jsx";

const Projects = () => {
  const { theme } = useTheme();
  const { isVisible, ref } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`flex flex-col self-start h-auto w-full justify-start items-center pr-[10px] pl-[10px] pt-[50px] pb-[50px] gap-[50px] fade-in ${
        isVisible ? "visible" : ""
      } max-lg:pt-[80px] max-lg:pb-[30px]`}
    >
      <div className="flex flex-col h-auto justify-start items-center w-[100%] gap-[50px] p-[50px] max-md:p-[10px]">
        <div>
          <span
            className="font2 text-[40px] p-[20px] max-lg:text-[35px] max-md:text-[30px] font-serif font-bold leading-none"
            style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
          >
            Projects
          </span>
        </div>
        <div
          className="grid h-auto w-full p-[20px] gap-[20px]
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center max-md:p-[10px]"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col h-[350px] w-full p-[10px] gap-[10px] rounded-[20px] max-xl:h-[300px] max-md:w-[65%] ${
                theme === "light"
                  ? "border border-[#2C2C29]"
                  : "border border-[#f0edd4]"
              }`}
              // style={{
              //   boxShadow:
              //     theme === "dark"
              //       ? "0px 0px 10px 0px #d63737"
              //       : "0px 0px 5px 0px #2C2C29",
              // }}
            >
              <div
                className={`flex justify-center items-center h-[250px] w-full max-xl:h-[220px]`}
              >
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  src={project.image}
                />
              </div>
              <div className="flex flex-col h-auto w-full gap-[2px] p-[5px] text-[#d63737]">
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Share Tech, sans-serif",
                  }}
                >
                  {project.name}
                </p>
                <div className="flex gap-[5px] justify-start items-center">
                  <p
                    className={`${
                      theme === "dark" ? "text-[#f0edd4]" : "text-[#2C2C29]"
                    }`}
                    style={{
                      fontFamily: "Share Tech",
                    }}
                  >
                    Tech:
                  </p>
                  {project.tech.map((item, i) =>
                    typeof item === "object" && item.dark ? (
                      <img
                        key={i}
                        src={theme === "dark" ? item.dark : item.light}
                        alt="tech bubble"
                        className="h-[25px] w-[30px] transition-all duration-300"
                      />
                    ) : (
                      <span
                        key={i}
                        className="text-[30px]"
                        style={{
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
