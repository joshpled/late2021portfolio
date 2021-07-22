import React, { useState } from "react";
import Navbar from "components/Navbar";
import Projects from "components/Projects/Projects";
import MobileMenu from "components/MobileMenu";
import { useWindowSize } from "react-use";
import { Helmet } from "react-helmet";

function App() {
  const { width } = useWindowSize();
  const [theme, setTheme] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const handleBurger = () => {
    setHamburger((prev) => !prev);
  };
  const [filter, setFilter] = useState("none");

  const valueChange = (e) => {
    setFilter(e.target.name);
  };

  return (
    <div className={`main-container theme-${theme ? "light" : "dark"}`}>
      <Helmet>
        <meta property="og:title" content="Joshua Perez Leduc | Software Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joshuapleduc.com" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        <meta
          property="og:description"
          content="I am a software engineer and full stack developer who specializes in building applications specific to the business needs of my clients. I have done work in software development, mobile app creation, front-end/back-end web, and database/server management. My background in graphic design and photography, with experience in Adobe products such as Photoshop and Illustrator, fosters an eye for visual frontend development."
        />
      </Helmet>
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
        {width >= 376 && <Navbar setTheme={setTheme} filter={filter} valueChange={valueChange} />}
      </header>
      <main>
        <MobileMenu openMenu={hamburger} />
        <Projects filter={filter} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
