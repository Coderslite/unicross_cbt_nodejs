import mongoose from "mongoose";

import { Schema } from "mongoose";

// question model

const questionModel = new Schema({
    question :{type:String, default:''},
    options : {type:Array, default:[]},
    answer: {type:String, default:''},
    createdAt: {type:Date,default:Date.now},
},{ versionKey: false })


export default mongoose.model('questionModel',questionModel);