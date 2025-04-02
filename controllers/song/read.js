import Song from '../../models/Song.js'
let allSongs= async (req , res,next)=>{
    try {
        let all= await Song.find()
        return res.status(200).json({
            success:true,
            songs:all
        })
    } catch (error) {
        next(error)
    }
}
export default allSongs