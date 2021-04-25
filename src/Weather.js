import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
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
            <h1>{weatherData.city}</h1>
            <h4>
              <FormattedDate date={weatherData.date} />
            </h4>
          </div>
          <div className="col-3">
            <button className="btn btn-primary">ºC</button>
            <button className="btn btn-outline-primary">ºF</button>
          </div>
        </div>
        <div className="forecast">
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <h1>{Math.round(weatherData.temperature)}ºC</h1>
          <h3 className="text-capitalize">{weatherData.description}</h3>
        </div>
        <div className="weatherDetails">
          <div className="row detailsRow">
            <div className="col-4 colFormatting colBorder">
              <h5>{Math.round(weatherData.wind)}km/h</h5>
              <p>Wind</p>
            </div>
            <div className="col-4 colFormatting colBorder">
              <h5>{weatherData.humidity}%</h5>
              <p>Humidity</p>
            </div>
            <div className="col-4">
              <h5>{Math.round(weatherData.feelsLike)}ºC</h5>
              <p>Feels Like</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5a9b3c5051ae04b7172dded8be3de831";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
