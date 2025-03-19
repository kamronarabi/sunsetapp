import React from 'react'
import Factor1 from './Factor1'
import Factor2 from './Factor2'
import Factor3 from './Factor3'
import Factor4 from './Factor4'
import Calc from './Calc'
import { useEffect, useState } from 'react';

const Dashboard = ({weatherData, aerosol, city}) => {
  const [cloud, setCloud] = useState("No data")
  const [cloudRating, setCloudRating] = useState("")
  const [humidity, setHumidity] = useState("No data")
  const [humidityRating, setHumidityRating] = useState("")
  const [pm10, setpm10] = useState("No data")
  const [pm10Rating, setpm10Rating]=useState("")
  const [rain, setRain] = useState("No data")
  const [rainRating, setRainRating]=useState("")


  useEffect(()=>{
     if(aerosol){
        setpm10(aerosol.list[0].components.pm10)
        handlepm10Rating(pm10)
     }
  },[aerosol])

  useEffect(()=>{
     if(weatherData){
        console.log(weatherData)
        setCloud(weatherData.current.clouds)
        handleCloudRating(cloud)
        setHumidity(weatherData.current.humidity)
        handleHumidityRating(humidity)
        if(weatherData.daily.rain){
          setRain(weatherData.daily.rain)
          handleRainRating(rain)
      }else{
          setRain(0)
          setRainRating("Moderate")
      }
     }
  },[weatherData])

  const handleCloudRating = (cloud) => {
    if(cloud>40 && cloud<60){
      setCloudRating("Ideal")
    }else if(cloud>20 && cloud<80){
      setCloudRating("Moderate")     
    }else{
      setCloudRating("Bad")
    }
  }
  
  const handleHumidityRating = (humidity) => {
    if(humidity>10 && humidity<55){
      setHumidityRating("Ideal")
    }else if(humidity<=10 && humidity<70){
      setHumidityRating("Moderate")     
    }else{
      setHumidityRating("Bad")
    }
  }

  const handlepm10Rating = (pm10) => {
    if(pm10>=10 && pm10<=50){
      setpm10Rating("Ideal")
    }else if(pm10<=10 && pm10<=100){
      setpm10Rating("Moderate")     
    }else{
      setpm10Rating("Bad")
    }
  }

  const handleRainRating = (rain) => {
    if(rain>0 && pm10<=5){
      setpm10Rating("Ideal")
    }else if(rain>5 && rain<=15){
      setpm10Rating("Moderate")     
    }else{
      setpm10Rating("Bad")
    }
  }

  
  return (
    <div className="dashboard">
       <Factor1 weatherData={weatherData} cloud={cloud}/>
       <Factor2 weatherData={weatherData} humidity={humidity}/>
       <Factor3 aerosol={aerosol} pm10={pm10}/>
       <Factor4 weatherData={weatherData} rain={rain}/>
       <Calc 
       city={city}
       cloud={cloud}
       cloudRating={cloudRating}
       humidity={humidity}
       humidityRating={humidityRating}
       pm10={pm10}
       pm10Rating={pm10Rating}
       rain={rain}
       rainRating={rainRating}
        />
    </div>
  )
}

export default Dashboard