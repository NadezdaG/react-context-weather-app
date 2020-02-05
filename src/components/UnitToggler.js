import React from 'react';
import '../styles/UnitToggler.scss';

const UnitToggler = ({ units, toggleUnits }) => {
    return (
        <div className='unitToggler'>
            <button onClick={toggleUnits}>&#176; {units === 'metric' ? 'F' : 'C'} </button>
        </div>
    );
};

export default UnitToggler;
