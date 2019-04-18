const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({ "msg": "{Up & Runnig" })
})

app.post('/order', (req, res) => {
  console.log("\n\n\n=========================================================================================== ")
  console.log("====== req.headers: ")
  console.log(req.headers)
  console.log("====== req.params: ")
  console.log(req.params)
  console.log("====== req.body: ")
  console.log(req.body)  
  res.status(200).json("OK")
})

app.post('/payment', (req, res) => {
  console.log("\n\n\n=========================================================================================== ")
  console.log("====== req.headers: ")
  console.log(req.headers)
  console.log("====== req.params: ")
  console.log(req.params)
  console.log("====== req.body: ")
  console.log(req.body)

  res.status(200).json("OK")
})

app.post('/refund', (req, res) => {
  console.log("\n\n\n=========================================================================================== ")
  console.log("====== req.headers: ")
  console.log(req.headers)
  console.log("====== req.params: ")
  console.log(req.params)
  console.log("====== req.body: ")
  console.log(req.body)

  res.status(200).json("OK")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('To shutdown the server: ctrl + c')
})