import React from 'react'
import {WiHumidity} from "react-icons/wi"

const Factor2 = ({weatherData, humidity}) => {
  
  return (
    <div className="circle">
        <h1 style={{fontSize:"30px"}}>Humidity <WiHumidity size=".8em"/></h1>
        <p style={{fontSize:"26px",marginTop:"4px"}}>{humidity+(weatherData?"%":"")}</p>
    </div>
  )
}

export default Factor2