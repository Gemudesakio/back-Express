import Movie from "../../models/Movie.js";
let createOne = (req,res,next)=>{
    try {
        let dataMovie = req.body
        let newMovie = Movie.create(dataMovie)
        return res.status(201).json({
            success:true,
            response:newMovie
        })
    } catch (error) {
        next(error)
    }
}
let createAny = (req,res,next)=>{
    try {
        let dataMovie = req.body
        let newMovie = Movie.insertMany(dataMovie)
        return res.status(201).json({
            success:true,
            response:newMovie
        })
    } catch (error) {
        next(error)
    }
}

export {createAny,createOne}