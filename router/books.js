import {Router} from "express"
import bookReadControlador from '../controllers/books/read.js'
import bookCreateController from  '../controllers/books/create.js'

const routerBooks = Router()
routerBooks.get('/allBooks',bookReadControlador)
routerBooks.post('/create',bookCreateController)
export default routerBooks