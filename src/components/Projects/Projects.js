import { projectsArray } from "./data";
import Project from "./Project";
import generateKey from "helpers/generateKey";
export default function Projects() {
  return (
    <div className="project-wrapper">
      {projectsArray.map(({ title, technologies, link }, index) => {
        return <Project title={title} technologies={technologies} link={link} key={generateKey(index)} />;
      })}
    </div>
  );
}
