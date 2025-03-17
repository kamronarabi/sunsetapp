import React from 'react'

const Timetill = ({time, timeZone}) => {
   
  return (
    <div className="timetillbox">
        <p className="timetill">{time} {timeZone}</p>
    </div>
  )
}

export default Timetill