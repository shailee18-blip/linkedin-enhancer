import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 p-8 rounded-3xl w-105 relative z-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Start optimizing your LinkedIn profile with AI.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-xl mb-4 bg-slate-800 text-white outline-none border border-slate-700"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-xl mb-4 bg-slate-800 text-white outline-none border border-slate-700"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-slate-400"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <Link to="/dashboard">
          <button className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl text-white font-semibold mt-6">
            Create Account
          </button>
        </Link>

        <button className="w-full bg-white text-black p-4 rounded-xl font-semibold mt-4">
          Continue with Google
        </button>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-400"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;