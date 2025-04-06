import Car from "../../models/Car.js";

//delete con el metodo deleteOne
let Delete = async(req,res,next)=>{
    try {
        let infoCar = req.body
        let destroyed = await Car.deleteOne(
            {name: infoCar.name}
        )
        return res.status(200).json({

            success:true,
            response:destroyed
        })
    } catch (error) {
        next(error)
    }

}
export default Delete