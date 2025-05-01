import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [deviceType, setDeviceType] = useState("");
  const [toggle, setToggle] = useState(false);

  // UseEffect to find optimal screen size
  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth <= 480) {
        setDeviceType("mobile");
      } else if (window.innerWidth <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
        setToggle(false);
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  const handleToggle = () => {
    // Handle the toggle of the menu
    setToggle((prev) =>
      deviceType === "mobile" || deviceType === "tablet" ? !prev : false
    );
  };

  return (
    <nav className="header">
      <div className="header-main">
        <p id="title">manuel gonzalez jimenez</p>
        <img
          src="/assets/svg/menu.svg"
          className="trigger"
          onClick={handleToggle}
        />
      </div>
      <ul
        className={`links${deviceType === "desktop" ? "-desktop" : ""}${
          toggle ? "-isOpen" : ""
        }`}
      >
        <li>
          <img
            src="/assets/svg/close-menu.svg"
            className="trigger"
            onClick={handleToggle}
          />
        </li>
        <li>
          <Link to="/" onClick={handleToggle}>
            home
          </Link>
        </li>
        <li>
          <Link to="/SoftwareDevelopment" onClick={handleToggle}>
            software development
          </Link>
        </li>
        <li>
          <Link to="/UIUX" onClick={handleToggle}>
            ui/ux design
          </Link>
        </li>
        {/**
        <li>
          <Link to="/GraphicDesign" onClick={handleToggle}>
            graphic design
          </Link>
        </li>
        */}
        {/*}
        <li>
          <Link to="/Contact" onClick={handleToggle}>
            contact
      </Link>
        </li>*/}
      </ul>
    </nav>
  );
}
