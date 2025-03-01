import data from "../projects.json";
import Card from "../components/project-slider/Project-Card";
import LogoSlider from "../components/logo-slider/Logo-Slider";
import { useNavigate } from "react-router-dom";
import "../components/project-slider/project-slider.css";
import "../styles/projects.css";

export default function GraphicDesign() {
  const gd = data.GraphicDesign;
  const navigate = useNavigate();

  const handleProjectClick = (category, projectId) => {
    navigate(`/${category}/${projectId}`);
  };

  return (
    <>
      <LogoSlider
        logos={[
          "/assets/logos/github.svg",
          "/assets/logos/bootstrap.svg",
          "/assets/logos/firebase.svg",
          "/assets/logos/html.svg",
          "/assets/logos/javascript.svg",
          "/assets/logos/python.svg",
          "/assets/logos/r.svg",
          "/assets/logos/react.svg",
          "/assets/logos/sql.svg",
          "/assets/logos/googlecloud.svg",
          "/assets/logos/css.svg",
          "/assets/logos/java.svg",

          "/assets/logos/github.svg",
          "/assets/logos/bootstrap.svg",
          "/assets/logos/firebase.svg",
          "/assets/logos/html.svg",
          "/assets/logos/javascript.svg",
          "/assets/logos/python.svg",
          "/assets/logos/r.svg",
          "/assets/logos/react.svg",
          "/assets/logos/sql.svg",
          "/assets/logos/googlecloud.svg",
          "/assets/logos/css.svg",
          "/assets/logos/java.svg",
        ]}
      />
      <h1 className="projects-header">graphic design</h1>

      <div className="card-holder">
        {Object.entries(gd).map(([key, project]) => (
          <Card
            key={key}
            img={project.logo}
            alt={project.alt}
            name={project.name}
          />
        ))}
      </div>

      <div className="software-dev-body">
        <div className="projects">
          {Object.entries(gd).map(([key, project]) => (
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
                    onClick={() => handleProjectClick("GraphicDesign", key)}
                  >
                    Learn More
                  </button>
                </div>
                <img src={project.img} alt={project.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
