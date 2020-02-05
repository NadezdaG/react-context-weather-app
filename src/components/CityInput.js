import React, {useContext, useState} from "react"
import '../styles/CityInput.scss';
import {AppContext} from "./appContext";

// Initial city list:
const initialCityList = [];

const CityInput = (props) => {
		const context = useContext(AppContext);
		const [cities, setCities] = useState(initialCityList);

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
							<input id="cityNameInput" autocomplete="off" placeholder="Type your city" type="text" name='city' onChange={(e)=>onChange(e.target.value)}  />
			        <ul className="cityContainer">
				        {cities.map(item => (
				          <li key={item} onClick={(e)=>{setCities([]);document.getElementById("cityNameInput").value="";context.loadData(item)}} >{item}</li>
				        ))}
			        </ul>
						</div>

		)
}



export default CityInput;