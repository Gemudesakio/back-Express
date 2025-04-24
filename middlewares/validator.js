

const validator = (schema) => [
  (req, res, next) => {
    const validate = schema.validate(req.body, {
        abortEarly: false, //en true detiene la validacion al primer error
        //en false valida todos los errores, no solo el primero
    })
     if(validate.error){
        return res.status(400).json({
            success: false,
            message: validate.error.details.map(err => err.message)
        })
     }
        next()
  }
]

export default validator