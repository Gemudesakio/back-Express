import Movie from '../../models/Movie.js'
let allMovies = async (req , res)=>{
    try {
        let all = await Movie.find()
        return res.status(200).json({
            movies:all
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'fatal error',
            error: error.message
        })
    }
}
export default allMovies