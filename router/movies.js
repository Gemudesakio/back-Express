import { Router } from "express";
import movieReadController from '../controllers/movies/read.js'
const routerMovie = Router()
routerMovie.get('/allMovies', movieReadController)
export default routerMovie