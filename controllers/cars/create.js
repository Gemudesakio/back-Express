import Car from "../../models/Car.js";

let createOne = async (req,res,next)=>{
    try {
        let dataCar = req.body
        let newCar = Car.create(dataCar)
        return res.status(201).json({
            success: true,
            response: newCar
        })      
    } catch (error) {
        next(error)
    }
}

let createAny = async (req,res,next)=>{
    try {
        let dataCar = req.body
        let newCar = Car.insertMany(dataCar)
        return res.status(201).json({
            success: true,
            response: newCar
        })      
    } catch (error) {
        next(error)
    }
}

export {createOne, createAny}

