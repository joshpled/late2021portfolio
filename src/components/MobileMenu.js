export default function MobileMenu({ openMenu }) {
  return (
    <div className={`mobile-menu-wrapper ${openMenu ? "open-menu" : "close-menu"}`}>
      <a href="https://www.linkedin.com/in/joshuaperezleduc/" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
        <i className="fab fa-linkedin fa-2x social-link" /> LinkedIn
      </a>
      <a href="http:///github.com/joshpled" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
        <i className="fab fa-github-square fa-2x social-link" />
        Github
      </a>
      <a href="http://twitter.com/joshpled" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
        <i className="fab fa-twitter-square fa-2x social-link" />
        Twitter
      </a>
      <a href="https://drive.google.com/file/d/11LjmfBuYmrrUER4FJd0eqIFtvgnfD-Qo/view" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
        <i className="fas fa-file-alt fa-2x social-link" />
        Resume
      </a>
    </div>
  );
}
