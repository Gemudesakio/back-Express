import {Router} from "express"
import { allUsers,userByName, userById} from '../controllers/users/read.js'
import create from "../controllers/users/create.js"


const routerUsers= Router()


routerUsers.get('/allUsers',allUsers)
routerUsers.get('/id/:idParams',userById)
routerUsers.get('/name/:nameParams',userByName)
routerUsers.post('/create',create)


export default routerUsers