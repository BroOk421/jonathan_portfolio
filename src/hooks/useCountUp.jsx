import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const CountUp = ({ end, duration = 2000, className = "", style }) => {
  const { theme } = useTheme();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className="font2 text-[#d63737] text-[48px] max-lg:text-[43px] max-md:text-[35px]">
      {count.toLocaleString()}
    </span>
  );
};

export default CountUp;
