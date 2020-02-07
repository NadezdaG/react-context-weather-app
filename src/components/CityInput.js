import React, {useContext, useState} from "react"
import '../styles/CityInput.scss';
import { WeatherContext } from "./appContext";

// Initial city list:
const initialCityList = [];

const CityInput = (props) => {
		const appContext = useContext(WeatherContext)
		const [cities, setCities] = useState(initialCityList);

		//on type the text into the field - search the API
		const onChange = inputText => {
			 // select capital cities from the API
		   fetch("https://restcountries.eu/rest/v2/all")
		            .then((res) => res.json())
		            .then(data => {
		                if (data) {
		                    let regex = new RegExp(inputText, 'i')
		                    // filter cities and set new list
		                    setCities(data.map((city) => city.capital).filter((city) => city.match(regex)));
		                }
		            }).catch(function(message) {
		                console.log(message);
		            });
		}

		return (

						<div className="cityInput">
							<input id="cityNameInput" autoComplete="off" placeholder="Type your city" type="text" name='city' onChange={(e)=>onChange(e.target.value)}  />
			        <ul className="cityContainer">
				        {cities.map((item,index) => (
				          <li key={index} onClick={(e) => appContext.handleCityChange(item)}>{item}</li>
				        ))}
			        </ul>
						</div>

		)
}

//				          {(e) => handleSearchChange(e)} <li key={index} onClick={(e)=>{setCities([]);document.getElementById("cityNameInput").value="";changeCity("RIGA")}} >{item}</li>


export default CityInput;