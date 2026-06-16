import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({
  profileText: String,
  score: Number,
  skills: [String],
  headlineSuggestions: [String],
  aboutImprovements: [String],
  feedback: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Analysis", AnalysisSchema);