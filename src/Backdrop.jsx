import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      style={{
        position:"absolute",
        top: 0,
        left:0,
        height: "100%",
        width: "100%",
        backgroundColor: "#024A62",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"30px",
        zIndex:100
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;