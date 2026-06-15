const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Pipe open</h1>')
  res.send('<h2>Pipe open 2</h2>')
})

app.get('/sekret', (req, res) => {
  res.send({ what: 'cookies for me'})
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})