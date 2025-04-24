import { Schema,model } from "mongoose";

const collection = 'car'
let schema = Schema({
    name: {type:String, required:true},
    color: {type:String, required:false},
    model: {type:String, required:true},
},
{
 timestamps:true
}
)
let Car = model(collection,schema)

export default Car