const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const taskSchema=new Schema({
    titulo: String,
    autor: String,
    categoria: String,
    status: {
        type: Boolean,
        default: false
    }
});
module.exports=mongoose.model('task', taskSchema);