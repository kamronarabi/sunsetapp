import React from 'react'
import Factor1 from './Factor1'
import Factor2 from './Factor2'
import Factor3 from './Factor3'
import Factor4 from './Factor4'
import Calc from './Calc'
import { useEffect, useState } from 'react';

const Dashboard = ({weatherData, aerosol, city}) => {
  const [cloud, setCloud] = useState("No data")
  const [cloudRating, setCloudRating] = useState("No data")
  const [humidity, setHumidity] = useState("No data")
  const [humidityRating, setHumidityRating] = useState("No data")
  const [pm10, setpm10] = useState("No data")
  const [pm10Rating, setpm10Rating]=useState("No data")
  const [rain, setRain] = useState("No data")
  const [rainRating, setRainRating]=useState("No data")


  useEffect(()=>{
     if(aerosol){
      const newPm10 = aerosol.list[0].components.pm10;
      setpm10(newPm10)
      handlepm10Rating(newPm10)
     }
  },[aerosol])

  useEffect(()=>{
     if(weatherData){
      const newCloud = weatherData.current.clouds;
      const newHumidity = weatherData.current.humidity;
      const newRain = weatherData.daily.rain || 0;

      setCloud(newCloud)
      handleCloudRating(newCloud)
      
      setHumidity(newHumidity)
      handleHumidityRating(newHumidity)
      
      setRain(newRain)
      handleRainRating(newRain)

     }
  },[weatherData])

  const handleCloudRating = (cloud) => {
    if(cloud>40 && cloud<60){
      setCloudRating("Ideal")
    }else if(cloud>20 && cloud<80){
      setCloudRating("Moderate")     
    }else{
      setCloudRating("Poor")
    }
  }
  
  const handleHumidityRating = (humidity) => {
    if(humidity>10 && humidity<55){
      setHumidityRating("Ideal")
    }else if(humidity<=10 && humidity<70){
      setHumidityRating("Moderate")     
    }else{
      setHumidityRating("Poor")
    }
  }

  const handlepm10Rating = (pm10) => {
    if(pm10>=10 && pm10<=50){
      setpm10Rating("Ideal")
    }else if(pm10<=10 && pm10<=100){
      setpm10Rating("Moderate")     
    }else{
      setpm10Rating("Poor")
    }
  }

  const handleRainRating = (rain) => {
    if(rain>0 && pm10<=5){
      setRainRating("Ideal")
    }else if(rain==0 || rain>5 && rain<=15){
      setRainRating("Moderate")     
    }else{
      setRainRating("Poor")
    }
  }

  
  return (
    <div className="dashboard">
       <Factor1 weatherData={weatherData} cloud={cloud}/>
       <Factor2 weatherData={weatherData} humidity={humidity}/>
       <Factor3 aerosol={aerosol} pm10={pm10}/>
       <Factor4 weatherData={weatherData} rain={rain}/>
       <Calc 
       weatherData={weatherData}
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