import "./styles.css";
import React from "react";
import Search from "./Search";
export default function Weather() {
  return (
    <div className="Weather container">
      <h1>What's the Weather</h1>
      <div className="row">
        <div className="col-8">
          <Search />
        </div></div>
      
      <br />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Jan-etta/weather-app-react">
        Coded by Jan-etta{" "}
      </a>
    </div>
  );
}
