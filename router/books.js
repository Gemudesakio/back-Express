import {Router} from "express"
import bookReadControlador from '../controllers/books/read.js'
import bookCreateController from  '../controllers/books/create.js'
import update from "../controllers/books/update.js"
import deleteMany from "../controllers/books/delete.js"


const routerBooks = Router()
routerBooks.get('/allBooks',bookReadControlador)
routerBooks.post('/create',bookCreateController)
routerBooks.put('/update',update)
routerBooks.delete('/delete',deleteMany)
export default routerBooks