export default function Navbar({ setTheme, filter, valueChange }) {
  return (
    <>
      <div className="navbar">
        <div id="brand">Joshua</div>
        <div className="theme-switcher">
          <i className="fas fa-moon fa-2x"></i>
          <label className="switch">
            <input type="checkbox" onChange={(e) => setTheme(e.target.checked)} />
            <span className="slider round"></span>
          </label>
          <i className="fas fa-sun fa-2x"></i>
        </div>
        <div className="navbar-socials">
          <a href="https://www.linkedin.com/in/joshuaperezleduc/" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
            <i className="fab fa-linkedin fa-2x social-link" />
          </a>
          <a href="http:///github.com/joshpled" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
            <i className="fab fa-github-square fa-2x social-link" />
          </a>
          <a href="http://twitter.com/joshpled" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
            <i className="fab fa-twitter-square fa-2x social-link" />
          </a>
          <a href="https://drive.google.com/file/d/11LjmfBuYmrrUER4FJd0eqIFtvgnfD-Qo/view" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
            <i className="fas fa-file-alt fa-2x social-link" />
          </a>
        </div>
      </div>
      <div className="navbar-filter">
        <h3>Filter:</h3>
        <input type="radio" name="none" id="none" checked={filter === "none"} onChange={valueChange} />
        <label htmlFor="none">None</label>
        <input type="radio" name="job" id="job" checked={filter === "job"} onChange={valueChange} />
        <label htmlFor="job">Work Experience</label>
        <input type="radio" name="personal" id="personal" checked={filter === "personal"} onChange={valueChange} />
        <label htmlFor="personal">Personal Projects</label>
        <input type="radio" name="school" id="school" checked={filter === "school"} onChange={valueChange} />
        <label htmlFor="school">School Projects</label>
      </div>
    </>
  );
}
