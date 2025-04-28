import joi from 'joi-oid';

const schema = joi.object(
    {
        // Nota: Si se envía un número entero en el campo "name", Joi lo convierte automáticamente en una cadena.
        // Para evitar esta conversión y validar estrictamente el tipo de dato, se puede usar .strict() en la validación.
        name: joi.string().required().alphanum().messages({
            'string.base': 'El nombre debe ser una cadena de texto',
            'string.empty': 'El nombre no puede estar vacío',
            'string.alphanum': 'El nombre solo puede contener letras y números',
            'any.required': 'El nombre es un campo obligatorio'
        }),
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
        }),
        photo: joi.string().uri().messages({
            'string.base': 'La foto debe ser una cadena de texto',
            'string.empty': 'La foto no puede estar vacía',
            'string.uri': 'La foto debe ser una URL válida'
        }),
        role: joi.number().required().min(1).max(3).messages({
            'number.base': 'El rol debe ser una cadena de texto',
            'number.empty': 'El rol no puede estar vacío',
            'number.min': 'El rol debe ser minimo 1',
            'number.max': 'El rol debe ser maximo 3',
            'any.required': 'El rol es un campo obligatorio'
        }),
        online: joi.boolean().messages({
            'boolean.base': 'El estado online debe ser un booleano',
            'any.required': 'El estado online es un campo obligatorio'
        })
    }
)

export default schema