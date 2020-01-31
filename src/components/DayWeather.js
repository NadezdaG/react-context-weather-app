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

useEffect(() => {
  console.log('use effect');
  context.loadData(context.appData.units)
},[context.appData.units]); // to load data only once




return (

				<div className="weatherCard">
					<h2>Current weather</h2> 
					<h1>{context.appData.name}</h1>
					<figure><img src={process.env.PUBLIC_URL + '/assets/images/' + imageName + '.png'} /></figure>
					{context.appData.main}
					<p className="weatherCard__temp">{Math.round(context.appData.temp)} &#176; {context.appData.units=="metric"?"C":"F"}</p>
					<p className="weatherCard__feelslike">Feels like: {Math.round(context.appData.feelsLike)} &#176; {context.appData.units=="metric"?"C":"F"}</p>
				</div>

			)
}



export default DayWeather;