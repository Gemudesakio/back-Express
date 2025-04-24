import User from "../models/User.js";
import bcrypt from "bcryptjs";

export default async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "No existe una cuenta con este email"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Contraseña enviada:", password);
        console.log("Hash guardado:", user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "La contraseña es incorrecta"
            });
        }

        next();
    } catch (error) {
        next(error);
    }
};
