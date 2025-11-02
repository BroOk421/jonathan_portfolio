import BubbleBlack from "./assets/bubble-black.png";
import BubbleCream from "./assets/bubble-cream.png";
import ChatgptCream from "./assets/ChatgptCream.png";
import ChatgptBlack from "./assets/ChatgptBlack.png";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { FaWordpress, FaElementor, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import StudentReview from "./assets/StudentReview.png";
import themAIGuy from "./assets/themAIguy.png";
import Barcotech from "./assets/Barcotech.png";
import RCA from "./assets/rca-hapi.png";

const projects = [
  {
    name: "StudentReview",
    image: StudentReview,
    tech: [
      <BiLogoJavascript />,
      <BiLogoPostgresql />,
      { dark: BubbleCream, light: BubbleBlack },
    ],
  },
  {
    name: "ThemAIGuy",
    image: themAIGuy,
    tech: [
      { dark: BubbleCream, light: BubbleBlack },
      <BiLogoJavascript />,
      { dark: ChatgptCream, light: ChatgptBlack },
    ],
  },
  {
    name: "RCA HAPI",
    image: RCA,
    tech: [<BiLogoJavascript />, { dark: BubbleCream, light: BubbleBlack }],
  },
  {
    name: "Barcotech",
    image: Barcotech,
    tech: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <FaWordpress />,
      <FaElementor />,
      <BiLogoJavascript />,
      <PiFileSql />,
    ],
  },
];

export default projects;
