import React from 'react'
import {useState, useEffect} from 'react'
import {FaArrowRightLong} from "react-icons/fa6"
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'

const Calc = ({weatherData, city, cloudRating, humidityRating, pm10Rating, rainRating}) => {
  const [description, setDescription]=useState("No Data")
  const [score, setScore]=useState(0)
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);


  useEffect(()=>{
    if (cloudRating) {  
        const { s, d } = handlePrediction(cloudRating, humidityRating, pm10Rating, rainRating);
        
        if (s) {
          setDescription(d);
          setScore(s);
        }
      }
  
  },[cloudRating, humidityRating, pm10Rating, rainRating])

  const handlePrediction = (c, h, p, r) => {
    let total = 0;
    if(c==="No data"){return { s: 0, d: "No data" };}
    if(c==="Ideal"){
        total+=2
    }else if(c==="Moderate"){
        total++
    }
    if(h==="Ideal"){
        total+=2
    }else if(h==="Moderate"){
        total++
    }
    if(p==="Ideal"){
        total+=2
    }else if(p==="Moderate"){
        total++
    }
    if(r==="Ideal"){
        total+=2
    }else if(r==="Moderate"){
        total++
    }

    const avg = total/4
    const s = (avg * 5).toFixed(1)
    let d = ""
    if(avg==2){
        d= "Spectacular and Vivid Sunset!"
    }else if(avg>=1.5){
        d= "Beautiful and Colorful Sunset."
    }else if(avg>=.75){
        d= "Average Sunset with Mild Colors."
    }else{
        d= "Dull and Cloudy Sunset."
    }

    return { s: s, d: d }
  }

  return (
    <div>
        <motion.button 
        className="circle" 
        style={{color:"white"}}
        onClick={() => (modalOpen ? close() : open())}
        >
            <h1 style={{fontSize:"31px", textAlign:"center"}}>Get Final Results </h1>
            <FaArrowRightLong size="3em"/>   
        </motion.button>

        <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
        >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} 
        city={city}
        cloudRating={cloudRating}
        humidityRating={humidityRating}
        pm10Rating={pm10Rating}
        rainRating={rainRating}
        score={score}
        description={description}
        />}
        </AnimatePresence>
    </div>
  )
}

export default Calc