import {Router} from 'express'
import routerUsers from './users.js'
let routerIndex = Router()
routerIndex.use('/user', routerUsers)
export default routerIndex