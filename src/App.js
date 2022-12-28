import React from "react";
import "./styles.css";




export default function App() {
  let appData = {
    city: "Kyiv",
    temperature: 10,
    date: "Monday 2am",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form class="search-form" id="search-form">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Your city..."
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                  class="form-control"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="form-control btn btn-light shadow"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1> {appData.city} </h1>
            <ul>
              <li>
                <li>Last updated: {appData.date}</li>
              </li>
              <li>{appData.description}</li>
            </ul>
            <div class="row">
              <div class="col-4">
                <strong>{appData.temperature}</strong>
                <span class="units" />
                <a href="/">°C</a> | <a href="/">°F</a>
              </div>
            </div>
            <div class="col-4">
              <img
                src={appData.imgUrl}
                alt={appData.description}
                className="float-left"
              />
            </div>
            <div class="col-4">
              <ul>
                <li>Humidity: {appData.humidity}%</li>
                <li>Wind: {appData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <small>
          <a
            href=" https://github.com/Ana-stasiiaa/weatherapp.git"
            target="_blank"
          >
            Open-source code
          </a>
          by Anastasiia
        </small>
      </div>
    </div>
  );
}
