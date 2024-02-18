const express = require("express")
const http = require("http")
const cors = require('cors');
var app = express()
const Bodyparser=require('body-parser')
const mongo= require ("mongoose")
const server = http.createServer(app)
const allowedOrigin = 'http://localhost:5173';
const config=require ('./config/dbconfig.json')
const tournamentRouter= require("./routes/TouranmentRoutes")
app.use(Bodyparser.json())
app.use("/tournament",tournamentRouter)
app.use(cors());
server.listen(3000,console.log("server is running"))
mongo.connect(config.url ,{
    useUnifiedTopology:true,
    useNewUrlParser:true,

}).then (()=> console.log("database connected")).catch(()=>console.log("error with db connection "));

module.exports =app