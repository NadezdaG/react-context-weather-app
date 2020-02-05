import React, {
    Component,
    createContext,
    useEffect
} from 'react'

export const AppContext = createContext()

//572cbdc18f6f1a1a8e3d659a5639cd1d
//44cc22073a3eaf46a220bb8ddffa8517

class AppContextProvider extends Component {

    //default state
    state = {
        units: "",
        name: "",
        temp: "",
        feelsLike: '',
        main: "",
        mainid: "",
        description: ""
    }

    // load data method
    loadData = (input) => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY
        var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${this.state.units}&APPID=${apiKey}`

        //if first render - try to get geo location
        if (input === "start") {
            var lat = "";
            var long = "";
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(successFunction);
            } else {
                alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
            }

            function successFunction(position) {
                console.log(position);
                lat = position.coords.latitude;
                long = position.coords.longitude;
                console.log('Your latitude is :' + lat + ' and longitude is ' + long);
            }

            weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${Math.round(lat)}&lon=${Math.round(long)}&units=${this.state.units}&APPID=${apiKey}`
        }

        // take data and move to the state
        fetch(weatherURL)
            .then((res) => {
                if (res.status != "200") return;
                else {
                    return res.json()
                }
            })
            .then(data => {
                if (data) {
                    this.setState({
                        name: data.name,
                        temp: data.main.temp,
                        feelsLike: data.main.feels_like,
                        main: data.weather[0].main,
                        mainid: data.weather[0].id,
                        description: data.weather[0].description
                    })
                }
            }).catch(function(message) {
                console.log(message);
            });

    }

    // toggle units
    toggleUnits = () => {
        let newUnits = this.state.units === "metric" ? "imperial" : "metric"
        this.setState({
            units: newUnits
        })
    }


    render() {
        return ( <
            AppContext.Provider value = {
                {
                    appData: this.state,
                    toggleUnits: this.toggleUnits,
                    changeCity: this.changeCity,
                    loadData: this.loadData
                }
            } > {
                this.props.children
            } <
            /AppContext.Provider>
        )
    }
}

export default AppContextProvider