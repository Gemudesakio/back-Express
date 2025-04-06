import {Router} from 'express'
import songReadController from '../controllers/song/read.js'
import songCreateController from '../controllers/song/create.js'
import {update,findUpdateID} from '../controllers/song/update.js'
const routerSong = Router()
routerSong.get('/allSongs',songReadController)
routerSong.post('/create',songCreateController)
routerSong.put('/update',update)
routerSong.put('/id/:id',findUpdateID)
export default routerSong