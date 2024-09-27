const mongoose = require('mongoose');
const { Schema } = mongoose;

// Custom validator to ensure team members do not exceed 4
function teamMembersLimit(val) {
  return val.length <= 4;
}

// Custom validator to count words
function wordCountLimit(val, maxWords) {
  if (!val) return true; // Allow empty strings
  const wordCount = val.trim().split(/\s+/).length; // Count words by splitting on whitespace
  return wordCount <= maxWords;
}

// Define the schema for the team and participant management for CodeCortex
const codeCortexSchema = new Schema({
  teamId: {
    type: String,
    required: true,
    unique: true,
  },
  TeamName: {
    type: String,
    required: true,
  },
  teamStrength: {
    type: Number,
    required: true,
    min: 1,
    max: 4,
  },
  ideaType: {
    type: String,
    enum: ['sponsors', 'open'],
    required: true,
  },
  ideaTitle: {
    type: String,
    required: true,
    validate: [function(val) { return wordCountLimit(val, 400); }, 'Idea title must be 400 words or less.'],
  },
  ideaDescription: {
    type: String,
    required: true,
    validate: [function(val) { return wordCountLimit(val, 1500); }, 'Idea description must be 1500 words or less.'],
  },
  TeamMembers: {
    type: [{
      ParticipantName: { type: String, required: true },
      RegNo: { type: String, required: true },
      VITEmail: { type: String, required: true },
    }],
    validate: [teamMembersLimit, 'Team cannot have more than 4 members.'],
  }
});

// Compile the schema into a model
const CodeCortexModel = mongoose.model('CodeCortex', codeCortexSchema);

module.exports = CodeCortexModel;
