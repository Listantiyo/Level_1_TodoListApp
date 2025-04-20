const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema =  new Schema(
    {
        uuid:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true,
            trim:true
        },
        category:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String
        }
    }
)

const TodoModel = mongoose.model('TodoModel', todoSchema);

module.exports = TodoModel;