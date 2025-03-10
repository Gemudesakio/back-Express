import Song from '../../models/Song.js'
let allSongs= async (req , res)=>{
    try {
        let all= await Song.find()
        return res.status(200).json({
            success:true,
            songs:all
        })
    } catch (error) {
        return res.status(500).json({
            succes:false,
            message: 'fatal error',
            error: error.message
        })
    }
}
export default allSongs