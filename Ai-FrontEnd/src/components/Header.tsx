import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="headerContainer">
        <a href="https://github.com/nina-mir/ai-4-literature" target="_blank">
          <Button className="aboutButton">
            About
            <FontAwesomeIcon icon={faGithub} className="gitHubIcon" />
          </Button>
        </a>
        <aside>
          <p>AI for Literature powered by Google Vertex</p>
          <p>lablab.ai hackathon (July 2023)</p>
        </aside>
      </section>
    </>
  );
};

export default Header;
