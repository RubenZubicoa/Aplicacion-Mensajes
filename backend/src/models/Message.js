import {Schema, Model, model} from 'mongoose';

const schema = new Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    author: {
        type:String,
        required:true
    }
})
export default model('Message', schema);