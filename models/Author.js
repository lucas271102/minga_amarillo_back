import {Schema, Types, model} from "mongoose"
let schema = new Schema({
name:{type: String, required:true},
las_name: {type:String, required:false},
city:{type:String, required:true},
country:{type:String, required: true},
date:{type:Date},
photo:{String, required: true},
active:{type:Boolean, required:true},
user_id:{
    type:Types.ObjectId,
    ref:'users',
    required:true
}

},{
    timestamps:true
})
let collection= 'authors'
let Author= model(schema, collection)
export default Author
