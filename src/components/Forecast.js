import React from 'react';

import '../styles/Forecast.css';

function Forecast({ forecast }) {
    const arr = forecast.list;
    return (
        <div className='weather-list'>
            {arr && arr.map((el, i) => {
                
            })
             
            }
        </div>
    )
}

export default Forecast
