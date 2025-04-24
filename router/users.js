import {Router} from "express"
import { allUsers,userByName, userById} from '../controllers/users/read.js'
import {createAny,createOne} from "../controllers/users/create.js"
import {update,findUpdate} from "../controllers/users/update.js"
import validator from "../middlewares/validator.js"
import schema from "../shemas/users/create.js"
import accountExist from "../middlewares/accountExist.js"
import createHash from "../middlewares/createHash.js"


const routerUsers= Router()


routerUsers.get('/allUsers',allUsers)
routerUsers.get('/id/:idParams',userById)
routerUsers.get('/name/:nameParams',userByName)
routerUsers.post('/createOne',validator(schema),accountExist,createHash, createOne)
routerUsers.post('/createAny',validator(schema), createAny)
routerUsers.put('/update',update)
routerUsers.put('/id/:id',findUpdate)
 

export default routerUsers