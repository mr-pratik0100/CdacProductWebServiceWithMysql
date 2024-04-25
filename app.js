const express = require("express");
const app = express();
const cors =require("cors")
const bodyParser = require("body-parser");
const dotenv =require("dotenv").config()
const router =require("./router/routers.js")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use("/",router);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no ${process.env.PORT}`)
})