import React, {useContext} from "react"
import CityName from './CityName' 
import DayWeather from './DayWeather'
import CityInput from './CityInput'
import UnitToggler from './UnitToggler'
import { WeatherContext } from "./appContext";


const App = () => {
   const appContext = useContext(WeatherContext)
   const { loading } = appContext
   console.log(appContext)
  return (
    <div id="weatherApp">
       {loading ? <h1 className="text-center">.......loading......</h1> :
        <div>
	        <header><CityInput /><UnitToggler /></header>
	        <CityName />
	        <DayWeather day="0" />
	        <div className="forecast">
							 <DayWeather day="8" />
							 <DayWeather day="16" />
							 <DayWeather day="24" />
					</div></div>
        }
    </div>
  );
}

export default App;
