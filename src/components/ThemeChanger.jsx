import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <select
      value={theme}
      onChange={handleThemeChange}
      className="select select-bordered"
    >
      <option value="light">Light</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="dark">Dark</option>
      <option value="retro">Retro</option>
      <option value="valentine">Valentine</option>
      <option value="aqua">Aqua</option>
    </select>
  );
};

export default ThemeSwitcher;
