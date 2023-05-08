import { useState } from "react";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <div className="feature">
        <img src={icon1} alt="Declarative" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="feature">
        <img src={icon2} alt="Components" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="feature">
        <img src={icon3} alt="Single-Way" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="feature">
        <img src={icon4} alt="JSX" />
        <h2>JSX</h2>
        <p>Statically-typed, design to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Card;
