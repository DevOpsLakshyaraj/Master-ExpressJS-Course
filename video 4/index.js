const express = require('express')
const cookieParser = require('cookie-parser')
const m1 = require('./middlewares/m1')
const app = express()
const port = 8080

app.use(cookieParser());
// app.use(m1);

app.get('/', (req, res) => {
  res.send('Middlewares in expressjs')
})

app.get('/about', (req, res) => {
  res.send('About me')
})

app.use('/blog', m1, require('./routes/base'));

app.listen(port, () => {
  console.log(`First app listening on port ${port}`)
})