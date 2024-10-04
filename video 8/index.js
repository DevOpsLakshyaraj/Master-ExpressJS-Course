const express = require('express');
const connectDB = require('./db');
const ejs = require('ejs');
const { Users } = require('./models/user.model');

const port = 8080;
const app = express();

app.set('view engine', 'ejs');

connectDB();

app.get('/', async (req, res) => {
    // const users = await Users.find().select('-_id');
    const users = await Users.find();
    res.render('index', { users });
})

app.get('/user/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);
    res.render('info', { user })
})

app.listen(port, () => {
    console.log('Express App listening on port', port);
})
