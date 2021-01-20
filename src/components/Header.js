import React from 'react';

import '../styles/Header.css';

function Header({ weather }) { 
    const clock = () => {
        let theDate = new Date();
        let time = `${theDate.getHours()} : ${theDate.getMinutes()} `;
        return time
    }

    setInterval(clock, 1000)
    return (
        <div>
            {
            weather && (
            <div className='header'>
            <div className='city-name'><h3>{weather.name}</h3></div>
            <div className='current-time'><p>10.00</p></div>
            <div className='current-temp'><h3>{Math.round(weather.main.temp)}°</h3></div>
            </div>
            )}
            <div className='container'>
                <div className="progress-bar"></div>
            </div>
        </div>
    )
}

export default Header
