import {Router} from 'express'
import restaurantReadController from '../controllers/restaurants/read.js'
import { createAny, createOne } from '../controllers/restaurants/create.js'
import update from '../controllers/restaurants/update.js'
import deleteFindId from '../controllers/restaurants/delete.js'
const routerRestaurant = Router()
routerRestaurant.get('/allRestaurants',restaurantReadController)
routerRestaurant.post('createOne',createOne)
routerRestaurant.post('createAny',createAny)
routerRestaurant.put('/update',update)
routerRestaurant.delete('/delete/:id',deleteFindId)
export default routerRestaurant