const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Foris and Fanis is open</h1>')
})

app.get('/sekret', (req, res) => {
  res.send({ what: 'cookies for me'})
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})