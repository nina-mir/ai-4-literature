import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        All rights reserved. This Website was developed by Esteban Corrales{" "}
      </p>
      <section className="footerSocials">
        <a href="https://github.com/Ecorralesz" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="gitHubIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-esteban-corrales-zamora-3372b420a/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
