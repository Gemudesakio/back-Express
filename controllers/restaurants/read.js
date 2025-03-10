import Restaurant from '../../models/Restaurant.js'
let allRestaurants = async (req , res)=>{
    try {
        let all = await  Restaurant.find()
        return res.status(200).json({
            success:true,
            restaurants:all
        })
    } catch (error) {
        return res.status(500),json({
            success:false,
            message:'fatal error',
            error: error.message
        })
    }
}
export default allRestaurants