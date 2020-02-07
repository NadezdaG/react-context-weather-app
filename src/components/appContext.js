import React, { useState, useEffect } from "react";

//572cbdc18f6f1a1a8e3d659a5639cd1d
//44cc22073a3eaf46a220bb8ddffa8517

const WeatherContext = React.createContext();
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  

const WeatherProvider = (props) => {
	// set state for weather forecast data
	const [weather, setWeather] = useState([])
	// state for loading 
  const [loading, setLoading] = useState(true)
  // state for units
  const [units, setUnits] = useState('metric')
  //state for city
  const [city, setCity] = useState("London")

  // function to change units and reload data from API
  const unitToggler = () => {
  	setUnits((units==="metric")?"imperial":"metric");
  	setLoading(true)
  	uploadData()
  }

  const handleCityChange = (newCity) => {
  	console.log('city change')
  	console.log(city)
  	setCity(newCity)
  	setLoading(true)
  	uploadData()
  	console.log(city)
  }

  // function to uplad data from API
  const uploadData = () => {
  	console.log('load new data city' + city)
  	console.log('load new data units' + units)
  	var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&APPID=${apiKey}`;

		fetch(weatherURL)
      .then(res => {
        if (res.status != "200") return;
        else {
          return res.json();
        }
      })
      .then(data => {
        if (data) {
          setWeather(data)
          setLoading(false)
        }
      })
      .catch(function(message) {
        console.log(message);
      });
/*
    try {
      const weatherData = await fetch(weatherURL)
      const { weather } = await weatherData.json()
      setWeather(weather)
      console.log(weather)
    } catch (e) {
      if (e) {
        console.log(e.message, 'Try updating the API key in App.js')
      }
    }
    */
  }

  //initial data load
  useEffect(() => {
    uploadData()
  }, [])

  // pass data to provider to use in the apps
  return (
    <WeatherContext.Provider value={{ weather, city, loading, units, unitToggler, uploadData, handleCityChange}}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
