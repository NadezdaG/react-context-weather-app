import React, { useState, useEffect } from "react";

//572cbdc18f6f1a1a8e3d659a5639cd1d
//44cc22073a3eaf46a220bb8ddffa8517

const WeatherContext = React.createContext();
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherProvider = props => {
  // set state for weather forecast data
  const [weather, setWeather] = useState({});
  // state for loading
  const [loading, setLoading] = useState(true);
  // state for units
  const [units, setUnits] = useState("metric");
  //state for city
  const [city, setCity] = useState("London");

  const [selectedCities, setSelectedCities] = useState([]);

  const [cities, setCities] = useState([]);

  const [errorMessage, setErrorMessage] = useState(false);

  // function to change units and reload data from API
  const unitToggler = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
    setLoading(true);
  };

  const handleCityChange = newCity => {
    setCity(newCity);
    setLoading(true);
    setSelectedCities([]);
  };

  // function to upload data from API
  const uploadData = async () => {
    var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&APPID=${apiKey}`;

    fetch(weatherURL)
      .then(res => {
        if (res.status !== 200) return;
        else {
          return res.json();
        }
      })
      .then(data => {
        if (data) {
          setWeather(data);
          setLoading(false);
          setErrorMessage(false);
        } else {
          setLoading(false);
          console.log(city);
          setErrorMessage(true);
        }
      })
      .catch(function(message) {
        console.log(message);
        setLoading(false);
      });
  };

  const getCities = _ => {
    // select capital cities from the API
    localStorage.getItem("cities")
      ? setCities(JSON.parse(localStorage.getItem("cities")))
      : fetch("https://restcountries.eu/rest/v2/all")
          .then(res => res.json())
          .then(data => {
            if (data) {
              const cities = data.map(city => city.capital);
              setCities(cities);
              localStorage.setItem("cities", JSON.stringify(cities));
            }
          })
          .catch(function(message) {
            console.log(message);
          });
  };

  //initial data load + update data when units or city changed
  useEffect(() => {
    uploadData();
    getCities();
  }, [units, city]);

  // pass data to provider to use in the apps
  return (
    <WeatherContext.Provider
      value={{
        weather,
        city,
        loading,
        units,
        unitToggler,
        uploadData,
        handleCityChange,
        cities,
        selectedCities,
        setSelectedCities,
        errorMessage
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
