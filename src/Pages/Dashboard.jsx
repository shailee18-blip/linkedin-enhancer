import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ScoreCard from "../components/ScoreCard";
import AICoach from "../components/AICoach";
function Dashboard() {
const [profileText, setProfileText] = useState("");
const [showResults, setShowResults] = useState(false);
const [loading, setLoading] = useState(false);

const [darkMode, setDarkMode] = useState(true);
const [score, setScore] = useState(0);
const [skills, setSkills] = useState([]);
const [headlineSuggestions, setHeadlineSuggestions] = useState([]); 
const [aboutImprovements, setAboutImprovements] = useState([]);
const [feedback, setFeedback] = useState("");
const handleAnalyze = async () => {
  if (!profileText.trim()) {
    alert("Please paste your LinkedIn profile content first.");
    return;
  }

  try {
    setLoading(true);
    setShowResults(false);

    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profileText,
      }),
    });

    const data = await response.json();

    setTimeout(() => {
      setScore(data.score);
setSkills(data.skills);
setHeadlineSuggestions(data.headlineSuggestions);
setAboutImprovements(data.aboutImprovements);
setFeedback(data.feedback);
      setLoading(false);
      setShowResults(true);
    }, 3000);

  } catch (error) {
    console.error(error);
    setLoading(false);
    alert("Failed to connect to AI");
  }
};


return (
<div
className={
darkMode
? "min-h-screen bg-slate-950 text-white"
: "min-h-screen bg-gray-100 text-black"
}
> <div className="flex">


    <Sidebar />
    

    {/* Main Content */}
    <div className="flex-1 p-8 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <AICoach
         loading={loading}
         showResults={showResults}
        />

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-5xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-slate-400 mt-2">
              Paste your LinkedIn profile content and get AI-powered suggestions.
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-600 px-4 py-2 rounded-xl"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

        </div>

        {/* Stats */}

{showResults && (
<div className="grid md:grid-cols-3 gap-6 mb-8">

  <ScoreCard score={score} />

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">


<h3 className="text-slate-400">
  Skills Found
</h3>

<p className="text-4xl font-bold text-green-500 mt-4">
  {skills.length}
</p>


  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">


<h3 className="text-slate-400">
  Improvements
</h3>

<p className="text-4xl font-bold text-orange-500 mt-4">
  {aboutImprovements.length}
</p>


  </div>

</div>
)}
        {/* Input Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            LinkedIn Profile Content
          </h2>

          <textarea
            value={profileText}
            onChange={(e) => setProfileText(e.target.value)}
            placeholder="Paste your headline, about section, experience, skills, etc..."
            className="w-full h-64 bg-slate-800 rounded-xl p-4 text-white outline-none resize-none"
          />
          <button
  onClick={handleAnalyze}
  disabled={loading}
  className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
>
  {loading ? "Analyzing..." : "Analyze Profile"}
</button>

          {loading && (
            <div className="mt-6 flex flex-col items-center">

              <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>

              <p className="mt-4 text-slate-400">
                AI is analyzing your profile...
              </p>

            </div>
          )}

        </div>

        {/* Results */}
        
        {/* Results */}
{showResults && (
  <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

    <h2 className="text-2xl font-bold mb-4 text-blue-400">
      AI Analysis
    </h2>

    <div className="mt-10 grid md:grid-cols-2 gap-6">

  <div className="bg-slate-800 rounded-2xl p-6">
    <h2 className="text-xl font-bold text-blue-400 mb-4">
      Headline Suggestions
    </h2>

    <ul className="space-y-2">
      {headlineSuggestions.map((item, index) => (
        <li key={index}>✓ {item}</li>
      ))}
    </ul>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <h2 className="text-xl font-bold text-green-400 mb-4">
      About Improvements
    </h2>

    <ul className="space-y-2">
      {aboutImprovements.map((item, index) => (
        <li key={index}>✓ {item}</li>
      ))}
    </ul>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <h2 className="text-xl font-bold text-orange-400 mb-4">
      Recommended Skills
    </h2>

    <ul className="space-y-2">
      {skills.map((item, index) => (
        <li key={index}>🚀 {item}</li>
      ))}
    </ul>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <h2 className="text-xl font-bold text-purple-400 mb-4">
      AI Feedback
    </h2>

    <p>{feedback}</p>
  </div>

</div>

  </div>
)}

      </div>

    </div>

  </div>
</div>


);
}

export default Dashboard;
