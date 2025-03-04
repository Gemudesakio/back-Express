import express from "express"
import 'dotenv/config.js'
const server = express()
const port = process.env.PORT || 8080
const ready = ()=> console.log("server ready in port:"+port);
server.get("/",(request, response)=>{
    response.send('hola chicos como estan')
})
server.listen(port,ready)
