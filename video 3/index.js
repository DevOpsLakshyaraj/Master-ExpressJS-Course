const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8080

app.use(cookieParser())

app.get('/', (req, res) => {
  console.log(req.hostname)
  console.log(req.ip)
  console.log(req.route.path)
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    console.log(req.baseUrl)
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
  res.redirect('https://www.youtube.com/@devopslakshyaraj')
})

app.use('/blog', require('./routes/base'))

app.listen(port, () => {
  console.log(`First app listening on port ${port}`)
})