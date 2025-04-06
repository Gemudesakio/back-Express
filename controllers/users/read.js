
import  User from '../../models/User.js'
let allUsers = async (req,res,next)=>{
 try {
   let all = await User.find().populate('car','').exec()  //find metodo basico para hacer busqeudas
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