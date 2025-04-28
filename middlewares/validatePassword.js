import User from "../models/User.js";
import bcrypt from "bcryptjs";

export default async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        const isPasswordValid = await bcrypt.compare(password, user.password);
      

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
