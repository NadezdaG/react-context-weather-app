import React, { Component } from 'react';
import DayWeather from './DayWeather';
import UnitToggler from './UnitToggler';
import CityInput from './CityInput';
import CityName from './CityName';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: 'metric',
            city: '',
            weatherToday: {
                temp: '',
                feelsLike: '',
                main: '',
                mainid: '',
                description: ''
            },
            weatherTomorrow: {
                temp: '',
                feelsLike: '',
                main: '',
                mainid: '',
                description: ''
            },
            weatherInTwoDays: {
                temp: '',
                feelsLike: '',
                main: '',
                mainid: '',
                description: ''
            },
            weatherInThreeDays: {
                temp: '',
                feelsLike: '',
                main: '',
                mainid: '',
                description: ''
            },
            weatherInThreeDays: {
                temp: '',
                feelsLike: '',
                main: '',
                mainid: '',
                description: ''
            }
        };

        this.toggleUnits = this.toggleUnits.bind(this);
        this.fetchForecast = this.fetchForecast.bind(this);
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((coords) => this.getCoords(coords));
        } else {
            alert(
                'It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.'
            );
        }
    }

    getCoords(position) {
        const { latitude, longitude } = position.coords;
        const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${Math.round(latitude)}&lon=${Math.round(
            longitude
        )}&units=${this.state.units}&APPID=${API_KEY}`;

        this.fetchForecast(endpoint);
    }

    fetchForecast(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    city: data.city.name,
                    weatherToday: {
                        temp: data.list[0].main.temp,
                        feelsLike: data.list[0].main.feels_like,
                        main: data.list[0].weather[0].main,
                        mainid: data.list[0].weather[0].id,
                        description: data.list[0].weather[0].description
                    },
                    weatherTomorrow: {
                        temp: data.list[7].main.temp,
                        feelsLike: data.list[7].main.feels_like,
                        main: data.list[7].weather[0].main,
                        mainid: data.list[7].weather[0].id,
                        description: data.list[7].weather[0].description
                    },
                    weatherInTwoDays: {
                        temp: data.list[15].main.temp,
                        feelsLike: data.list[15].main.feels_like,
                        main: data.list[15].weather[0].main,
                        mainid: data.list[15].weather[0].id,
                        description: data.list[15].weather[0].description
                    },
                    weatherInThreeDays: {
                        temp: data.list[23].main.temp,
                        feelsLike: data.list[23].main.feels_like,
                        main: data.list[23].weather[0].main,
                        mainid: data.list[23].weather[0].id,
                        description: data.list[23].weather[0].description
                    },
                    weatherInThreeDays: {
                        temp: data.list[31].main.temp,
                        feelsLike: data.list[31].main.feels_like,
                        main: data.list[31].weather[0].main,
                        mainid: data.list[31].weather[0].id,
                        description: data.list[31].weather[0].description
                    }
                });
            })
            .catch(function(message) {
                console.log(message);
            });
    }

    loadData(input) {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=${this.state
            .units}&APPID=${API_KEY}`;
    }

    toggleUnits() {
        let newUnits = this.state.units === 'metric' ? 'imperial' : 'metric';
        this.setState({
            units: newUnits
        });
    }

    render() {
        return (
            <div id='weatherApp'>
                <header>
                    {/* <CityInput value={} onChange={}/> */}
                    <UnitToggler toggleUnits={this.toggleUnits} units={this.state.units} />
                </header>
                <CityName city={this.state.city} />
                <DayWeather weather={this.state.weatherToday} />
                <div className='forecast'>
                    <DayWeather weather={this.state.weatherTomorrow} />
                    <DayWeather weather={this.state.weatherInTwoDays} />
                    <DayWeather weather={this.state.weatherInThreeDays} />
                </div>
            </div>
        );
    }
}

export default App;
