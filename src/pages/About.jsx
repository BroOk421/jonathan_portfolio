import { useTheme } from "../context/ThemeContext.jsx";
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx";
import CountUp from "../hooks/useCountUp.jsx";
import { motion } from "framer-motion";
import { TbBrandAdobePremier } from "react-icons/tb";
import grad from "../assets/grad.jpg";
import CapcutCream from "../assets/capcut-cream.png";
import CapcutBlack from "../assets/capcut-black.png";
import BubbleCream from "../assets/bubble-cream.png";
import BubbleBlack from "../assets/bubble-black.png";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoFirebase,
} from "react-icons/bi";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaTrello,
  FaSlack,
  FaWordpress,
  FaElementor,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobexd,
  SiJira,
  SiExpress,
  SiTask,
} from "react-icons/si";

import { PiFileSql } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";

const category = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <BiLogoJavascript />,
  <FaBootstrap />,
  <PiFileSql />,
  <FaNodeJs />,
  <SiExpress />,
  <BiLogoMongodb />,
  <FaReact />,
  <BiLogoTailwindCss />,
  <BiLogoFirebase />,
  <FaWordpress />,
  <FaElementor />,
];

const category2 = [
  <SiAdobephotoshop />,
  <SiAdobeaftereffects />,
  <TbBrandAdobePremier />,
  <SiAdobeillustrator />,
  <FaFigma />,
  <SiAdobexd />,
];

const category3 = [<FaTrello />, <SiJira />, <FaSlack />];

