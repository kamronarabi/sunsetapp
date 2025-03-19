import React from 'react'
import {GiAerosol} from "react-icons/gi"

const Factor3 = ({aerosol, pm10}) => {
  
  
  return (
    <div className="circle">
        <h1 style={{fontSize:"30px"}}>Aerosols <GiAerosol size=".8em"/></h1>
        <p style={{fontSize:"26px",marginTop:"4px"}}>{pm10+(aerosol?" µg/m³":"")}</p>
    </div>
  )
}

export default Factor3