export default function Project({ title, technologies, link, image, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt="project" />
      <div className="project-information">
        <h1>{title}</h1>
        <h3>{technologies}</h3>
        <div className="project-links">
          <a href={link}>
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href={demo} id="project-demo">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
