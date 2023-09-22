import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
const DarkMode = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const darkModeEnabled = storedDarkMode === "true";
    setToggle(darkModeEnabled);

    if (darkModeEnabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);

    if (newToggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newToggle.toString());
  };
  return <Toggle enabled={toggle} setEnabled={handleToggle} />;
};

export default DarkMode;
