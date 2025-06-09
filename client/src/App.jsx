// src/App.jsx
import React, { useState } from "react"
import "./index.css"
import HeroSection from "./components/HeroSection"
import ChatbotSection from "./components/ChatboxSection"

function App() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      {showChat ? <ChatbotSection /> : <HeroSection onStart={() => setShowChat(true)} />}
    </div>
  )
}

export default App
