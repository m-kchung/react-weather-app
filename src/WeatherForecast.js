import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <ul className="forecastMenu">
        <li className="forecastMenuButton">
          <span className="forecastActive">Today</span>
        </li>
        <li className="forecastMenuButton">
          <span className="forecastInactive">Next 5 days</span>
        </li>
      </ul>

      <div className="WeatherForecastSection">
        <div className="row">
          <div className="col">
            <ul>
              <li>Sun</li>
              <li>
                <WeatherIcon code="01d" size="60" />
              </li>
              <li>12ºC</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Mon</li>
              <li>
                <WeatherIcon code="01d" size="60" />
              </li>
              <li>12ºC</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Tue</li>
              <li>
                <WeatherIcon code="01d" size="60" />
              </li>
              <li>12ºC</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Wed</li>
              <li>
                <WeatherIcon code="01d" size="60" />
              </li>
              <li>12ºC</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Thu</li>
              <li>
                <WeatherIcon code="01d" size="60" />
              </li>
              <li>12ºC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
