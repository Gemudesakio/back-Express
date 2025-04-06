import { Schema,model } from "mongoose";

const collection = 'car'
let schema = Schema({
    name: {type:String, required:true},
    color: {type:String, required:false},
    model: {type:String, required:true},
    car: {type:Schema.Types.ObjectId, ref: 'car' , required:false} 
},
{
 timestamps:true
}
)
let Car = model(collection,schema)

export default Car