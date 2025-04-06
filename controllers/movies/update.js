import Movie from "../../models/Movie.js";
let update =async (req,res,next)=>{
    try {
        let infoMovie = req.body
        let updateMovie = await Movie.updateOne(
            {title: infoMovie.title},
            {title: infoMovie.newTitle, director:infoMovie.director} // updateOne puede actualizar varios atributos de un solo objeto
        )
        return res.status(201).json({
            success: true,
            response:updateMovie
        })
    } catch (error) {
        next(error)
    }
}
export default update