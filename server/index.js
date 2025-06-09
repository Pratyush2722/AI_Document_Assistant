const express = require('express')
const multer = require('multer')
const cors = require('cors')
const fs = require('fs')
const pdfParse = require('pdf-parse')
const mammoth = require('mammoth')

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file

  if (!file) return res.status(400).json({ error: 'No file uploaded' })

  let text = ''

  try {
    if (file.mimetype === 'application/pdf') {
      const dataBuffer = fs.readFileSync(file.path)
      const data = await pdfParse(dataBuffer)
      text = data.text
    } else if (
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      const data = await mammoth.extractRawText({ path: file.path })
      text = data.value
    } else {
      return res.status(400).json({ error: 'Unsupported file type' })
    }

    fs.unlinkSync(file.path)

    res.json({ text })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to process document' })
  }
})

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000')
})
