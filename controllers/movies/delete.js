import Movie from '../../models/Movie.js'
let deleteFind =async (req,res,next)=>{
    try {
        let infoMovie = req.body
        let destroyed = await Movie.findOneAndDelete(
            {director: infoMovie.director}
           
        ) 
        if(destroyed){
            return res.status(200).json({
                success:true,
                response:destroyed
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"404 error not found"
            })
        }
    } catch (error) {
        next(error)
    }
}
export default deleteFind