import Restaurant from '../../models/Restaurant.js'
let allRestaurants = async (req , res,next)=>{
    try {
        let all = await  Restaurant.find()
        return res.status(200).json({
            success:true,
            restaurants:all
        })
    } catch (error) {
        next(error)
    }
}
export default allRestaurants