import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="text" placeholder="Enter a City" />
        <input type="submit" value="Search" />
      </form>

      <div className="row">
        <div className="col-9">
          <h1>London</h1>
          <h3>Sunday 14:00</h3>
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
        <div className="row">
          <div className="col-4">
            <ul>
              <li>4km/h</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>60%</li>
              <li>Humidity</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>7ºC</li>
              <li>Feels Like</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
