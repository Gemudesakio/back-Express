import {Router} from 'express'
import songReadController from '../controllers/song/read.js'
import songCreateController from '../controllers/song/create.js'
const routerSong = Router()
routerSong.get('/allSongs',songReadController)
routerSong.post('/create',songCreateController)
export default routerSong