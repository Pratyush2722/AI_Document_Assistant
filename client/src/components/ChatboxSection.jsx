// src/components/ChatbotSection.jsx
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
    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ask your document assistant</h2>

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
        className="mb-4"
        accept=".pdf,.docx,.jpg,.jpeg,.png"
      />

      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Upload & Parse
      </button>

      {image && (
        <div className="mb-4">
          <img src={image} alt="Preview" className="rounded shadow max-h-60" />
        </div>
      )}

      {docText && (
        <div className="border border-gray-300 rounded-lg p-3 mb-4 min-h-[150px] text-gray-700 overflow-y-auto">
          <pre className="whitespace-pre-wrap">{docText}</pre>
        </div>
      )}

      <input
        type="text"
        placeholder="Ask something about your doc..."
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default ChatbotSection
