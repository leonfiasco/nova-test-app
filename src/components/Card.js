import React from 'react';

import '../styles/Card.css';

function Card({ i, date }) {
    console.log(date);
    return (
        <div className='forecast-card'>
            <div className='day'><h3>Mon</h3></div>
            <div className='temp'><h3>10°</h3></div>
            <div className='img'><p>blah</p></div>
        </div>
    )
}

export default Card
