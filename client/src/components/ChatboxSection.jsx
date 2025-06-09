import React, { useState } from "react"
import axios from "axios"

function ChatbotSection() {
  const [file, setFile] = useState(null)
  const [docText, setDocText] = useState("")
  const [image, setImage] = useState(null)

  const handleUpload = async () => {
    if (!file) return
    const formData = new FormData()
    formData.append("file", file)

    const res = await axios.post("http://localhost:5000/upload", formData)
    setDocText(res.data.text)
  }

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-black/40 to-blue-900/30 border border-white/20 rounded-2xl shadow-2xl w-full max-w-2xl p-6 text-white animate-fade-in">

      <h2 className="text-3xl font-semibold text-white/90 mb-4 text-center drop-shadow">
        🤖 Ask your document assistant
      </h2>

      {/* Upload UI */}
      <input 
        type="file"
        onChange={(e) => {
          const selected = e.target.files[0]
          setFile(selected)
          if (selected.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.onload = () => setImage(reader.result)
            reader.readAsDataURL(selected)
          }
        }}
        className="mb-4 w-full bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-2 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        accept=".pdf,.docx,.jpg,.jpeg,.png"
      />

      <button
        onClick={handleUpload}
        className="w-full mb-4 py-2 bg-blue-500/80 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300"
      >
        Upload & Parse
      </button>

      {image && (
        <div className="mb-4">
          <img src={image} alt="Preview" className="rounded-lg shadow-lg max-h-60 mx-auto" />
        </div>
      )}

      {docText && (
        <div className="border border-white/20 rounded-lg p-3 mb-4 min-h-[150px] text-white/90 bg-white/10 overflow-y-auto max-h-64">
          <pre className="whitespace-pre-wrap">{docText}</pre>
        </div>
      )}

      <input
        type="text"
        placeholder="Ask something about your doc..."
        className="w-full p-4 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default ChatbotSection
