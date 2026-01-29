const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user'); // Assuming you have a User model

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // assumes you have a User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;