const About = () => {
  const { theme } = useTheme();
  const { isVisible, ref } = useScrollAnimation();
  const [isSwitch, setIsSwitch] = useState(false);

  return (
    <div
      ref={ref}
      id="about"
      className={`flex flex-col self-start h-auto w-full justify-center items-center pt-[100px] pb-[100px] fade-in ${
        isVisible ? "visible" : ""
      } max-lg:pt-[10px]`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
      <motion.div className="flex justify-start items-start h-auto w-[93%] pr-[10px] pl-[10px] max-xl:flex-col max-lg:justify-start max-lg:w-full">
        {/*Mother Div*/}
        <div className="flex flex-col w-full p-[20px] gap-[30px] max-xl:flex max-xl:w-full max-lg:p-[10px] max-xl:flex-row">
          {/*Inner Div 1*/}
          <div
            className={`flex flex-col justift-center items-start pt-[30px] pb-[30px] pr-[30px] pl-[30px] rounded-[20px] gap-[20px] max-xl:w-full ${
              theme === "light"
                ? "border border-[#2C2C29]"
                : "border border-[#f0edd4]"
            }`}
            style={{
              backgroundColor: theme === "dark" ? "#2C2C29" : "#f0edd4",
            }}
          >
            <div className="flex justfiy-center items-start gap-[20px]">
              <div>
                <img
                  className="w-[150px] h-[150px] object-cover"
                  src={grad}
                  alt="img.profile"
                />
              </div>
              <div>
                <div className="flex flex-col justify-start items-start">
                  <p className="font1 font-bold text-[#d63737] text-[18px] max-md:text-[15px]">
                    NAME
                  </p>
                  <span
                    className={`font1 font-bold ${
                      theme === "dark" ? "text-[#f0edd4]" : "text-[#2C2C29]"
                    } text-[18px] max-md:text-[13px]`}
                  >
                    JONATHAN P. GAMBOA
                  </span>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="font1 font-bold text-[#d63737] text-[18px] max-md:text-[15px]">
                    AGE
                  </p>
                  <span
                    className={`font1 font-bold ${
                      theme === "dark" ? "text-[#f0edd4]" : "text-[#2C2C29]"
                    } text-[18px] max-md:text-[13px]`}
                  >
                    26
                  </span>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="font1 font-bold text-[#d63737] text-[18px] max-md:text-[15px]">
                    POSITION
                  </p>
                  <span
                    className={`font1 font-bold ${
                      theme === "dark" ? "text-[#f0edd4]" : "text-[#2C2C29]"
                    } text-[18px] max-md:text-[13px]`}
                  >
                    Web Designer | Web Developer | UI / UX
                  </span>
                </div>
              </div>
            </div>
            <div
              className="h-[1px] w-full"
              style={{
                backgroundColor: theme === "light" ? "#2C2C29" : "#f0edd4", //Horizontal Line
              }}
            />
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[5px]">
                  <p
                    className="text-[18px] font-bold text-[#d63737]"
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    Tech Stacks
                  </p>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {category.map((item, index) => (
                    <div key={index}>
                      <span
                        className="text-[40px] font-bold max-md:text-[30px]"
                        style={{
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                  <motion.img
                    key={theme}
                    className="flex h-[35px] w-[45px] max-md:h-[25px] max-md:w-[35px]"
                    src={theme === "dark" ? BubbleCream : BubbleBlack}
                    alt={theme === "dark" ? BubbleCream : BubbleBlack}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[5px]">
                  <span
                    className="text-[18px] font-bold text-[#d63737]"
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    Editing
                  </span>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {category2.map((item, index) => (
                    <div key={index}>
                      <span
                        className="text-[38px] font-bold max-md:text-[30px]"
                        style={{
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                  <motion.img
                    key={theme}
                    className="flex h-[35px] w-[40px] max-md:h-[25px] max-md:w-[35px]"
                    src={theme === "dark" ? CapcutCream : CapcutBlack}
                    alt={theme === "dark" ? CapcutCream : CapcutBlack}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[5px]">
                  <p
                    className="text-[18px] font-bold text-[#d63737]"
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    Task Management
                  </p>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {category3.map((item, index) => (
                    <div key={index}>
                      <p
                        className="text-[38px] font-bold max-md:text-[30px]"
                        style={{
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[621px] w-full pt-[20px] pb-[20px] pr-[10px] pl-[10px] gap-[30px]">
          <div className="flex w-full rounded-[20px] gap-[20px] max-md:gap-[10px]">
            <div
              className={`flex flex-col justify-center items-center h-auto w-full p-[10px] rounded-[20px] ${
                theme === "light"
                  ? "border border-[#2C2C29]"
                  : "border border-[#f0edd4]"
              }`}
            >
              <div>
                <p
                  className="font2 text-[24px] max-lg:text-[20px] max-md:text-[14px]"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                >
                  Experience
                </p>
              </div>
              <div className="flex justify-center items-center h-auto w-full gap-[30px] rounded-[20px]">
                <FaBriefcase
                  className="text-[60px] max-lg:text-[55px] max-md:text-[30px]"
                  style={{
                    color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
                {isVisible && <CountUp end={4} duration={1300} />}
              </div>
            </div>
            <div
              className={`flex flex-col justify-center items-center h-auto w-full p-[10px] rounded-[20px] ${
                theme === "light"
                  ? "border border-[#2C2C29]"
                  : "border border-[#f0edd4]"
              }`}
            >
              <div>
                <p
                  className="font2 text-[24px] max-lg:text-[20px] max-md:text-[14px]"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                >
                  Projects
                </p>
              </div>
              <div className="flex justify-center items-center h-auto w-full gap-[30px] rounded-[20px]">
                <SiTask
                  className="text-[60px] max-lg:text-[55px] max-md:text-[30px]"
                  style={{
                    color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
                {isVisible && <CountUp end={8} duration={1400} />}
              </div>
            </div>
            <div
              className={`flex flex-col justify-center items-center h-auto w-full p-[10px] rounded-[20px] ${
                theme === "light"
                  ? "border border-[#2C2C29]"
                  : "border border-[#f0edd4]"
              }`}
            >
              <div>
                <p
                  className="font2 text-[24px] max-lg:text-[20px] max-md:text-[14px]"
                  style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
                >
                  Website
                </p>
              </div>
              <div className="flex justify-center items-center h-auto w-full gap-[30px] rounded-[20px]">
                <CgWebsite
                  className="text-[60px] max-lg:text-[55px] max-md:text-[30px]"
                  style={{
                    color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
                {isVisible && <CountUp end={5} duration={1500} />}
              </div>
            </div>
          </div>
          {/* div last*/}
          <div
            className={`"flex flex-col h-auto w-full p-[20px] gap-[30px] rounded-[20px] max-md:p-[5px]`}
          >
            <div className="flex flex-col justify-between gap-[20px]">
              <div className="flex justify-between items-center w-full">
                {!isSwitch ? (
                  <>
                    <span
                      className="font2 text-[40px] max-lg:text-[35px] max-md:text-[30px] font-serif font-bold leading-none"
                      style={{
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      About Me
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="font2 text-[40px] max-lg:text-[35px] max-md:text-[30px] font-serif font-bold leading-none"
                      style={{
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      Education
                    </span>
                  </>
                )}
                <div className="flex justify-between items-center w-[200px] gap-[10px] p-[10px]">
                  <button
                    className={`text-[16px] pr-[20px] pl-[20px] pt-[10px] pb-[10px] ${
                      !isSwitch
                        ? "bg-[#d63737] boder border-[#d63737]"
                        : "bg-[#2C2C29]"
                    } rounded-[5px] ${
                      theme === "light" && isSwitch
                        ? "bg-[#f0edd4] text-[#2C2C29]"
                        : "bg-[#2C2C29] text-[#f0edd4] "
                    }`}
                    onClick={() => setIsSwitch(false)}
                  >
                    About
                  </button>
                  <button
                    className={`text-[16px] pr-[20px] pl-[20px] pt-[10px] pb-[10px] ${
                      isSwitch
                        ? "bg-[#d63737] boder border-[#d63737]"
                        : "bg-[#2C2C29]"
                    } rounded-[5px] ${
                      theme === "light" && !isSwitch
                        ? "bg-[#f0edd4] text-[#2C2C29]"
                        : "bg-[#2C2C29] text-[#f0edd4]"
                    }`}
                    onClick={() => setIsSwitch(true)}
                  >
                    Education
                  </button>
                </div>
              </div>
              <div className=" w-full flex flex-col justify-between [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-auto max-md:h-[450px]">
                {!isSwitch ? (
                  <>
                    <p
                      className="text-gray-800 leading-relaxed text-justify"
                      style={{
                        fontFamily: "Share Tech, sans-serif",
                        fontSize: "18px",
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      Hello! My name is Jonathan Gamboa, and I’m a 26-year-old
                      aspiring web developer and designer. I graduated from ICCT
                      Colleges in Cainta, and I currently live in Angono, Rizal.
                      During my free time, I love to play online games and
                      listen to music, which helps me relax and recharge. But
                      whenever I start to feel bored, I usually open my computer
                      and dive back into learning. I believe that growth never
                      stops, and there’s always something new to discover. My
                      ultimate goal in life is to become successful in the tech
                      industry, create meaningful projects, and continue to
                      learn and grow every step of the way. Someday, I dream of
                      living a simple yet fulfilling life, doing what I love,
                      building and designing things that make a difference.
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col justify-center items-center h-auto w-full gap-[30px]">
                    <div className="flex flex-col justify-center items-center h-auto w-full pt-[30px] gap-[5px]">
                      <p
                        className="text-gray-800 leading-relaxed text-justify"
                        style={{
                          fontFamily: "Share Tech, sans-serif",
                          fontSize: "18px",
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                        }}
                      >
                        ICCT Colleges Cainta
                      </p>
                      <div className="flex flex-col justify-center items-center h-auto w-full">
                        <p
                          className="text-gray-800 leading-relaxed text-justify"
                          style={{
                            fontFamily: "Share Tech, sans-serif",
                            fontSize: "18px",
                            color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                          }}
                        >
                          Bachelor Of Science in Information Technology
                        </p>
                        <p
                          className="text-gray-800 leading-relaxed text-justify"
                          style={{
                            fontFamily: "Share Tech, sans-serif",
                            fontSize: "18px",
                            color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                          }}
                        >
                          2019-2022
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex h-[1px] w-full ${
                        theme === "dark" ? "bg-[#f0edd4]" : "bg-[#2C2C29]"
                      } opacity-[10%]`}
                    />
                    <div className="flex flex-col justify-center items-center h-auto w-full gap-[5px]">
                      <p
                        className="text-gray-800 leading-relaxed text-justify"
                        style={{
                          fontFamily: "Share Tech, sans-serif",
                          fontSize: "18px",
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                        }}
                      >
                        Dr. Vivencio B. Villamayor NHS
                      </p>
                      <p
                        className="text-gray-800 leading-relaxed text-justify"
                        style={{
                          fontFamily: "Share Tech, sans-serif",
                          fontSize: "18px",
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                        }}
                      >
                        2011-2015
                      </p>
                    </div>
                    <div
                      className={`flex h-[1px] w-full ${
                        theme === "dark" ? "bg-[#f0edd4]" : "bg-[#2C2C29]"
                      } opacity-[10%]`}
                    />
                    <div className="flex flex-col justify-center items-center h-auto w-full gap-[5px]">
                      <p
                        className="text-gray-800 leading-relaxed text-justify"
                        style={{
                          fontFamily: "Share Tech, sans-serif",
                          fontSize: "18px",
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                        }}
                      >
                        Angono Elementary School
                      </p>
                      <p
                        className="text-gray-800 leading-relaxed text-justify"
                        style={{
                          fontFamily: "Share Tech, sans-serif",
                          fontSize: "18px",
                          color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                        }}
                      >
                        2005 - 2011
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
