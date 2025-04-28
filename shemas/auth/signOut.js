import Joi from "joi-oid";

const schema = Joi.object({
    // Nota: Si se envía un número entero en el campo "name", Joi lo convierte automáticamente en una cadena.
    // Para evitar esta conversión y validar estrictamente el tipo de dato, se puede usar .strict() en la validación.
    email: Joi.string()
        .required()
        .email()
        .messages({
            "string.base": "El email debe ser una cadena de texto",
            "string.empty": "El email no puede estar vacío",
            "string.email": "El email no es válido",
            "any.required": "El email es un campo obligatorio",
        }),
})
export default schema;