import React, {useContext, useEffect} from "react"
//import '../styles/DayWeather.scss';
import {AppContext} from "./appContext";


function CityName(props) {
const context = useContext(AppContext);

return (

				<div className="weatherApp__city">
					<h2>Current weather</h2> 
					<h1>{context.appData.name}</h1>
				</div>

			)
}



export default CityName;