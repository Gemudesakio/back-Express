
import  User from '../../models/User.js'
let allUsers = async (req,res)=>{
 try {
   let all = await User.find()  //find metodo basico para hacer busqeudas
   return res.status(200).json({
    response: all
   }) 
 } catch (error) {
   return res.status(500).json({
    success: false,
    message: 'Error al obtener los usuarios',
    error: error.message             

   } )
    
 }
}

let userByName = async (req,res, next)=>{
  try {
    let nameQuery = req.params.nameParams
    let all = await User.find({name: nameQuery })  //find metodo basico para hacer busqeudas
    return res.status(200).json({
     response: all
    }) 
  } catch (error) {
    return res.status(500).json({
     success: false,
     message: 'Error al obtener los usuarios',
     error: error.message             
 
    } )
     
  }
 }


 let userById = async (req,res, next)=>{
  try {
    let idQuery = req.params.idParams
    let all = await User.findById(idQuery)  //find metodo basico para hacer busqeudas
    return res.status(200).json({
     response: all
    }) 
  } catch (error) {
    return res.status(500).json({
     success: false,
     message: 'Error al obtener los usuarios',
     error: error.message             
 
    } )
     
  }
 }

 
export {allUsers,userByName, userById} 