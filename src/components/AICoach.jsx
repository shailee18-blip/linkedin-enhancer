import React from "react";

function AICoach({ loading, showResults }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
          🤖
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-400">
            LinkedIn Coach
          </h2>

          {!loading && !showResults && (
            <p className="text-slate-400">
              Ready to analyze your profile.
            </p>
          )}

          {loading && (
            <p className="text-yellow-400">
              🧠 Reviewing your profile...
            </p>
          )}

          {!loading && showResults && (
            <p className="text-green-400">
              ✅ Analysis complete!
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default AICoach;