import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-blue-500">
          LinkedIn Enhancer
        </h1>

        <div className="space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 rounded-lg hover:bg-slate-800">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      <section className="relative flex flex-col items-center justify-center text-center mt-24 px-6">

        <div className="absolute w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight z-10">
          Optimize Your LinkedIn Profile Using AI
        </h1>

        <p className="text-slate-400 text-xl mt-6 max-w-2xl z-10">
          Get personalized suggestions, improve recruiter visibility,
          and make your profile stand out.
        </p>

        <div className="mt-8 flex gap-4 z-10">
          <Link to="/signup">
            <button className="bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>

      </section>
    </div>
  );
}

export default Landing;