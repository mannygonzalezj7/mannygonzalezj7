import { Link, useParams } from "react-router-dom";
import data from "../projects.json";
import "../styles/Project-Page.css";

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
    <div className="project-style-1">
      <div id="header">
        <div id="header-text">
          <div id="header-head">
            <p>{project.date}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.long}</p>
          {project.link && (
            <a href={project.link} target="_blank" className="project-button">
              {project.linkname}
            </a>
          )}
        </div>
        <img id="img1" src={`../${project.img[0]}`} alt={project.alt} />
      </div>
      <div id="video-section">
        <div id="video-text">
          <h2>{project.headline[0]}</h2>
          <p>{project.description[0]}</p>
        </div>
        <video id="video" autoPlay loop muted>
          <source src={project.video} type="video/quicktime" />
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="two-pic-section">
        <div id="two-pic-images">
          <img id="img2" src={`../${project.img[1]}`} alt={project.alt} />
          <img id="img3" src={`../${project.img[2]}`} alt={project.alt} />
        </div>
        <div id="two-pic-text">
          <h2>{project.headline[1]}</h2>
          <p>{project.description[1]}</p>
        </div>
      </div>
      <div id="color-section">
        <h2>{project.headline[2]}</h2>
        <p>{project.description[2]}</p>
      </div>
      <div id="figma-section">
        {project.figma ? (
          <>
            <h2>explore the figma file</h2>
            <iframe id="figma" src={project.figma} allowFullScreen></iframe>
          </>
        ) : project.link ? (
          <>
            <a href={project.link} target="_blank" className="project-button">
              {project.linkname}
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
}

/**
 * {project.link && (
              <a href={project.link} target="_blank" className="project-button">
                {project.linkname}
              </a>
            )}
 * 
 * <div className="project-figma">
            {project.figma && (
              <>
                <h2>explore the figma file</h2>
                <iframe
                  className="figma"
                  src={project.figma}
                  allowFullScreen
                ></iframe>
              </>
            )}
          </div>
 */

/**
 * 
 * 
 * <div className="project-body">
        {project.img && (
          <div className="project-images-section">
            {Object.entries(project.img).map(([key, image]) => (
              <img
                key={key}
                src={`../${image}`}
                alt={project.alt}
                className="project-image"
              />
            ))}
          </div>
        )}

        <div className="project-info">
          <div className="project-head">
            <div className="project-title">
              <h1>{project.name}</h1>
              <p>{project.date}</p>
            </div>
          </div>
          <div className="project-description">
            <h2>{project.long}</h2>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" className="project-button">
                {project.linkname}
              </a>
            )}
          </div>
        </div>
      </div>
 */
