import React from 'react';
import Image from './Image';

import '../styles/Card.css';

import cloud from '../images/clouds.svg'; 
import rain from '../images/rain.svg';
import drizzle from '../images/drizzle.svg';
import mist from '../images/mist.svg';
import fog from '../images/fog.svg';
import snow from '../images/snow.svg';
import clear from '../images/clear-sky.svg';

function Card({ date, temp, img, description }) {
    const days = new Date(date);
    console.log(img);
    return (
        <div className='forecast-card'>
            <div className='day'><h3>{String(days).substr(0, 3)}</h3></div>
            <div className='temp'><h3>{Math.round(temp)}°</h3></div>
            <div className='icon-container'>
                <div className='img'>{(() => {
                                switch (img) {
                                    case 'Clouds':
                                    return <Image cloud={cloud}/>;
                                    case 'Rain':
                                    return <Image rain={rain}/>;
                                    case 'Drizzle':
                                    return <Image drizzle={drizzle}/>;
                                    case 'Mist':
                                    return <Image mist={mist} />;
                                    case 'Fog':
                                    return <Image fog={fog} />;
                                    case 'Snow':
                                    return <Image fog={snow} />; 
                                    case 'Clear':
                                    return <Image fog={clear} />;
                                    default:
                                }
                            })()}</div>
                <div className='description'><p>{description}</p></div> 
            </div>           
        </div>
    )
}

export default Card
