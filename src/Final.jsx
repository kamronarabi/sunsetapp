import React, { useEffect } from 'react'
import { useState } from 'react'

const Final = ({ city, cloudRating, humidityRating, pm10Rating, rainRating, score, description}) => {
    const [colorC,setColorC] = useState("white")
    const [colorH,setColorH] = useState("white")
    const [colorP,setColorP] = useState("white")
    const [colorR,setColorR] = useState("white")
    const [colorS,setColorS] = useState("white")

    const handleColor=(x)=>{
        if(x==="Ideal"){
            return "green"
        } else if(x==="Moderate"){
            return "yellow"
        }else if(x==="Poor"){
            return "red"
        }
    }

    const handleScoreColor = (x)=>{
        if(x===10){
            return "darkgreen"
        }else if(x>=7){
            return "green"
        }else if(x>=4){
            return "yellow"
        }else if(x>=0){
            return "red"
        }
    }
    
    useEffect(()=>{
       setColorC(handleColor(cloudRating))
       setColorH(handleColor(humidityRating))
       setColorP(handleColor(pm10Rating))
       setColorR(handleColor(rainRating))
       if(score){
        setColorS(handleScoreColor(score))
       }
    },[cloudRating, humidityRating, pm10Rating, rainRating, score])

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      padding: "20px"
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "9px",
        font: "italic 1.2rem 'Fira Sans', serif",
        fontSize:"20px"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "200px" }}>
        <p style={{ margin: 8 }}>Cloud Cover: </p>
        <span style={{color:colorC, textAlign:"center"}}>{cloudRating}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "200px" }}>
        <p style={{ margin: 8}}>Humidity:</p>
        <span style={{color:colorH}}>{humidityRating}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "200px" }}>
        <p style={{ margin: 8 }}>Aerosols:</p>
        <span style={{color:colorP}}>{pm10Rating}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "200px" }}>
        <p style={{ margin: 8 }}>Precipitation: </p>
        <span style={{color:colorR}}>{rainRating}</span>
      </div>
    </div>

    <div style={{display: "flex",
        flexDirection: "column", font: "italic 1.2rem 'Fira Sans', serif", textAlign:"center",paddingBottom:"0px"}}>
      <p>Description: </p>
      <p style={{ fontSize: "1.2em", font: "italic 1.2rem 'Fira Sans', serif", fontSize:"34px"}}>{description}</p>
    </div>

    <div
      style={{
        width: "180px",
        height: "180px",
        borderRadius: "30%",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        transform: "translateX(15%)",
        backgroundColor: city?colorS:"white",
        color: "Black",
        font: "italic 1.2rem 'Fira Sans', serif"
      }}
    >
      <p style={{ fontSize: "1.5em"}}>Sunset Score</p>
      <p style={{ fontSize: "3em", margin: 0, textAlign:'center'}}>{score}</p>
    </div>
  </div>
  )
}

export default Final