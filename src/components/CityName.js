import React, { useContext, useEffect } from "react";
//import '../styles/DayWeather.scss';
import { WeatherContext } from "./appContext";

function CityName() {
  const appContext = useContext(WeatherContext);
  return (
    <div className="weatherApp__city">
      <h2>Current weather</h2>
      <h1>{appContext.weather.city.name}</h1>
    </div>
  );
}

export default CityName;
