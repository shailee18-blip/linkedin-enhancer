import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import mongoose from "mongoose";
import Analysis from "./models/Analysis.js";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
  });
const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Home Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Analyze Route
app.post("/analyze", async (req, res) => {
  try {
    const { profileText } = req.body;

    console.log("Received Profile:");
    console.log(profileText);

    const prompt = `
You are a LinkedIn Profile Analyzer.

Return ONLY valid JSON.

No markdown.
No explanation.
No code blocks.

Format:

{
  "score": 0,
  "headlineSuggestions": [],
  "aboutImprovements": [],
  "skills": [],
  "feedback": ""
}

LinkedIn Profile:

${profileText}
`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
    });

    let output =
      completion.choices[0].message.content;

    // Remove markdown if AI still adds it
    output = output
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("AI Response:");
    console.log(output);

    const parsedData = JSON.parse(output);
    await Analysis.create({
    profileText,
    score: parsedData.score,
    skills: parsedData.skills,
    headlineSuggestions: parsedData.headlineSuggestions,
    aboutImprovements: parsedData.aboutImprovements,
    feedback: parsedData.feedback,
   });
    res.json(parsedData);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});
app.get("/history", async (req, res) => {
  try {
    const analyses = await Analysis.find()
      .sort({ createdAt: -1 });

    res.json(analyses);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch history",
    });
  }
});
app.delete("/history/:id", async (req, res) => {
  try {

    const deletedAnalysis =
      await Analysis.findByIdAndDelete(
        req.params.id
      );

    if (!deletedAnalysis) {
      return res.status(404).json({
        error: "Analysis not found",
      });
    }

    res.json({
      message: "Analysis deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to delete analysis",
    });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});