import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Experience = () => {
  const { theme } = useTheme();
  const { isVisible, ref } = useScrollAnimation();
  const [popUp, setPopUp] = useState("Barcotech");

  return (
    <div
      ref={ref}
      className={`flex self-start h-auto w-full justify-center items-center pt-[100px] pb-[50px] max-xl:pt-[0px] max-xl:pb-[20px] max-md:justify-start max-md:pt-[30px]`}
    >
      <div className=" flex justify-start items-start pt-[20px] pr-[10px] pl-[10px] pb-[10px] gap-[20px] min-h-[65vh] w-[85%] max-lg:w-full max-lg:gap-[10px] max-lg:p-[20px] max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: isVisible ? 0 : -200, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex flex-col items-end justify-around h-[520px] p-[20px] gap-[30px] w-[60%] max-lg:flex-row max-lg:h-[100px] max-md:w-full"
        >
          <div
            className={`absolute top-1/2 left-[80px] transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[1px] z-[1] ${
              theme === "dark" ? "bg-[#d63737]" : "bg-[#2C2C29]"
            } max-lg:h-[1px] max-lg:w-[80%] max-lg:left-1/2 max-lg:hidden`}
          >
            <span
              className="absolute top-[25px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] w-[20px] rounded-full bg-[#d63737] max-lg:hidden"
              style={{
                height: popUp === "Barcotech" ? "40px" : "20px",
                width: popUp === "Barcotech" ? "40px" : "20px",
                animation:
                  popUp === "Barcotech"
                    ? "pulseGrow 1.5s ease-in-out infinite"
                    : "none",
              }}
            />
            <span
              className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] w-[20px] rounded-full bg-[#d63737] max-lg:hidden"
              style={{
                height: popUp === "MVP" ? "40px" : "20px",
                width: popUp === "MVP" ? "40px" : "20px",
                animation:
                  popUp === "MVP"
                    ? "pulseGrow 1.5s ease-in-out infinite"
                    : "none",
              }}
            />
            <span
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] w-[20px] rounded-full bg-[#d63737] max-lg:hidden"
              style={{
                height: popUp === "Accucell" ? "40px" : "20px",
                width: popUp === "Accucell" ? "40px" : "20px",
                bottom: popUp === "Accucell" ? "-12px" : "10px",
                animation:
                  popUp === "Accucell"
                    ? "pulseGrow 1.5s ease-in-out infinite"
                    : "none",
              }}
            />
          </div>
          <div className="flex justify-start items-center h-auto w-[70%] max-lg:justify-center">
            <button
              className={`font2 font-bold leading-none text-center  z-[2] ${
                popUp === "Barcotech"
                  ? "text-[#d63737]"
                  : theme === "dark"
                  ? "text-[#f0edd4]"
                  : "text-[#2C2C29]"
              }`}
              style={{ fontSize: popUp === "Barcotech" ? "36px" : "24px" }}
              onClick={() => setPopUp("Barcotech")}
            >
              BTI
            </button>
          </div>
          <div className="flex justify-start items-center h-auto w-[70%] max-lg:justify-center">
            <button
              className={`font2 font-bold leading-none text-center z-[2] ${
                popUp === "MVP"
                  ? "text-[#d63737]"
                  : theme === "dark"
                  ? "text-[#f0edd4]"
                  : "text-[#2C2C29]"
              }`}
              style={{ fontSize: popUp === "MVP" ? "36px" : "24px" }}
              onClick={() => setPopUp("MVP")}
            >
              MVP
            </button>
          </div>
          <div className="flex justify-start items-center h-auto w-[70%] max-lg:justify-center">
            <button
              className={`font2 font-bold leading-none text-center z-[2] ${
                popUp === "Accucell"
                  ? "text-[#d63737]"
                  : theme === "dark"
                  ? "text-[#f0edd4]"
                  : "text-[#2C2C29]"
              }`}
              style={{ fontSize: popUp === "Accucell" ? "36px" : "24px" }}
              onClick={() => setPopUp("Accucell")}
            >
              ADC
            </button>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex flex-col h-auto w-[70%] p-[20px] rounded-[20px] ${
            theme === "light"
              ? "border border-[#2C2C29]"
              : "border border-[#f0edd4]"
          } max-lg:w-[70%] max-md:w-[100%]`}
        >
          <div className="flex justify-center items-center h-full w-full">
            <span
              className="font2 text-[40px] p-[20px] max-lg:text-[35px] max-md:text-[30px] font-serif font-bold leading-none"
              style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
            >
              Experience
            </span>
          </div>

          {popUp === "Accucell" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex mb-[20px]"
            >
              <div className="flex flex-col justify-center items-center text-center h-full w-full p-[10px] gap-[20px]">
                <div className="flex flex-col justify-center items-center w-full">
                  <p
                    className="font2 text-[#d63737]"
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    Accucell Diagnostic Center
                  </p>
                  <p
                    className="font"
                    style={{
                      fontSize: "18px",
                      color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    }}
                  >
                    Feb 15, 2021 - Feb 15, 2023
                  </p>
                  <div className="flex justify-center items-center gap-[20px] w-full">
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      POSITION:
                    </p>
                    <p
                      className="text-[#d63737]"
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Receptionist / Encoder
                    </p>
                  </div>
                </div>
                <div className="flex flex-col h-auto text-justify w-full gap-[20px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-auto">
                  <div className="flex flex-col gap-[10px] max-lg:justify-center max-lg:items-center">
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Assisting patients and taking call for their needs and
                      concerns
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Encoding the data of the patients and laboratory test
                      using Microsoft Access , Microsoft word and Excel.
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Keeping all medical documents and laboratory of the
                      patients
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Emailing Laboratory Test for those patients want the
                      digital results
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Keeping all specimens of those laboratories and
                      hospitals to our records or database.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {popUp === "MVP" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex  mb-[20px]"
            >
              <div className="flex flex-col justify-center items-center text-center h-full w-full p-[10px] gap-[20px]">
                <div className="flex flex-col justify-center items-center w-full">
                  <p
                    className="font2 text-[#d63737]"
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    MVP.dev
                  </p>
                  <p
                    className="font"
                    style={{
                      fontSize: "18px",
                      color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    }}
                  >
                    Feb 15, 2023 - Oct 14, 2023
                  </p>
                </div>
                <div className="flex flex-col h-auto text-justify w-full gap-[20px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-auto">
                  <div className="flex justify-center items-center gap-[20px] w-full">
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      POSITION:
                    </p>
                    <p
                      className="text-[#d63737]"
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Web Designer / Web Developer
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px] max-lg:justify-center max-lg:items-center">
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Self studying using Bubble.io Platform of no code
                      platform it use for making website
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Making Website from the scratch
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ I also do a full stack web developer in Bubble.io
                      platform (Front-end and Backend)
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Making mockup Designs (Web Designer)
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ API Integration by Using (API Connector)
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Database (Postgresql, Mysql)
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ HTML, CSS, Javascript
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {popUp === "Barcotech" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex  mb-[20px]"
            >
              <div className="flex flex-col justify-center items-center text-center h-full w-full p-[10px] gap-[20px]">
                <div className="flex flex-col justify-center items-center w-full">
                  <p
                    className="font2 text-[#d63737]"
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    Barcotech Philippines Inc.
                  </p>
                  <p
                    className="font"
                    style={{
                      fontSize: "18px",
                      color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    }}
                  >
                    May 21, 2024 - Present
                  </p>
                </div>
                <div className="flex flex-col h-auto text-justify w-full gap-[20px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-auto">
                  <div className="flex justify-center items-center gap-[20px] w-full">
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      POSITION:
                    </p>
                    <p
                      className="text-[#d63737]"
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Web Designer / Multimedia Designer
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px] max-lg:justify-center max-lg:items-center">
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Creating Website Design using Wordpress / Elementor
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Implement SEO and Google Analystics
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Coding with HTML CSS Javascript, Jquery
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Create layout using Photoshop and Canva
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Responsiveness of Website for Desktop / Tablet / Mobile
                    </p>
                    <p
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      ○ Preventing the maintenance or revision of the website
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
export default Experience;
