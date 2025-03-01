import { Link, useParams } from "react-router-dom";
import data from "../projects.json";
import "../styles/App.css";

export default function Project() {
  const { category, projectId } = useParams();
  const project = data[category] ? data[category][projectId] : null;

  if (!project) {
    return (
      <>
        <div>
          <h1>project not found</h1>
          <Link to={`/${category}`}>back to projects</Link>
        </div>
      </>
    );
  }

  return (
    <div className="project">
      <Link to={`/${category}`} className="project-link">
        back to projects
      </Link>
      <div className="project-body">
        <div className="project-head">
          <img
            src={`../${project.img}`}
            alt={project.alt}
            className="project-image"
          />
          <div className="project-title">
            <h1>{project.name}</h1>
            <p>Date: {project.date}</p>
          </div>
        </div>
        <div className="project-description">
          <h2>{project.long}</h2>
          <p>{project.description}</p>
          <a href={project.link} className="project-link" target="_blank">
            External Link
          </a>
        </div>
      </div>
    </div>
  );
}
