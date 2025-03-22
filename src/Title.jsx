import React from 'react'
import { motion } from 'framer-motion';

const Title = ({city}) => {
  return (
    
    <motion.div className='titlebox'
    animate={city ? { y: -80, x:-300 } : { y:0, x:-300 }}
    transition={{ duration: .3, ease: "linear" }}>
        <p className='title'>How will your sunset look tonight?</p>
    </motion.div>
  )
}

export default Title