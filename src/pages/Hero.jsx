import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx";
import Carousel from "../components/Carousel.jsx";

const Hero = () => {
  const { theme } = useTheme();
  const { isVisible, ref } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`flex flex-col self-start h-auto w-full justify-start items-center fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="flex flex-col justify-center items-center pt-[250px] pr-[20px] pl-[20px] pb-[50px] w-full">
        <p
          className="font2 text-[40px] font-bold leading-tight max-md:text-[35px]"
          style={{
            color: theme === "dark" ? "#f0edd4" : "#2C2C29",
          }}
        >
          Hi, There!
        </p>
        <p
          className="font2 text-[100px] font-bold leading-none text-center max-lg:text-[60px] max-md:text-[45px]"
          style={{ color: theme === "dark" ? "#d63737" : "#2C2C29" }}
        >
          I'm Jonathan Gamboa
        </p>
        <p
          className="font2 text-[23px] leading-none text-center max-md:text-[18px] mt-[25px]"
          style={{ color: theme === "dark" ? "#f0edd4" : "#2C2C29" }}
        >
          Web Developer | Web Designer
        </p>
        <div className="flex justify-center items-center bg-[#d63737] pl-[35px] pr-[35px] pt-[10px] pb-[10px] mt-[40px] mb-[100px] rounded-full hover:scale-[1.1] transition ease-out max-md:mb-[50px]">
          <a href="https://drive.google.com/file/d/1oVaVuoQMRZtiH5bBX2Y9xZae4Vr_zQ7K/view?usp=sharing">
            <button className="font2 text-[#f0edd4]">Resume</button>
          </a>
        </div>
        <Carousel />
      </div>
    </motion.div>
  );
};

export default Hero;
