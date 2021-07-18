export default function Navbar({ setTheme }) {
  return (
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
  );
}
