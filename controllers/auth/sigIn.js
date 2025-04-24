import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Usuario inicio sesion correctamente"
        })
    } catch (error) {
        next(error)
        
    }
}