import React from 'react'
import {FaCloud} from "react-icons/fa"

const Factor1 = ({weatherData, cloud}) => {

  return (
    <div className="circle">
        <h1 style={{fontSize:"30px"}}>Cloud Cover <FaCloud size=".7em"/></h1>
        <p style={{fontSize:"26px",marginTop:"4px"}}>{cloud+(weatherData?"%":"")}</p>
    </div>
  )
}

export default Factor1