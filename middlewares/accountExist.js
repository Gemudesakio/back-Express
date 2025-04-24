import User from "../models/User.js"

//revisamos si ya existe el email en la base de datos
//si existe el email, no se puede crear el usuario
//si no existe el email, se puede crear el usuario
export default async (req, res, next) => {
    try {
        let mail = req.body.email
        let account = await User.findOne({ email: mail })
        if (account) {
            return res.status(400).json({
                success: false,
                message: "Ya existe una cuenta con este email"
            })
        }
        next()
    } catch (error) {
        next(error)
        
    }
}