import mongoose from "mongoose";

import { Schema } from "mongoose";

// question model

const questionModel = new Schema({
    question : {type:String, default:''},
    type: {type:String,default:'obj'},
    options : {type:String, default:''},
    answer: {type:String, default:''},
    seconds: {type:String, defailt:''},
    createdAt: {type:Date,default:Date.now},
},{ versionKey: false})


export default mongoose.model('questionModel',questionModel);