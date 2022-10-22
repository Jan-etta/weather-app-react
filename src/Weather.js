import "./styles.css";
import React from "react";
import Search from "./Search";
import CurrentDay from "./CurrentDay";
export default function Weather() {
  return (
    <div className="Weather container">
      <h1>What's the Weather</h1>
      
        
          <Search />
        
       
      
      <div className="five-day-forecast row">
        <div className="five-day-forecast col-8"></div>
        <div className="current-location col-4"></div>
      </div>
      <br />
    </div>
  );
}
