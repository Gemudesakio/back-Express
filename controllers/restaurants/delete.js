import Restaurant from "../../models/Restaurant.js";
let deleteFindId = async (req,res,next)=>{
    try {
        let infoRestaurant = req.params.id
        let destroyed = await Restaurant.findByIdAndDelete(
            {_id: infoRestaurant}
        )
        if(destroyed){
            return res.status(200).json({
                success: true,
                response:destroyed
            })
        }else{
           next()
        }
    } catch (error) {
        next(error)
    }
}
export default deleteFindId
