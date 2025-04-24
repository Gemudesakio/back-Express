import bcryptjs from "bcryptjs";

export default (req, res, next) => {
    //extraemos la contrasenia del body
    //la encriptamos y la guardamos en el body
    let password = req.body.password;
    let hashPassword = bcryptjs.hashSync(
        password, 
        10
    )
    req.body.password = hashPassword
    next()
}