import {Router} from "express"
import carReadController from "../controllers/cars/read.js"
const routerCar = Router()
routerCar.get('/allCars',carReadController)
export default routerCar
