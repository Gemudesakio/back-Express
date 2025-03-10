import User from "../../models/User.js"

let create = async (req, res, next)=>{
    try {
       let userData=req.body
       
       let newUser = await User.create(userData)
       return res.status(201).json({
         response: newUser
       })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: 'fatal error',
            error: error.message
        })
        
    }
}
export default create