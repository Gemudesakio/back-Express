import {Router} from "express"
import userReadControldor from '../controllers/users/read.js'
const routerUsers= Router()
routerUsers.get('/allUsers',userReadControldor)
export default routerUsers