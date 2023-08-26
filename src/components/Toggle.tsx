import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  // get the dark mode preference from localStorage if it's available when the application loads
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference) {
      setDarkMode(JSON.parse(darkModePreference));
    }
  }, []);

  useEffect(() => {
    // get the <html> element
    const html = document.querySelector("html");
    if (!html) return;
    // check if dark mode is enabled
    if (darkMode) {
      // add the "dark" class to the <html> element
      html.classList.add("dark");
    } else {
      // remove the "dark" class from the <html> element
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const onChange = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
    // Set the preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <div className="mt-1 pl-3 ">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onChange={onChange}
          type="checkbox"
          checked={darkMode}
          className="peer sr-only"
        />
        <div className="w-11 h-6 bg-slate-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent dark:peer-focus:ring-transparent rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  dark:peer-checked:bg-purple" />
      </label>
    </div>
  );
};

export default Toggle;
