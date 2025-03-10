import Car from '../../models/Car.js'
let allCars = async (req, res)=>{
    try {
        let all = await Car.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
     return res.status(500).json({
        success: false,
        message: 'fatal error',
        error: error.message
     })
        
    }

}
export default allCars