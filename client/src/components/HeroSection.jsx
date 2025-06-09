// src/components/HeroSection.jsx
import React from "react"
import botHero from "../assets/bot-hero.png"

function HeroSection({ onStart }) {
  return (
    <div className="text-center animate-fade-in">
      <img src={botHero} alt="Bot Hero" className="w-100  mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-white mb-2">AI Document Assistant</h1>
      <p className="text-lg text-gray-600 mb-6">Summarize. Ask. Understand your docs in seconds.</p>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  )
}

export default HeroSection
