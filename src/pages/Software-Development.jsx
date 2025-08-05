import { useNavigate } from "react-router-dom";
import data from "../projects.json";
import Slider from "../components/project-slider/Project-Slider.jsx";
import useScrollAnimation from "../utils/useScrollAnimation.jsx";

export default function SoftwareDevelopment() {
  const navigate = useNavigate();
  const sw = data.SoftwareDevelopment;
  useScrollAnimation();

  return (
    <>
      <h1 className="projects-header">software development</h1>
      <Slider category={"SoftwareDevelopment"} projects={sw} />

      <div className="software-dev-body">
        <div className="projects">
          {Object.entries(sw)
            .slice()
            .reverse()
            .map(([key, project]) => (
              <div className={project.style} key={key}>
                <div id="head">
                  <h2>{project.name}</h2>
                  <p>{project.date}</p>
                </div>
                <div id="body">
                  <div id="text">
                    <p id="title">{project.short}</p>
                    <p>{project.long}</p>
                    <button
                      onClick={() => navigate(`/SoftwareDevelopment/${key}`)}
                    >
                      Learn More
                    </button>
                  </div>
                  <img
                    src={project.figmaimg ? project.figmaimg : project.img[0]}
                    alt={project.alt}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
