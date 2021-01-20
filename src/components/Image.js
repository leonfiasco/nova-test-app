import React from 'react'

import '../styles/Card.css';


const Image = ({ cloud, rain, drizzle, mist, fog, snow, clear }) => {
    return (
        <div>
           {(() => {
               if (cloud) {
                   return <img alt="cloud" src={cloud} />
               } else if (rain) {
                   return <img alt="rain" src={rain} />
               } else if (drizzle) {
                   return <img alt="drizzle" src={drizzle} />
               } else if (mist) {
                   return <img alt="mist" src={mist} />
               } else if (fog) {
                   return <img alt="fog" src={fog} />
               }else if (clear) {
                   return <img alt="clear" src={clear} />
               }else if (snow) {
                   return <img alt="snow" src={snow} />
               }
           })()}
        </div>
    )
}

export default Image
