import React from 'react';

import '../styles/Forecast.css';

function Forecast({ forecast }) {
    const fiveDay = () => {
        for (let i = 0; i < forecast.list.length; i+= 8) {
            return forecast.list[i];
        }
     }

     console.log(fiveDay);
    return (
        <div className='weather-list'>
            {
             
            }
        </div>
    )
}

export default Forecast
