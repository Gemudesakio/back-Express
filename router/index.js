import {Router} from 'express'
import routerUsers from './users.js'
import routerBooks from './books.js'
import routerCars from './cars.js'
import routerMovies from './movies.js'
import routerRestaurants from './restaurants.js'
import routerSongs from './songs.js'
let routerIndex = Router()
routerIndex.use('/user', routerUsers)
routerIndex.use('/book',routerBooks)
routerIndex.use('/car',routerCars)
routerIndex.use('/movie',routerMovies)
routerIndex.use('/restaurant',routerRestaurants)
routerIndex.use('/song',routerSongs)
export default routerIndex