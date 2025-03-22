import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Final from "./Final";

const slideIn = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: "100vh",
      opacity: 0,
    },
  };
  

const Modal = ({ handleClose, city, cloudRating, humidityRating, pm10Rating, rainRating, score, description }) => {

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            className="modal orange-gradient"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{width:"100%", display:"flex",justifyContent:"center"}}
          >
            <Final
            city={city}
            cloudRating={cloudRating}
            humidityRating={humidityRating}
            pm10Rating={pm10Rating}
            rainRating={rainRating}
            score={score}
            description={description}
            />
          </motion.div>
      </Backdrop>
    );
  };

  
  export default Modal;