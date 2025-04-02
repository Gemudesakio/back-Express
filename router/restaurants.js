import {Router} from 'express'
import restaurantReadController from '../controllers/restaurants/read.js'
const routerRestaurant = Router()
routerRestaurant.get('/allRestaurants',restaurantReadController)
export default routerRestaurant