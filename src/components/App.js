import React, { useContext } from "react";
import CityName from "./CityName";
import DayWeather from "./DayWeather";
import CityInput from "./CityInput";
import UnitToggler from "./UnitToggler";
import { WeatherContext } from "./appContext";

const App = () => {
  const appContext = useContext(WeatherContext);
  const { loading } = appContext;
  return (
    <div id="weatherApp"><div class='wrapper'>
      {loading ? (
        <h1 className="text-center">.......loading......</h1>
      ) : (
        <div>
          <header>
            <CityInput />
            <UnitToggler />
          </header>
          {!appContext.errorMessage ? (
            <>
              <CityName />
              <DayWeather day="0" />
              <div className="forecast">
                <DayWeather day="8" />
                <DayWeather day="16" />
                <DayWeather day="24" />
              </div>
            </>
          ) : (
            <h3>Sorry, no results have been found for {appContext.city}</h3>
          )}
        </div>
      )}
    </div></div>
  );
};

export default App;
