import React from "react";
import "./Style/Second.scss";
import project from "./Assets/project.jpg";

const Second = () => {
  return (
    <div>
      <section className="section-2">
        <h1 className="about-me">About Me</h1>

        <div className="container-2">
          <div className="img-cont">
            <img src={project} alt="" />
          </div>

          <div className="text-2">
            <p>Front-End Developer</p>
            <p>React js & Nodejs Developer</p>
            <p>UI & UX Designer</p>
            <p>MERN Stack Developer</p>
            <p>Worked for Google,Facebook,Amazon</p>
            <p>5 years of Developer Experience</p>
            <p>Good Management ,Communication</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Second;
