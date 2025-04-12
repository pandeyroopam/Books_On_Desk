const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users');

const listingSchema = new Schema({
    title: {
        type : String,
        required: true,
    },
    image : {
        url : String,
        filename: String,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    price : Number,
    owner : {
        type: Schema.Types.ObjectId,
        ref: User,
    },
    isdc : {
        type: Number,
        required: true,
    },
    genre : [String],
    
})