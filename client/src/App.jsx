import { useState, useEffect } from 'react'
import axios from "axios"
import Sun from "./Sun.jsx"
import SearchBar from "./SearchBar.jsx"
import Dashboard from "./Dashboard.jsx"
import Title from "./Title.jsx"
import Timetill from "./Timetill.jsx"


function App() {
  const [city, setCity]=useState('')
  const [weatherData, setWeatherData]=useState(null)

  const getCoordinates = async (city) => {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},US&limit=1&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
    const lat =response.data[0].lat 
    const lon = response.data[0].lon
    return {lat, lon}
  }

  const fetchWeatherAPI = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
    return response
  }

  useEffect(()=>{
    const fetchWeather = async () => {
      if (city !== '') {
        const coordinates = await getCoordinates(city);
        if (coordinates) {
          const data = await fetchWeatherAPI(coordinates.lat, coordinates.lon);
          setWeatherData(data.data)
        }
      }
    };
    fetchWeather();

  },[city])

  const [timeZone, setTimeZone] = useState('')
  const [time,setTime] = useState('')

  useEffect(()=>{
    if (weatherData){
      const sunset = weatherData.current.sunset;
      const timezoneOffset = weatherData.timezone_offset;
      const adjustedTimestamp = (sunset + timezoneOffset) * 1000;
      const localSunsetTime = new Date(adjustedTimestamp);
      const hours = localSunsetTime.getUTCHours();
      const minutes = localSunsetTime.getUTCMinutes();
      const formattedHours = hours % 12 || 12;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
      setTime(formattedTime);
       if(weatherData.timezone === "America/New_York"){
           setTimeZone("EST")
       }else if((weatherData.timezone === "America/Chicago")){
           setTimeZone("CST")
       }else if(weatherData.timezone === "America/Denver"){
           setTimeZone("MST")
       }else if(weatherData.timezone === "America/Los_Angeles"){
           setTimeZone("PST")
       }else if(weatherData.timezone === "Pacific/Honolulu"){
           setTimeZone("HST")
       }else if(weatherData.timezone === "America/Juneau"){
           setTimeZone("AKST")
       }
    }
  },[weatherData])

  return (
    <>
      <Sun/>
      <Timetill time={time} timeZone={timeZone}/>
      <Title/>
      <SearchBar city={city} setCity={setCity}/>
      <Dashboard weatherData={weatherData}/>
    </>
  )
}

export default App
