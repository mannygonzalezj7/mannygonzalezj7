import "./Logo-Slider.css";
import InlineSVG from "../../utils/inlineSVG.jsx";

export default function LogoSlider({ logos }) {
  // Returns the name of the logo without the file trace
  const getLogoName = (logoPath) => {
    const filename = logoPath
      .split("/")
      .pop()
      .replace(/\.(svg|png)$/, "");
    return filename;
  };

  return (
    <div className="logo-container">
      <div className="logo-track">
        {logos.map((logo, index) => (
          <InlineSVG
            key={index}
            src={logo}
            className="logo"
            alt={getLogoName(logo)}
          />
        ))}
      </div>
    </div>
  );
}
