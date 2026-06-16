import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);
  const totalAnalyses = history.length;

const averageScore =
  history.length > 0
    ? Math.round(
        history.reduce(
          (sum, item) => sum + item.score,
          0
        ) / history.length
      )
    : 0;

const bestScore =
  history.length > 0
    ? Math.max(
        ...history.map((item) => item.score)
      )
    : 0;
  useEffect(() => {
    fetch("http://localhost:5000/history")
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error(err));
  }, []);

  const deleteAnalysis = async (id) => {
    try {
      await fetch(`http://localhost:5000/history/${id}`, {
        method: "DELETE",
      });

      setHistory(
        history.filter((item) => item._id !== id)
      );

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Analysis History
      </h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">

  <div className="bg-slate-900 p-6 rounded-2xl">
    <h3 className="text-slate-400">
      Total Analyses
    </h3>

    <p className="text-4xl font-bold text-blue-400 mt-4">
      {totalAnalyses}
    </p>
  </div>

  <div className="bg-slate-900 p-6 rounded-2xl">
    <h3 className="text-slate-400">
      Average Score
    </h3>

    <p className="text-4xl font-bold text-green-400 mt-4">
      {averageScore}
    </p>
  </div>

  <div className="bg-slate-900 p-6 rounded-2xl">
    <h3 className="text-slate-400">
      Best Score
    </h3>

    <p className="text-4xl font-bold text-orange-400 mt-4">
      {bestScore}
    </p>
  </div>

</div>
      <div className="space-y-6">

        {history.map((item) => (
          <div
            key={item._id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-blue-400">
              Score: {item.score}/100
            </h2>

            <p className="text-slate-400 mt-2">
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">
                Skills
              </h3>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-slate-300">
              {item.feedback}
            </p>

            <button
              onClick={() => deleteAnalysis(item._id)}
              className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
            >
              🗑 Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default History;