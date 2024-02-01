import { useState, useEffect } from "react";

const useScrool = (checkScroll = 10) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > checkScroll) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkScroll]);
  return scroll;
};

export default useScrool;
