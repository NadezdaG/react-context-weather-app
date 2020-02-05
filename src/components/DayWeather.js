import React, {useContext, useEffect} from "react"
import '../styles/DayWeather.scss';
import {AppContext} from "./appContext";


function DayWeather(props) {
		const context = useContext(AppContext);
		let imageName = "w-2" // default image name

		if ((context.appData.mainid===800)||(context.appData.mainid===801)||(context.appData.mainid===802)||(context.appData.mainid===803)) {
			// set image depending on code
			imageName = "w-"+context.appData.mainid;
		} else {
			// set image if not full code found
			imageName = "w-"+String(context.appData.mainid).split("")[0];
		}

		//Starrting app:
		useEffect(() => {
		  context.loadData("start")
		},[context.appData.units]); // to load data only once


		return (
			<div className="weatherApp__card">
				<figure><img src={process.env.PUBLIC_URL + '/assets/images/' + imageName + '.png'} alt="" /><br />{context.appData.main}</figure>
				<div class="weatherApp__card__content">
					<div className="weatherApp__card__temp">{Math.round(context.appData.temp)} &#176; {context.appData.units==="metric"?"C":"F"}</div>
					<div className="weatherApp__card__feelslike">Feels like: {Math.round(context.appData.feelsLike)} &#176; {context.appData.units==="metric"?"C":"F"}</div>
			  </div>
			</div>
		)
}



export default DayWeather;