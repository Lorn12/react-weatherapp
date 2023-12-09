import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded my{" "}
          <a
            href="https://www.shecodes.io/graduates/76312-lauren-wooten"
            target="_blank"
            rel="noreferrer noopener"
          >
            Lauren Wooten{" "}
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Lorn12/react-weatherapp"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
