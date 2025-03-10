import {Router} from "express"
import bookReadControlador from '../controllers/books/read.js'
const routerBooks = Router()
routerBooks.get('/allBooks',bookReadControlador)
export default routerBooks