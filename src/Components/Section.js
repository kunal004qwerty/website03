import React from "react";
import "./Style/Section.scss";
import man from "./Assets/man.png";

const Section = () => {
  return (
    <div>
      <section className="main-section">
        <div className="container">
          <div className="texts">
            <h1>Hello My Name is</h1>
            <h2 className="h1-big">Andrew Herkel</h2>
            <p>
              Professional Front-End React js Developer with 5 years of
              experience and 3 years in the same position
            </p>
            <button className="text-button">My Work</button>
          </div>

          <div className="image">
            <img src={man} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
