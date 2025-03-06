import mongoose from "mongoose";
let url = process.env.URI_MONGO



/* //conexion asincrona
mongoose.connect(url)
.then(()=>console.log("database connected"))
.catch(error => console.log(error)) */

//conexion sincrona
async function connectDB(){
    try {
       await mongoose.connect(url)
       console.log("database connected 1");
       
    } catch (error) {
        console.log("No se pudo conectar ala base de datos"+ error);
        
    }
}
connectDB()
// Generar un arreglo de objetos(usuario) 30, cada usuario va a tener la siguiente informacion
//name(string), email(string), pasword(string), foto(string), role(number de 1 a 3)