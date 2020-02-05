import React from 'react';
//import '../styles/DayWeather.scss';

function CityName({ city }) {
    return (
        <div className='weatherApp__city'>
            <h2>Current weather</h2>
            <h1>{city}</h1>
        </div>
    );
}

export default CityName;
