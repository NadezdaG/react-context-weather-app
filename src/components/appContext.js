import React, { Component, createContext, useEffect } from 'react'

export const AppContext = createContext()

//572cbdc18f6f1a1a8e3d659a5639cd1d
//44cc22073a3eaf46a220bb8ddffa8517

class AppContextProvider extends Component {

	//default state
   state = {
  	  units: "metric",
			name: "London",
			temp: "loading...",
			feelsLike: 'loading...',
			main: "loading...",
			mainid: "",
			description: "loading..."
  }

  // load data method
  loadData = () => {

  const apiKey = "572cbdc18f6f1a1a8e3d659a5639cd1d";
  const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.name+"&units="+this.state.units+"&APPID="+apiKey

	  // take data and move to the state
    fetch(weatherURL)
	    .then(res => res.json())
	    .then(data => {
		    console.log(data);
				 this.setState({
				  	name: data.name,
						temp: data.main.temp,
						feelsLike: data.main.feels_like,
						main: data.weather[0].main,
						mainid:data.weather[0].id,
						description: data.weather[0].description	  	
				  })
	    }).catch(function(message) {
        console.log(message);
    });

  }

  // toggle units
  toggleUnits = () => {
  	let newUnits = this.state.units==="metric" ? "imperial" : "metric"
    this.setState({
    	units: newUnits
    }
  );
  };

  getLocation(){

    // Get the current position of the user
    
   }

render () {
  return (
    <AppContext.Provider value={{ appData: this.state, toggleUnits: this.toggleUnits, loadData: this.loadData }}>
        {this.props.children}
    </AppContext.Provider>
  )
}
}

export default AppContextProvider 
