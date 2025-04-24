import joi from 'joi-oid';
const schema = joi.object(
    {
        // Nota: Si se envía un número entero en el campo "name", Joi lo convierte automáticamente en una cadena.
        // Para evitar esta conversión y validar estrictamente el tipo de dato, se puede usar .strict() en la validación.
        email: joi.string().required().email().messages({
            'string.base': 'El email debe ser una cadena de texto',
            'string.empty': 'El email no puede estar vacío',
            'string.email': 'El email no es válido',
            'any.required': 'El email es un campo obligatorio'
        }),
        password: joi.string().required().min(6).max(20).messages({
            'string.base': 'La contraseña debe ser una cadena de texto',
            'string.empty': 'La contraseña no puede estar vacía',
            'string.min': 'La contraseña debe tener al menos 6 caracteres',
            'string.max': 'La contraseña no puede tener más de 20 caracteres',
            'any.required': 'La contraseña es un campo obligatorio'
        })
    }
)

export default schema