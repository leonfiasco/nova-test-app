import React from 'react';

import '../styles/Header.css';

function Header({ weather }) { 
        let theDate = new Date();
        let time = `${theDate.getHours()} : ${theDate.getMinutes()} `;
        

    return (
        <div>
            {
            weather && (
            <div className='header'>
            <div className='city-name'><h3>{weather.name}</h3></div>
            <div className='current-time'><p>{time}GMT</p></div>
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
