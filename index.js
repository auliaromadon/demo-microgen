const microgenV3 = require("microgen-v3-sdk")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('I am using Kontenbase Function.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
