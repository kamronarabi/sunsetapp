import React from 'react'
import { useState, useEffect } from 'react'

const Timetill = ({time, timeZone, city}) => {
   const [clean, setClean] = useState('...')
   useEffect(()=>{
    const temp = city.split(",")
    setClean(temp[0])
   },[city])
  return (
    <> 
    {city && (
        <div className="timetillbox">
            <p className='timetill'>Time of sunset in: {clean}</p>
            <p className="timetill">{time} {timeZone}</p>
        </div>
    )}
   </>
)}

export default Timetill