import React, { useState } from "react"
import "./index.css"
import botHero from "./assets/bot-hero.png"

function App() {
  const [prompt, setPrompt] = useState("")

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    console.log("Uploaded file:", file)
    // Later: send this to backend
  }

  const handlePromptSubmit = (e) => {
    e.preventDefault()
    console.log("Prompt submitted:", prompt)
    setPrompt("")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-20 bg-white shadow-md flex flex-col items-center py-4">
        <label className="cursor-pointer mb-4">
          <div className="text-2xl bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600">
            +
          </div>
          <input
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept=".pdf,.png,.jpg,.jpeg"
          />
        </label>
        {/* Optional: Add history buttons here */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 flex flex-col items-center overflow-y-auto">
        <img
          src={botHero}
          alt="Bot Hero"
          className="w-60 h-auto mb-6 animate-fade-in"
        />
        <form onSubmit={handlePromptSubmit} className="w-full max-w-2xl">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask your document something..."
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow-sm"
          />
        </form>

        {/* Placeholder for answers */}
        <div className="mt-6 w-full max-w-2xl bg-white p-4 rounded shadow-sm min-h-[150px]">
          <p className="text-gray-500">AI response will appear here...</p>
        </div>
      </main>
    </div>
  )
}

export default App
