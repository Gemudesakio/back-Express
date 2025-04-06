import {Router} from "express"
import { allUsers,userByName, userById} from '../controllers/users/read.js'
import {createAny,createOne} from "../controllers/users/create.js"
import {update,findUpdate} from "../controllers/users/update.js"


const routerUsers= Router()


routerUsers.get('/allUsers',allUsers)
routerUsers.get('/id/:idParams',userById)
routerUsers.get('/name/:nameParams',userByName)
routerUsers.post('/createOne',createOne)
routerUsers.post('/createAny',createAny)
routerUsers.put('/update',update)
routerUsers.put('/id/:id',findUpdate)


export default routerUsers