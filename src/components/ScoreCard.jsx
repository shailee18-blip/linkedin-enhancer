function ScoreCard({ score }) {

  let status = "Good";
  let color = "text-green-400";

  if (score >= 90) {
    status = "Excellent";
    color = "text-blue-400";
  } else if (score >= 70) {
    status = "Good";
    color = "text-green-400";
  } else if (score >= 50) {
    status = "Average";
    color = "text-yellow-400";
  } else {
    status = "Needs Improvement";
    color = "text-red-400";
  }

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h3 className="text-slate-400 text-center mb-4">
        Profile Score
      </h3>

      <div className="flex justify-center">

        <div className="relative w-32 h-32">

          <svg className="w-32 h-32 -rotate-90">

            <circle
              cx="64"
              cy="64"
              r="54"
              stroke="#1e293b"
              strokeWidth="10"
              fill="none"
            />

            <circle
              cx="64"
              cy="64"
              r="54"
              stroke="#3b82f6"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <span className="text-3xl font-bold">
              {score}
            </span>

            <span className="text-sm text-slate-400">
              /100
            </span>

          </div>

        </div>

      </div>

      <p className={`text-center mt-4 font-semibold ${color}`}>
        {status}
      </p>

    </div>
  );
}

export default ScoreCard;