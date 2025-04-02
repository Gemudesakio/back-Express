import { response } from 'express'
import Song from '../../models/Song.js'

let create = async (req,res,next)=>{
    try {
    let songData = req.body
    let newSong = await Song.insertMany(songData)
    return res.status(201).json({
        response: newSong
    })
    } catch (error) {
        next(error)      
    }
}
export default create