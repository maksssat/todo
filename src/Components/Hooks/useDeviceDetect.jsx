import { useEffect, useState } from "react";

const useDeviceDetect = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const handleWindowResize = () => {
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return width < 1100;
};

export default useDeviceDetect;
