import { Router } from "express";
import movieReadController from '../controllers/movies/read.js'
import { createAny, createOne } from "../controllers/movies/create.js";
import update from "../controllers/movies/update.js";
import deleteFind from "../controllers/movies/delete.js";
const routerMovie = Router()
routerMovie.get('/allMovies', movieReadController)
routerMovie.post('/createOne',createOne)
routerMovie.post('/createAny',createAny)
routerMovie.put('/update',update)
routerMovie.delete('/delete',deleteFind)
export default routerMovie