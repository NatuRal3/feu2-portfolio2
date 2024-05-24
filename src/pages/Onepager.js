import React from "react";
import Card_ from "../components/Card";
import semesterProjectImage from "../images/semester-project-2.png";
import javascriptFrameworksImage from "../images/js-frameworks.png";
import projectExamImage from "../images/exam-2.png";

function Onepager() {
  return (
    <div>
      <h1>Marius Agerup Schei</h1>

      <div id="cont intro">
        <p>Welcome to my simple portfolio page</p>
      </div>

      <div id="cont Skills">
        <h2>
          <i class="bi bi-code">
            Skills <i class="bi bi-code-slash"></i>
          </i>
        </h2>
        <i class="bi bi-filetype-html"></i>
        <i class="bi bi-filetype-css"></i>
        <i class="bi bi-filetype-scss"></i>
        <i class="bi bi-filetype-md"></i>
        <i class="bi bi-filetype-js"></i>
        <i class="bi bi-filetype-tsx"></i>
        <i class="bi bi-filetype-jsx"></i>
        <i class="bi bi-filetype-yml"></i>
        <i class="bi bi-filetype-json"></i>
        <i class="bi bi-filetype-xml"></i>
        <i class="bi bi-git"></i>
        <i class="bi bi-wordpress"></i>

        <p>Adobe XD - Cypress - API</p>
      </div>

      <div id="cont projects">
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

      <div id="contact">
        <h2>Contact</h2>
        <p>LinkedIn, Github, Discord</p>
      </div>
    </div>
  );
}

export default Onepager;
