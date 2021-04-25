import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";

export default function WeatherInfo(props) {
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
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-9">
            <h1>{props.data.city}</h1>
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
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <h1>{Math.round(props.data.temperature)}ºC</h1>
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
        <WeatherDetails details={props.data} unit={unit} />
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-9">
            <h1>{props.data.city}</h1>
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
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <h1>{Math.round(fahrenheit())}ºF</h1>
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
        <WeatherDetails details={props.data} unit={unit} />
      </div>
    );
  }
}
