import { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
}

export default Header;
