const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  
  jobId: {
    type: Number,
    required: true,
    unique: true
  },
  
  title: {
    type: String,
    required: true
  },
  
  company: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  jobLink: {
    type: String,
    required: true
  },

  employmentType: {
    type: String
  },

  experience: {
    type: String
  },

  source: {
    type: String
  },

  country: {
    type: String
  },

  postedDateTime: {
    type: Date
  },

  companyImageUrl: {
    type: String
  },

  min_exp: {
    type: Number
  },

  max_exp: {
    type: Number
  }

},{timestamps: true});

module.exports = mongoose.model('Job', jobSchema);
