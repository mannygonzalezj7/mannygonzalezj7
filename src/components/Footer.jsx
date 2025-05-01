import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-head">manuel gonzalez jimenez</p>
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/SoftwareDevelopment">software development</Link>
          </li>
          <li>
            <Link to="/UIUX">ui/ux</Link>
          </li>
          {/**
          <li>
            <Link to="/GraphicDesign">graphic design</Link>
          </li>
           */}
          {/*}
          <li>
            <Link to="/Contact">contact</Link>
  </li>*/}
        </ul>
      </div>
      <div className="footer-icons">
        <SocialIcon
          className="linkedin"
          bgColor="white"
          fgColor="black"
          target="_blank"
          url="https://www.linkedin.com/in/manuelgonzalezj/"
        />
        <SocialIcon
          className="linkedin"
          bgColor="white"
          fgColor="black"
          target="_blank"
          url="https://github.com"
        />
      </div>
    </div>
  );
}

export default Footer;
