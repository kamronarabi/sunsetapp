import React from 'react'
import {useState, useEffect} from 'react'
import {FaArrowRightLong} from "react-icons/fa6"

const Calc = ({weatherData, city, cloud, cloudRating, humidity, humidityRating, pm10, pm10Rating, rain, rainRating}) => {
  const [description, setDescription]=useState("")
  const [score, setScore]=useState(0)
  useEffect(()=>{
    setDescription(handlePrediction(cloudRating, humidityRating, pm10Rating, rainRating))
    console.log(description)
  },[weatherData])

  const handlePrediction = (c, h, p, r) => {
    let total = 0;
    if(c="Ideal"){
        total+=2
    }else if(c="Moderate"){
        total++
    }
    if(h="Ideal"){
        total+=2
    }else if(h="Moderate"){
        total++
    }
    if(p="Ideal"){
        total+=2
    }else if(p="Moderate"){
        total++
    }
    if(r="Ideal"){
        total+=2
    }else if(r="Moderate"){
        total++
    }

    const avg = total/4
    const scaled = avg*5
    setScore(scaled.toFixed(2))

    if(avg==2){
        return "Spectacular and Vivid Sunset!"
    }else if(avg>=1.5){
        return "Beautiful and Colorful Sunset."
    }else if(avg>=.75){
        return "Average Sunset with Mild Colors."
    }else{
        return "Dull and Cloudy Sunset."
    }
  }

  return (
    <div className="circle">
        <h1 style={{fontSize:"31px", textAlign:"center"}}>Get Final Results </h1>
        <FaArrowRightLong size="3em"/>   
    </div>
  )
}

export default Calc