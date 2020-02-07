import React, { useState, useContext } from "react"
import ReactDOM from 'react-dom'
import App from './components/App' 

import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';



//import WeatherPanel from './WeatherPanel';
//import UnitToggler from './UnitToggler';
//import CityInput from './CityInput';
//import CityName from './components/CityName';
//import CitySelector from './CitySelector';
import { WeatherProvider } from "./components/appContext";

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
