const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    deadLine:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required: true
     }
},{
    timestamps: true 
});

const Todo = mongoose.model('Todo', toDoSchema) ;

module.exports = Todo ;