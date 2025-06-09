// src/App.jsx
import React, { useState } from "react"
import "./index.css"
import HeroSection from "./components/HeroSection"
import ChatbotSection from "./components/ChatboxSection"
import AuthCard from "./components/AuthCard"

function App() {
  const [step, setStep] = useState("auth") // 'auth' → 'hero' → 'chat'

  const renderStep = () => {
    switch (step) {
      case "auth":
        return <AuthCard onSignUp={() => setStep("hero")} />
      case "hero":
        return <HeroSection onStart={() => setStep("chat")} />
      case "chat":
        return <ChatbotSection />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      {renderStep()}
    </div>
  )
}

export default App
