import Restaurant from "../../models/Restaurant.js";

let update = async (req,res, next)=>{
    try {
        let RestaurantInfo = req.body
        console.log(RestaurantInfo);
        let updateRestaurant = await Restaurant.updateOne(
            {name: RestaurantInfo.name}, //condiciones de busqueda
            {rating: RestaurantInfo.rating} //modificaciones
        )
        return res.status(201).json({
            response: updateRestaurant
        })
        
    } catch (error) {
        next(error)
    }
}

export default update