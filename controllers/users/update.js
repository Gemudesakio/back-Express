import User from "../../models/User.js";
//update con metodo updateOne
let update = async (req,res, next)=>{
    try {
        let userInfo = req.body
        console.log(userInfo);
        let updateUser = await User.updateOne(
            {name: userInfo.name}, //condiciones de busqueda
            {car: userInfo.car} //modificaciones
        )
        return res.status(201).json({
            response: updateUser
        })
        
    } catch (error) {
        next(error)
    }
}
/* update con metodo updateMany => exactamente igual al updateOne 
la diferencia esta en que updateMany va a buscar a todos los objetos que cumpland la condicion
mientras que update One solo buscara el primero  */

//update con metodo findOneAndUpdate
let findUpdate = async (req,res,next)=>{
    try {
        let busqueda = req.params.id
        let infoUser = req.body
        let updateUser = await User.findOneAndUpdate(
            {_id: busqueda },
            {name: infoUser.name},
            {new: true}
        )
    if (updateUser) {
        return res.status(201).json({
            success: true,
            reponse: updateUser
        })
    }else {
        return res.status(404).json({ response: 'not found' })
    }  
       
    } catch (error) {
        next(error)
    }

}

export {update,findUpdate}