import {Router} from "express"
import carReadController from "../controllers/cars/read.js"
import { createAny, createOne } from "../controllers/cars/create.js"
import {update, findOne} from "../controllers/cars/update.js"
import Delete from "../controllers/cars/delete.js"

const routerCar = Router()
routerCar.get('/allCars',carReadController)
routerCar.post('/createOne',createOne)
routerCar.post('/createAny',createAny)
routerCar.put('/update',update)
routerCar.put('/name/:name',findOne)
routerCar.delete('/delete',Delete)
export default routerCar
