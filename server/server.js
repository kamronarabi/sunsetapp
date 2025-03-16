const express =require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/api", (req, res)=>{
    res.json({"fruits":["apple","penis","banana"]});
});

app.listen(3600,()=>{
    console.log("Server started on port 3600")
})