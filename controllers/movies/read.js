import Movie from '../../models/Movie.js'
let allMovies = async (req , res, next)=>{
    try {
        let all = await Movie.find()
        return res.status(200).json({
            movies:all
        })
    } catch (error) {
        next(error)
    }
}
export default allMovies