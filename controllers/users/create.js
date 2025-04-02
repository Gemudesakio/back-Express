import User from "../../models/User.js"

let create = async (req, res, next)=>{
    try {
       let userData=req.body
       
       let newUser = await User.insertMany(userData)
       return res.status(201).json({
         response: newUser
       })
        
    } catch (error) {
        next(error)
        
    }
}
export default create