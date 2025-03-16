import { useState, useEffect } from 'react'
import axios from "axios"
import Sun from "./Sun.jsx"
import SearchBar from "./SearchBar.jsx"
import Dashboard from "./Dashboard.jsx"
import Title from "./Title.jsx"


function App() {
  const [city, setCity]=useState('')
  // const [count, setCount] = useState(0)
  // const [array, setArray] = useState([])

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:3600/api");
  //   setArray(response.data.fruits);
  // }

  // useEffect(()=>{
  //   fetchAPI();
  // },[])
  return (
    <>
      <Sun/>
      <Title/>
      <SearchBar city={city} setCity={setCity}/>
      <Dashboard/>
    </>
  )
}

export default App
