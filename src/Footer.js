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
        <a target="_blank" rel="noreferrer" href="/">
          open-sourced on GitHub{" "}
        </a>
        and hosted
        <a target="_blank" rel="noreferrer" href="/">
          {" "}
          Netlify.
        </a>
      </p>
    </div>
  );
}
