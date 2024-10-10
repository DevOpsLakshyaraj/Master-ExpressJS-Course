const express = require('express');
const ejs = require('ejs');
const users = require('./data/users');

const app = express();
const port = 8080 || process.env.PORT;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Deployment Tutorial', users: users })
})

app.get('/user/:id', (req, res) => {
    if (!req.params.id) {
        res.redirect('/');
    } else {
        const user = users.filter(item => {
            return item.id === parseInt(req.params.id);
        })[0];
        res.render('info', { user: user })
    }
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Express App listening on port ${port}`);
})
