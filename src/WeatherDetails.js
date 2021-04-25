import React from "react";

export default function WeatherDetails(props) {
  function fahrenheit() {
    return (props.details.feelsLike * 9) / 5 + 32;
  }
  if (props.unit === "celsius") {
    return (
      <div className="weatherDetails">
        <div className="row detailsRow">
          <div className="col-4 colFormatting colBorder">
            <h5>{Math.round(props.details.wind)}km/h</h5>
            <p>Wind</p>
          </div>
          <div className="col-4 colFormatting colBorder">
            <h5>{props.details.humidity}%</h5>
            <p>Humidity</p>
          </div>
          <div className="col-4">
            <h5>{Math.round(props.details.feelsLike)}ºC</h5>
            <p>Feels Like</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weatherDetails">
        <div className="row detailsRow">
          <div className="col-4 colFormatting colBorder">
            <h5>{Math.round(props.details.wind)}km/h</h5>
            <p>Wind</p>
          </div>
          <div className="col-4 colFormatting colBorder">
            <h5>{props.details.humidity}%</h5>
            <p>Humidity</p>
          </div>
          <div className="col-4">
            <h5>{Math.round(fahrenheit())}ºF</h5>
            <p>Feels Like</p>
          </div>
        </div>
      </div>
    );
  }
}
