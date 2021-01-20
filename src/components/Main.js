import React from 'react';

import useApi from '../hooks/useApi';
import forecastApi from '../hooks/ForecastApi';


import Header from './Header';
import Forecast from './Forecast';




function Main() {
    const [weather] = useApi([]);
    const [forecast] = forecastApi([]);
    return (
        <div className="main">
            <Header weather={weather}/>
            <Forecast forecast={forecast}/>
        </div>
    )
}

export default Main
