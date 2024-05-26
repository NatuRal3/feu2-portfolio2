import React from "react";
import Card_ from "../components/Card";
import semesterProjectImage from "../images/semester-project-2.png";
import javascriptFrameworksImage from "../images/js-frameworks.png";
import projectExamImage from "../images/exam-2.png";

function Onepager() {
  return (
    <div>
      <div className="cont name"></div>
      <h1>Marius Agerup Schei</h1>

      <div className="cont intro">
        <p>Welcome to my simple portfolio page</p>
        <p>Currently working as a business application consultant and inhouse developer</p>
      </div>
      <div className="cont contact">
        <h2>Contact</h2>
        <div>
          <a href="https://github.com/NatuRal3" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"> /NatuRal3</i>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mariusschei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-linkedin"> /mariusschei</i>
          </a>
        </div>
        <div>
          <a
            href="https://discord.com/users/318457989440733184"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-discord"> /natural8976</i>
          </a>
        </div>
      </div>

      <div className="cont projects">
        <h2>Projects</h2>
        <Card_
          image={semesterProjectImage}
          title="Semester Project 2"
          text="Auction site for art pieces."
          github="https://github.com/NatuRal3/feu-2-semesterproject-2"
          visit="https://mas-semesterproject2.netlify.app/"
        />
        <Card_
          image={javascriptFrameworksImage}
          title="JavaScript Frameworks"
          text="Webshop for a fictional brand."
          github="https://github.com/NatuRal3/feu2-js-frameworks-ca"
          visit="https://mas-feu2-js-frameworks-ca.netlify.app/"
        />
        <Card_
          image={projectExamImage}
          title="Project Exam 2"
          text="Fictional twitter/instagram hybrid."
          github="https://github.com/Noroff-FEU-Assignments/project-exam-2-NatuRal3"
          visit="https://marius-exam2.netlify.app"
        />
      </div>
    </div>
  );
}

export default Onepager;
