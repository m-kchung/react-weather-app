import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="searchSection">
        <span className="searchForm">
          <form>
            🔍
            <input
              type="text"
              placeholder="Enter a City"
              autoComplete="off"
              className="searchBar"
            />
          </form>
        </span>
        📍
      </div>
      <div className="row">
        <div className="col-9">
          <h1>London</h1>
          <h4>Sunday 14:00</h4>
        </div>
        <div className="col-3">
          <button className="btn btn-primary">ºC</button>
          <button className="btn btn-outline-primary">ºF</button>
        </div>
      </div>
      <div className="forecast">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="cloudy"
        />
        <h1>5ºC</h1>
        <h3>Cloudy</h3>
      </div>
      <div className="weatherDetails">
        <div className="row detailsRow">
          <div className="col-4 colFormatting colBorder">
            <h5>4km/h</h5>
            <p>Wind</p>
          </div>
          <div className="col-4 colFormatting colBorder">
            <h5>60%</h5>
            <p>Humidity</p>
          </div>
          <div className="col-4">
            <h5>7ºC</h5>
            <p>Feels Like</p>
          </div>
        </div>
      </div>
    </div>
  );
}
