import React from "react"

function AuthCard({ onSignUp }) {
  return (
    <div className="flex items-center justify-center min-h-screen text-white p-4">

      <div className="w-full max-w-md backdrop-blur-xl bg-gradient-to-br from-black/40 to-blue-900/20 border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in">

        <h2 className="text-3xl font-bold mb-6 text-center drop-shadow text-white/90">
          ✨ Sign Up to AI Assistant
        </h2>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-1 text-white/80">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-white/80">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="********"
          />
        </div>

        <button
          onClick={onSignUp}
          className="w-full py-2 bg-blue-500/80 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Sign In
        </button>

        <p className="text-sm text-center mt-4 text-white/70">
          Already have an account? <span className="underline cursor-pointer text-white">Login</span>
        </p>
      </div>

    </div>
  )
}

export default AuthCard
