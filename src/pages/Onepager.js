import React from "react";
import Card_ from "../components/Card";

function Onepager() {
  return (
    <div>
      <div>My Onepager page</div>

      <div id="about">
        <h2>About</h2>
        <p>Info on the way</p>
      </div>

      <div id="projects">
        <h2>Projects</h2>
        <Card_ title="Semester Project 2" description="This is the first card" />
        <Card_ title="JavaScript Frameworks CA" description="This is the second card" />
        <Card_ title="Project Exam 2" description="This is the third card" />
      </div>

      <div id="contact">
        <h2>Contact</h2>
        <p>LinkedIn, Github, Discord</p>
      </div>
    </div>
  );
}

export default Onepager;
