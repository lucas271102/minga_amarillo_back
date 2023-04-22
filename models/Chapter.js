import { Schema, Types, model } from "mongoose";
let schema = new Schema({
    manga_id:{
        type:Types.ObjectId,
        ref:'mangas',
        required: true
    },
    title:{type:String, required: true}, 
    cover_photo:{type:String}
})
let collection='chapters'
let Chapter = model(collection, schema)
export default Chapter