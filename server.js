import express from "express"
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from 'morgan'
import routerIndex from "./router/index.js"

const server = express()
const port = process.env.PORT || 8080
const ready = ()=> console.log("server ready in port:"+port);
// configuraciones bsicas para cualquier servidor
//middleword

// se habilitan peticiones complejas donde los url
//van a recibir parametros o querys 
server.use(express.urlencoded({extended:true})) 

//le decimos a express poder manejar el formato json exportar, recibir, enviar etc
server.use(express.json())

//se instal la libreriacors --> npm install cors politica de seguridad de orignes cruzaados 
server.use(cors())
// se instala morgan para tener un seguimienton de las peticiones que se le hacen a nuestro servidor 
server.use(morgan('dev'));
server.use('/api',routerIndex)


server.listen(port,ready)
