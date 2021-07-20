import { projectsArray } from "./data";
import Project from "./Project";
import generateKey from "helpers/generateKey";

export default function Projects({ filter }) {
  const checkFilter = () => {
    if (filter && filter !== "none") {
      let filteredArray = projectsArray.filter((project) => project.type === filter);
      return filteredArray.map(({ title, technologies, link, image, demo }, index) => {
        return <Project title={title} technologies={technologies} link={link} key={generateKey(index)} image={image} demo={demo} />;
      });
    } else {
      return projectsArray.map(({ title, technologies, link, image, demo }, index) => {
        return <Project title={title} technologies={technologies} link={link} key={generateKey(index)} image={image} demo={demo} />;
      });
    }
  };
  return <div className="project-wrapper">{checkFilter()}</div>;
}
