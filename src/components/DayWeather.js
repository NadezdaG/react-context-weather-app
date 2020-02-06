import React from 'react';
import '../styles/DayWeather.scss';

function DayWeather({ weather, units }) {
    let imageName = 'w-2'; // default image name
    let { main, mainid, temp, feelsLike } = weather;

    if (mainid === 800 || mainid === 801 || mainid === 802 || mainid === 803) {
        // set image depending on code
        imageName = 'w-' + mainid;
    } else {
        // set image if not full code found
        imageName = 'w-' + String(mainid).split('')[0];
    }

    return (
        <div className='weatherApp__card'>
            <figure>
                <img src={process.env.PUBLIC_URL + '/assets/images/' + imageName + '.png'} alt='' />
                <br />
                {main}
            </figure>
            <div className='weatherApp__card__content'>
                <div className='weatherApp__card__temp'>
                    {Math.round(temp)} &#176; {units === 'metric' ? 'C' : 'F'}
                </div>
                <div className='weatherApp__card__feelslike'>Feels like: {Math.round(feelsLike)} &#176;</div>
            </div>
        </div>
    );
}

export default DayWeather;
