import "./styles.css";
import React from "react";
import Search from "./Search";
export default function Weather() {
  return (
    <div className="container-fluid">
      <h1>What's the Weather</h1>

      <Search />
    </div>
  );
}
