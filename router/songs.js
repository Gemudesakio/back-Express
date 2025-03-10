import {Router} from 'express'
import songReadController from '../controllers/song/read.js'
const routerSong = Router()
routerSong.get('/allSongs',songReadController)
export default routerSong