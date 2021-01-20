import React from 'react';
import Card from '../components/Card';

import '../styles/Forecast.css';

function Forecast({ forecast }) {
    const arr = forecast.list;
    window.setInterval(refresh, 60000);

    function refresh() {
        window.location.reload();
    }
    return (
        <div className='weather-list'>
            {arr && arr.map((el, i) => {
                return i % 8 === 0 ? 
                <Card 
                key={i} 
                date={el.dt_txt} 
                temp={el.main.temp} 
                img={el.weather[0].main} 
                description={el.weather[0].description}/> : 
                null
            }) }
        </div>
    )
}

export default Forecast
