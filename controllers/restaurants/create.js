import Restaurant from "../../models/Restaurant.js";
let createOne = (req,res,next)=>{
    try {
        let dataRestaurant = req.body
        let newRestaurant = Restaurant.create(dataRestaurant)
        return res.status(201).json({
            success:true,
            reposnse:newRestaurant
        })
    } catch (error) {
        next(error)
    }
}

let createAny = (req,res,next)=>{
    try {
        let dataRestaurant = req.body
        let newRestaurant = Restaurant.insertMany(dataRestaurant)
        return res.status(201).json({
            success:true,
            reposnse:newRestaurant
        })
    } catch (error) {
        next(error)
    }
}
export {createAny, createOne}