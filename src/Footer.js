import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Coded by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MateaZerjav"
        >
          Matea Zerjav
        </a>
        , is{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MateaZerjav/react-weather-app-project"
        >
          open-sourced on GitHub{" "}
        </a>
        and hosted
        <a
          target="_blank"
          rel="noreferrer"
          href="https://master--stupendous-alpaca-4c667b.netlify.app/"
        >
          {" "}
          Netlify.
        </a>
      </p>
    </div>
  );
}
