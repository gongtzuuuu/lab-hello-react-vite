import { useState } from "react";
import reaatLogo from "./assets/react.svg";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuIcon from "./assets/menu-top-xs.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#">
          <img
            src={ironhackLogo}
            className="ironhackLogo"
            alt="Ironhack logo"
          />
        </a>
        <a href="#">
          <img src={menuIcon} className="menuIcon" alt="Menu icon" />
        </a>
      </nav>
      <div className="banner-texts">
        <h1 className="banner-heading">
          Say hello to
          <br />
          ReactJS
        </h1>
        <h3>
          You will learn how to use the most popular forntend library, <br />
          and become a super Nunja dveloper.
        </h3>
        <button className="banner-button">Awesome!</button>
      </div>
    </div>
  );
}

export default App;
