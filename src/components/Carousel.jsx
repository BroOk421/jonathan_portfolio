import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoTypescript,
  BiLogoFirebase,
} from "react-icons/bi";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaJava,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaPhp,
  FaTrello,
  FaSlack,
  FaWordpress,
  FaElementor,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobexd,
  SiJira,
  SiExpress,
} from "react-icons/si";
import { FaStripe } from "react-icons/fa6";
import { PiFileSql } from "react-icons/pi";
import { TbBrandAdobePremier, TbBrandCSharp } from "react-icons/tb";

import { useTheme } from "../context/ThemeContext";

const Carousel = () => {
  const { theme } = useTheme();

  const category = [
    <FaReact />,
    <BiLogoTailwindCss />,
    <FaCss3Alt />,
    <FaHtml5 />,
    <BiLogoJavascript />,
    <BiLogoTypescript />,
    <BiLogoMongodb />,
    <FaPython />,
    <TbBrandCSharp />,
    <BiLogoFirebase />,
    <FaJava />,
    <SiExpress />,
    <FaNodeJs />,
    <FaWordpress />,
    <FaElementor />,
    <FaStripe />,
  ];

  const category2 = [
    <SiAdobephotoshop />,
    <SiAdobeaftereffects />,
    <TbBrandAdobePremier />,
    <SiAdobeillustrator />,
    <FaFigma />,
    <FaBootstrap />,
    <FaPhp />,
    <PiFileSql />,
    <SiAdobexd />,
    <FaTrello />,
    <SiJira />,
    <FaSlack />,
  ];

  return (
    <div
      className="div-gradient flex flex-col justify-center items-center"
      style={{
        backgroundColor: theme === "dark" ? "#2C2C29" : "#f0edd4",
        "--gradient-color": theme === "light" ? "240, 237, 212" : "44, 44 ,41",
      }}
    >
      <div className="carousel h-[10vh]">
        {[...category, ...category, ...category].map((item, index) => (
          <div key={index}>
            <span
              className="text-[38px] max-md:text-[30px]"
              style={{
                color: theme !== "light" ? "#f0edd4" : "#2C2C29",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="carousel2 h-[10vh]">
        {[...category2, ...category2, ...category2].map((item, index) => (
          <div key={index}>
            <span
              className="text-[38px] max-md:text-[30px]"
              style={{
                color: theme !== "light" ? "#f0edd4" : "#2C2C29",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
