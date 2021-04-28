const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const reportSchema = new mongoose.Schema({
  userid: {
    type: ObjectId,
    ref: 'User'
  },
  age: {
    type: Number,
    required: true,
    maxlength: 3
  },
  symptoms: {
    type: String,
    required: true,
    maxlength: 500
  },
  date: {
    type: String,
    required: true
  },
  sampleid: {
    type: String,
    required: true
  },
  collected: {
    type: Boolean,
    default: false
  },
  processing: {
    type: Boolean,
    default: false
  },
  result: {
    type: String,
    trim: true,
    maxlength: 2000
  }
}, {timestamps: true});

module.exports = mongoose.model('Report', reportSchema);
