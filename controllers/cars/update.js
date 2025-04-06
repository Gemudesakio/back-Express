import Car from "../../models/Car.js";
let update = async (req,res,next)=>{
    try {
        let infoCar = req.body
        let updateCar = await Car.updateOne(
            {name: infoCar.name},
            {color: infoCar.color}
        )
        return res.status(201).json({
            success:true,
            response:updateCar
        })
    } catch (error) {
        next(error)
    }
}


//update con metodod findOne
let findOne = async (req,res,next)=>{
    try {
        let busqueda = req.params.name
        let infoCar = req.body
        let updateCar = await Car.findOne({name:busqueda})

        if (updateCar){
            updateCar.color =  infoCar.color
            await updateCar.save()
            return res.status(201).json({
                success:true,
                response:updateCar
            })
        } else {
            return res.status(404).json({ response: 'not found' })
        }  
    } catch (error) {
        next(error)
    }

}
export {update,findOne}