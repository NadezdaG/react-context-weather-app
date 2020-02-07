import React, {useContext, useState} from "react"
import '../styles/DayWeather.scss';
import {AppContext} from "./appContext";


function WeatherPanel(props) {
  const [weatherData, setWeatherData] = useState([])
  //const appContext = AppContext()

		//Starrting app:
		/*
		useEffect(() => {
		  context.loadData("start")
		},[context.appData.units]); // to load data only once
*/
/*
    //setting the right data
    console.log(context.weatherToday);
    if (Number(props.day)===0) {console.log('a0');showDate = context.weatherToday}
    else if (Number(props.day)===1) {console.log('a1');showDate = context.weatherTomorrow}
    else if (Number(props.day)===2) {console.log('a2');showDate = context.weatherInTwoDays}
    else if (Number(props.day)===3) {console.log('a3');showDate = context.weatherInThreeDays}


    console.log("test")
    console.log(showDate)

		// Setting the image
		let imageName = "w-2" // default image name

		if ((context.appData.mainid===800)||(context.appData.mainid===801)||(context.appData.mainid===802)||(context.appData.mainid===803)) {
			// set image depending on code
			imageName = "w-"+context.appData.mainid;
		} else {
			// set image if not full code found
			imageName = "w-"+String(context.appData.mainid).split("")[0];
		}
*/

		return (
			<div className="">

			</div>
		)
/*
		return (
			<div className="">
					<DayWeather day="0" />
						<div className="forecast">
							 <DayWeather day="1" />
							 <DayWeather day="2" />
							 <DayWeather day="3" />
						</div>
			</div>
		)
		*/
}



export default WeatherPanel;