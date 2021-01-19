import React from 'react';
import Card from '../components/Card';

import '../styles/Forecast.css';

function Forecast({ forecast }) {
    const arr = forecast.list;
    return (
        <div className='weather-list'>
            {arr && arr.map((el, i) => {
                return i % 8 === 0 ? <Card key={i} date={el.dt_txt}/> : null
            }) }
        </div>
    )
}

export default Forecast
