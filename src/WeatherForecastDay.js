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

  function maxFahrenheit() {
    let celsius = props.data.temp.max;
    let fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return `${fahrenheit}º`;
  }

  function minFahrenheit() {
    let celsius = props.data.temp.min;
    let fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return `${fahrenheit}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherForecastDay">
        <ul>
          <li>{day()}</li>
          <li>
            <WeatherIcon
              code={props.data.weather[0].icon}
              size={53}
              color="#838383"
            />
          </li>
          <li>
            <span className="forecast-temp-max">{maxTemperature()}</span> |
            <span className="forecast-temp-min">{minTemperature()}</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="WeatherForecastDay">
        <ul>
          <li>{day()}</li>
          <li>
            <WeatherIcon
              code={props.data.weather[0].icon}
              size={53}
              color="#838383"
            />
          </li>
          <li>
            <span className="forecast-temp-max">{maxFahrenheit()}</span>
            <span className="forecast-temp-min">{minFahrenheit()}</span>
          </li>
        </ul>
      </div>
    );
  }
}
