import credentials from "../credentials.jsx";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";
import LogoBlack from "../assets/logo-black.png";
import LogoCream from "../assets/logo-white.png";

const Footer = () => {
  const { theme } = useTheme();
  const { isVisible, ref } = useScrollAnimation();

  const scrollViewToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex flex-col self-start min-h-[60vh] w-full justify-between items-center pr-[10px] pl-[10px] pt-[100px] pb-[20px]${
        isVisible ? "visible" : ""
      } ${
        theme === "dark" ? "bg-[#30302c]" : "bg-[#dbd9c6]"
      } max-xl:min-h-[90vh]`}
    >
      <div className="flex h-auto w-[80%] gap-[150px] max-md:flex-col max-md:gap-[20px]">
        <div className="flex justify-center items-center w-[90px] max-md:w-[60px]">
          <img
            className="flex-shrink-0 h-[50px] w-[60px]"
            src={theme === "dark" ? LogoCream : LogoBlack}
          />
        </div>

        <div className="flex gap-[50px] max-xl:flex-col">
          <div className="flex">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="flex flex-col h-auto gap-[10px] w-[250px]"
              >
                <span
                  className={`text-[24px]`}
                  style={{
                    color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                  }}
                >
                  {credential.pages.name}
                </span>

                <div className="flex flex-col gap-[5px]">
                  {credential.pages.list.map((item, idx) => (
                    <p
                      key={idx}
                      className={`font cursor-pointer`}
                      style={{
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                      onClick={() => scrollViewToSection(item.toLowerCase())}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {credentials.map((credential, index) => (
              <div
                key={index}
                className="flex flex-col h-auto gap-[10px] w-[250px]"
              >
                <span
                  className={`text-[24px]`}
                  style={{
                    color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                  }}
                >
                  {credential.projects.name}
                </span>

                <div className="flex flex-col gap-[5px]">
                  {credential.projects.list.map((item, idx) => (
                    <p
                      key={idx}
                      className={`font`}
                      style={{
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="flex flex-col h-auto gap-[10px] w-[250px]"
              >
                <span
                  className={`text-[24px]`}
                  style={{
                    color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                  }}
                >
                  {credential.services.name}
                </span>

                <div className="flex flex-col gap-[5px]">
                  {credential.services.list.map((item, idx) => (
                    <p
                      key={idx}
                      className={`font`}
                      style={{
                        color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {credentials.map((credential, index) => (
              <div
                key={index}
                className="flex flex-col h-auto gap-[10px] w-[250px]"
              >
                <span
                  className="text-[24px]"
                  style={{
                    color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                  }}
                >
                  {credential.social.name}
                </span>

                {credential.social.list.map((item, idx) => (
                  <p
                    key={idx}
                    className="font cursor-pointer"
                    style={{
                      color: theme === "dark" ? "#f0edd4" : "#2C2C29",
                    }}
                    onClick={() => window.open(item.url, "_blank")}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <p
          className="font"
          style={{ color: theme !== "light" ? "#f0edd4" : "#2C2C29" }}
        >
          Copyright © 2025 Apple Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
