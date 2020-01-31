import React from 'react';
import DayWeather from './DayWeather';
import UnitToggler from './UnitToggler';
//import CitySelector from './CitySelector';

import AppContextProvider from "./appContext";

class App extends React.Component {
	render() {
	return (
		<AppContextProvider>
			<div id="weatherApp">
			  <UnitToggler />
				<DayWeather />
			</div>
		</AppContextProvider>
		)
}
}

export default App;

