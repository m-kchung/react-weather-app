import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTodayDetails from "./WeatherTodayDetails";
import WeatherForecast from "./WeatherForecast";

export default function WeatherToday(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.data.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherToday">
        <div className="row">
          <div className="col-9">
            <h1>
              {props.data.city}, {props.data.country}
            </h1>
            <h4>
              <FormattedDate date={props.data.date} />
            </h4>
          </div>
          <div className="col-3">
            <button className="btn unitButton activeButton">ºC</button>
            <button
              className="btn unitButton notActiveButton"
              onClick={convertToFahrenheit}
            >
              ºF
            </button>
          </div>
        </div>
        <div className="forecast">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={120}
            color="#5B5B5B"
          />
          <h1>{Math.round(props.data.temperature)}ºC</h1>
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
        <WeatherTodayDetails details={props.data} unit={unit} />
        <WeatherForecast coordinates={props.data.coordinates} unit={unit} />
      </div>
    );
  } else {
    return (
      <div className="WeatherToday">
        <div className="row">
          <div className="col-9">
            <h1>
              {props.data.city}, {props.data.country}
            </h1>
            <h4>
              <FormattedDate date={props.data.date} />
            </h4>
          </div>
          <div className="col-3">
            <button
              className="btn unitButton notActiveButton"
              onClick={convertToCelsius}
            >
              ºC
            </button>
            <button className="btn unitButton activeButton">ºF</button>
          </div>
        </div>
        <div className="forecast">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={120}
            color="#5B5B5B"
          />
          <h1>{Math.round(fahrenheit())}ºF</h1>
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
        <WeatherTodayDetails details={props.data} unit={unit} />
        <WeatherForecast coordinates={props.data.coordinates} unit={unit} />
      </div>
    );
  }
}
