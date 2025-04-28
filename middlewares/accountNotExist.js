import User from "../models/User.js";
export default async (req, res, next) => {
    try {
        let mail = req.body.email
        let account = await User.findOne({ email: mail })
        if (!account) {
            return res.status(400).json({
                success: false,
                message: "No existe una cuenta con este email"
            })
        }
        console.log("Cuenta encontrada:", account);
        req.user = account 
        next()
    } catch (error) {
        next(error)
        
    }
}