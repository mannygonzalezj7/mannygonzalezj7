import data from "../projects.json";
import Card from "../components/project-slider/Project-Card";
import LogoSlider from "../components/logo-slider/Logo-Slider";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../utils/useScrollAnimation.jsx";
import "../components/project-slider/project-slider.css";
import "../styles/projects.css";

export default function UIUX() {
  const uiux = data.UIUX;
  const navigate = useNavigate();
  useScrollAnimation();

  const handleProjectClick = (category, projectId) => {
    navigate(`/${category}/${projectId}`);
  };

  return (
    <>
      <LogoSlider
        logos={[
          "/assets/logos/figma.svg",
          "/assets/logos/illustrator.svg",
          "/assets/logos/indesign.svg",
          "/assets/logos/photoshop.svg",
          "/assets/logos/lightroom.svg",
          "/assets/logos/javascript.svg",
          "/assets/logos/figma.svg",
          "/assets/logos/python.svg",
          "/assets/logos/html.svg",
          "/assets/logos/react.svg",
          "/assets/logos/css.svg",
          "/assets/logos/java.svg",

          "/assets/logos/figma.svg",
          "/assets/logos/illustrator.svg",
          "/assets/logos/indesign.svg",
          "/assets/logos/photoshop.svg",
          "/assets/logos/lightroom.svg",
          "/assets/logos/javascript.svg",
          "/assets/logos/python.svg",
          "/assets/logos/figma.svg",
          "/assets/logos/html.svg",
          "/assets/logos/react.svg",
          "/assets/logos/css.svg",
          "/assets/logos/java.svg",
        ]}
      />
      <h1 className="projects-header">ui/ux design</h1>

      <div className="card-holder">
        {Object.entries(uiux).map(([key, project]) => (
          <Card
            key={key}
            img={project.logo}
            alt={project.alt}
            name={project.name}
            onClick={() => handleProjectClick("UIUX", key)}
          />
        ))}
      </div>

      <div className="software-dev-body">
        <div className="projects">
          {Object.entries(uiux)
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
                    <button onClick={() => handleProjectClick("UIUX", key)}>
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
