import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Card from "../project-slider/Project-Card";
import { useNavigate } from "react-router-dom";
import "../project-slider/project-slider.css";
import "../../styles/projects.css";

gsap.registerPlugin(Draggable);

export default function Slider({ category, projects }) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const handleProjectClick = (category, projectId) => {
    navigate(`/${category}/${projectId}`);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const container = slider.parentElement;
    const containerWidth = container.offsetWidth;
    const sliderWidth = slider.scrollWidth;

    // Calculate the initial center position
    const startX = (containerWidth - sliderWidth) / 2;
    gsap.set(slider, { x: startX });

    // Only enable Draggable if content is wider than the container
    if (sliderWidth > containerWidth) {
      Draggable.create(slider, {
        type: "x",
        inertia: true,
        bounds: ".slider-container",
        edgeResistance: 0.8,
        cursor: "grab",
        allowNativeTouchScrolling: false,
        onPress() {
          this.startX = this.x;
        },
        onDrag() {
          gsap.to(slider, { x: this.x, duration: 0.05, ease: "power3.out" });
        },
        onRelease() {
          gsap.to(slider, { x: this.x, duration: 0.5, ease: "power3.out" });
        },
      });
    }
  }, [projects]); // Re-run when projects change

  return (
    <div className="slider-container">
      <div className="card-holder" ref={sliderRef}>
        {Object.entries(projects)
          .slice()
          .reverse()
          .map(([key, project]) => (
            <Card
              key={key}
              img={project.logo}
              alt={project.alt}
              name={project.name}
              onClick={() => handleProjectClick(category, key)}
            />
          ))}
      </div>
    </div>
  );
}
