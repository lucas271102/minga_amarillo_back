import mongoose from "mongoose";
let schema= new mongoose.Schema({
    name:{type:String, required: true},
    logo:{type:String, reuired: true},
    website:{type:String, required: true},
    description:{type:String, required:false},
    active:{type:Boolean, required:true},
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'users',
        required:true
    }
})
let collection = 'companies'
let Company= mongoose.model(schema, collection)
export default Company