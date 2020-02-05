import React from 'react';
import DayWeather from './DayWeather';
import UnitToggler from './UnitToggler';
import CityInput from './CityInput';
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
				<DayWeather />
			</div>
		</AppContextProvider>
		)
}
}

export default App;

