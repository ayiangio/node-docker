require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Endpoint */
app.get('/home', (req, res) => {
  result = {
    "Message" : `First CICD Deployment`,
    "Status Code" : 200,
  }
  res.json(result)
})

module.exports = app