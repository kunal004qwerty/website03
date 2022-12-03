import React from "react";
import "./Style/Testimonials.scss";
import t1 from "./Assets/t1.jpg";
import t2 from "./Assets/t2.jpg";
import t3 from "./Assets/t3.jpg";

const Testimonials = () => {
  return (
    <div>
      <section className="testi">
        <h1>Testimonials</h1>

        <div className="card-container">
          <div className="card">
            <img src={t1} alt="" />
            <p>Larry H</p>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              praesentium cum repudiandae dignissimos, voluptatem similique ex
              temporibus explicabo, reprehenderit odit ab dolore vel, suscipit
              quasi. Culpa omnis aperiam ullam nobis.
            </h5>
          </div>

          <div className="card">
            <img src={t2} alt="" />
            <p>Larry H</p>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              praesentium cum repudiandae dignissimos, voluptatem similique ex
              temporibus explicabo, reprehenderit odit ab dolore vel, suscipit
              quasi. Culpa omnis aperiam ullam nobis.
            </h5>
          </div>

          <div className="card">
            <img src={t3} alt="" />
            <p>Larry H</p>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              praesentium cum repudiandae dignissimos, voluptatem similique ex
              temporibus explicabo, reprehenderit odit ab dolore vel, suscipit
              quasi. Culpa omnis aperiam ullam nobis.
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
