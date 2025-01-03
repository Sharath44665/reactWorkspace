// import mongoose from 'mongoose';

const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, // adding foreign key
        ref: 'user' // must match from User.js -> User = mongoose.model('user', UserSchema);
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

module.exports = mongoose.model('notes', NotesSchema);
 