import React, { useContext, useState } from "react";
import "../styles/CityInput.scss";
import { WeatherContext } from "./appContext";

// Initial city list:

const CityInput = props => {
  const appContext = useContext(WeatherContext);

  //on type the text into the field - search the API
  const onChange = inputText => {
    // select capital cities from the API
    let regex = new RegExp(inputText, "i");
    appContext.setSelectedCities(
      appContext.cities.filter(city => city.match(regex))
    );
    //filter cities and set new list
    // appContext.setCities(appContext.cities.filter(city => city.match(regex)));
  };

  return (
    <div className="cityInput">
      <input
        id="cityNameInput"
        autoComplete="off"
        placeholder="Type your city"
        type="text"
        name="city"
        onChange={e => onChange(e.target.value)}
      />
      <ul className="cityContainer">
        {appContext.selectedCities &&
          appContext.selectedCities.map((item, index) => (
            <li key={index} onClick={e => appContext.handleCityChange(item)}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CityInput;
