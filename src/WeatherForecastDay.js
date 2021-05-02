import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <ul>
        <li>{day()}</li>
        <li>
          <WeatherIcon code={props.data.weather[0].icon} size={53} />
        </li>
        <li>
          <span className="forecast-temp-max">{maxTemperature()}</span>
          <span className="forecast-temp-min">{minTemperature()}</span>
        </li>
      </ul>
    </div>
  );
}
