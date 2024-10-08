import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by{" "}
          <a
            href=" https://github.com/mashudutshifura"
            target="_blank"
            rel="noreferrer"
          >
            Mashudu Tshifura
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/mashudutshifura/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://phenomenal-mooncake-5c7aef.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
