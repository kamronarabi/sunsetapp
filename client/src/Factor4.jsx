import React from 'react'
import {FaCloudSunRain} from "react-icons/fa"

const Factor4 = ({weatherData, rain}) => {

  
  return (
    <div className="circle">
        <h1 style={{fontSize:"30px"}}>Precipitation <FaCloudSunRain size=".7em"/></h1>
        <p style={{fontSize:"26px",marginTop:"4px"}}>{rain+(weatherData?" mm":"")}</p>
    </div>
  )
}

export default Factor4