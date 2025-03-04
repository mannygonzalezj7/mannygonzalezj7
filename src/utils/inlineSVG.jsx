import { useEffect, useState } from "react";

/**
 * Code from ChatGPT to transfer image to inline SVG for logo headers
 *
 * @param {*} SVG in image form
 * @returns an inline SVG
 */
const InlineSVG = ({ src, className, ...props }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(src);
        const text = await response.text();
        const parser = new DOMParser();
        const svg = parser
          .parseFromString(text, "image/svg+xml")
          .querySelector("svg");

        if (svg) {
          // Change all path and other relevant elements' fill to currentColor
          const paths = svg.querySelectorAll("path");
          paths.forEach((path) => {
            path.setAttribute("fill", "currentColor"); // Only set the fill
          });

          const otherElements = svg.querySelectorAll(
            "circle, rect, line, polygon, polyline"
          );
          otherElements.forEach((element) => {
            element.setAttribute("fill", "currentColor"); // Only set the fill
          });

          // Retain original class names
          if (className) {
            svg.setAttribute("class", className);
          }
          setSvgContent(svg.outerHTML);
        }
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    fetchSVG();
  }, [src]);

  return svgContent ? (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} {...props} />
  ) : (
    <img src={src} className={className} alt="SVG" {...props} />
  );
};

export default InlineSVG;
