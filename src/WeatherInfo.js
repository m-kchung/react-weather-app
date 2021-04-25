import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
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
          <button className="btn btn-primary">ºC</button>
          <button className="btn btn-outline-primary">ºF</button>
        </div>
      </div>
      <div className="forecast">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <h1>{Math.round(props.data.temperature)}ºC</h1>
        <h3 className="text-capitalize">{props.data.description}</h3>
      </div>
      <div className="weatherDetails">
        <div className="row detailsRow">
          <div className="col-4 colFormatting colBorder">
            <h5>{Math.round(props.data.wind)}km/h</h5>
            <p>Wind</p>
          </div>
          <div className="col-4 colFormatting colBorder">
            <h5>{props.data.humidity}%</h5>
            <p>Humidity</p>
          </div>
          <div className="col-4">
            <h5>{Math.round(props.data.feelsLike)}ºC</h5>
            <p>Feels Like</p>
          </div>
        </div>
      </div>
    </div>
  );
}
