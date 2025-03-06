
import { response } from 'express'
import  User from '../../models/User.js'
let allUsers = async (red,res)=>{
 try {
   let all = await User.find()  //find metodo basico para hacer busqeudas
   return res.status(200).json({
    response: all
   }) 
 } catch (error) {
   return res.status(500).json({
    response: error

   } )
    
 }
}
export default allUsers