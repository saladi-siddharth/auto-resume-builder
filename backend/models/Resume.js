const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  template: { type: String, default: 'modern' },
  data: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    summary: String,
    experience: [{
      company: String,
      role: String,
      startDate: String,
      endDate: String,
      description: String
    }],
    education: [{
      institution: String,
      degree: String,
      year: String
    }],
    skills: [String]
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', resumeSchema);