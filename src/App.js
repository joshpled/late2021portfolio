import React, { useState } from "react";
import Navbar from "components/Navbar";
import Projects from "components/Projects/Projects";
import MobileMenu from "components/MobileMenu";
import { useWindowSize } from "react-use";

function App() {
  const { width } = useWindowSize();
  const [theme, setTheme] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const handleBurger = () => {
    setHamburger((prev) => !prev);
  };

  return (
    <div className={`main-container theme-${theme ? "light" : "dark"}`}>
      <header>
        {width <= 375 && (
          <div className="hamburger--edits">
            <div className="theme-switcher">
              <i className="fas fa-moon fa-2x"></i>
              <label className="switch">
                <input type="checkbox" onChange={(e) => setTheme(e.target.checked)} />
                <span className="slider round"></span>
              </label>
              <i className="fas fa-sun fa-2x"></i>
            </div>
            <button className={`hamburger hamburger--elastic ${hamburger ? "is-active" : ""}`} type="button" onClick={handleBurger}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        )}
        {width >= 376 && <Navbar setTheme={setTheme} />}
      </header>
      <main>
        <MobileMenu openMenu={hamburger} />
        <Projects />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
