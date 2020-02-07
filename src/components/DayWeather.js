import React, { useContext, useEffect } from "react";
import "../styles/DayWeather.scss";
import { WeatherContext } from "./appContext";

function DayWeather(props) {
  const appContext = useContext(WeatherContext);
  const showDate = appContext.weather.list[props.day];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // Setting the image
  let imageName = "w-2"; // default image name

  if (
    showDate.weather[0].id === 800 ||
    showDate.weather[0].id === 801 ||
    showDate.weather[0].id === 802 ||
    showDate.weather[0].id === 803
  ) {
    // set image depending on code
    imageName = "w-" + showDate.weather[0].id;
  } else {
    // set image if not full code found
    imageName = "w-" + String(showDate.weather[0].id).split("")[0];
  }

  const date = new Date(showDate.dt * 1000);

  return (
    <div className="weatherApp__card">
      {props.day !== "0" ? days[date.getDay()] : ""}
      <figure>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/" + imageName + ".png"}
          alt=""
        />
        <br />
        {showDate.weather[0].main}
      </figure>
      <div className="weatherApp__card__content">
        <div className="weatherApp__card__temp">
          {Math.round(showDate.main.temp)} &#176;{" "}
          {appContext.units === "metric" ? "C" : "F"}
        </div>
        <div className="weatherApp__card__feelslike">
          Feels like: {Math.round(showDate.main.feels_like)} &#176;{" "}
          {appContext.units === "metric" ? "C" : "F"}
        </div>
      </div>
    </div>
  );
}

export default DayWeather;
