import React from 'react';
import DayWeather from './DayWeather';
import UnitToggler from './UnitToggler';
import CityInput from './CityInput';
import CityName from './CityName';
//import CitySelector from './CitySelector';

import AppContextProvider from "./appContext";

class App extends React.Component {
	render() {
	return (
		<AppContextProvider>
			<div id="weatherApp">
			  <header>
				  <CityInput />
				  <UnitToggler />
			  </header>
			  <CityName />
				<DayWeather day="0" />
				<div className="forecast">
					 <DayWeather day="1" />
					 <DayWeather day="2" />
					 <DayWeather day="3" />
				</div>
			</div>
		</AppContextProvider>
		)
}
}

export default App;

