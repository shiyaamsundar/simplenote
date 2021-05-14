const mongoose = require('mongoose');

let NotesSchema=new mongoose.Schema({
    tags:[String],
    created:Date,
    modified:Date,
    data:String,
    pinned:Boolean
      

},{timestamps:true})

module.exports=mongoose.model('notes',NotesSchema)