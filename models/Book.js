import { Schema,model } from "mongoose";

const collection = 'book'
let schema = Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    publicationYear:{type:Number,required:true}
}, {
    timestamps:true
})

let Book = model(collection,schema)
export default Book