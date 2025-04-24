
import  User from '../../models/User.js'
let allUsers = async (req,res,next)=>{
 try {
  let queryParams = req.query
  let {name, role} = queryParams
  let query ={

  }
  if(name){
   console.log("entro");
    query.name = {$regex: '^'+name, $options: 'i'} //expresion regular para hacer busquedas
    //i es indiferente entre mayusculas y minusculas
    //^ es para que busque desde el inicio de la cadena

    /*
 * Opciones disponibles en MongoDBRegex (utilizadas en expresiones regulares dentro de consultas MongoDB):
 *
 * 'i' → Insensible a mayúsculas/minúsculas (case-insensitive):
 *       Permite hacer coincidencias sin tener en cuenta si los caracteres están en mayúscula o minúscula.
 *       Ejemplo: /hola/i coincidirá con "Hola", "HOLA", "hOlA", etc.
 *
 * 'm' → Multilínea (multiline):
 *       Hace que los caracteres ^ (inicio) y $ (fin) coincidan con el inicio y fin de cada línea,
 *       y no solo con el principio y final de todo el string.
 *       Útil para búsquedas dentro de textos largos con saltos de línea.
 *
 * 's' → DotAll:
 *       Permite que el carácter punto (.) coincida con cualquier carácter, incluyendo los saltos de línea (\n),
 *       algo que normalmente no hace por defecto.
 *       Ejemplo: /a.b/s coincidirá con "a\nb".
 *
 * 'x' → Ignora espacios en blanco y permite comentarios en la expresión regular:
 *       Facilita la legibilidad de expresiones complejas.
 *       No es comúnmente soportada en todos los entornos de MongoDB, por lo que se debe verificar su compatibilidad.
 *       Se puede usar para añadir comentarios dentro de la regex.
 *
 * Nota: Estas opciones se pasan como un segundo argumento en el objeto BSON `RegExp` en consultas MongoDB.
 * Ejemplo: { nombre: { $regex: "expresión", $options: "im" } }
 * 
 /*
 * Expresiones regulares comunes en JavaScript y MongoDB:
 *
 * ^abc           → Comienza con "abc".
 * abc$           → Termina con "abc".
 * ^abc$          → Exactamente "abc" (no hay nada antes ni después).
 * ^a.*b$         → Comienza con "a" y termina con "b", con cualquier cosa en medio.
 * ^a.*b.*c$      → Comienza con "a", seguida de cualquier cosa, luego una "b", cualquier cosa y termina en "c".
 * abc            → Contiene "abc" en cualquier parte del texto.
 * .*abc.*        → Igual que la anterior, pero más explícita: cualquier cosa antes y después de "abc".
 * ^.*abc.*$      → Coincide con cualquier cadena que contenga "abc" en cualquier parte.
 * ^[a-zA-Z0-9]$  → Solo un carácter, que puede ser letra o número.
 * ^[a-zA-Z0-9]+$ → Una o más letras o números (al menos uno).
 * ^[a-zA-Z0-9]{3,}$ → Letras o números, con una longitud mínima de 3 caracteres.
 * ^[a-zA-Z0-9]{3,5}$ → Letras o números, entre 3 y 5 caracteres de longitud.
 * ^[a-zA-Z]+$    → Solo letras (mayúsculas o minúsculas), al menos una.
 * ^[0-9]+$       → Solo números (uno o más dígitos).
 * ^[0-9]{4}$     → Exactamente 4 dígitos numéricos. Ideal para validar un PIN, por ejemplo.
 *
 * Estas expresiones se pueden usar tanto en JavaScript como en consultas MongoDB mediante el operador `$regex`.
 */


  
  }
  if(role){
    query.role = role
  }
  

   let all = await User.find(query).populate('car','').exec()  //find metodo basico para hacer busqeudas
   return res.status(200).json({
    response: all
   }) 
 } catch (error) {
  next(error)    
 }
}

let userByName = async (req,res, next)=>{
  try {
    let nameQuery = req.params.nameParams
    let all = await User.find({name: nameQuery }).populate('car','').exec() //find metodo basico para hacer busqeudas
    return res.status(200).json({
      success:true,
      response: all
    }) 
  } catch (error) {
    next(error)
     
  }
 }


 let userById = async (req,res, next)=>{
  try {
    let idQuery = req.params.idParams
    let all = await User.findById(idQuery).populate('car','name model color').exec()  //find metodo basico para hacer busqeudas
    return res.status(200).json({
     response: all
    }) 
  } catch (error) {
    next(error)     
  }
 }

 
export {allUsers,userByName, userById} 