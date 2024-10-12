import express from "express";
import path from "node:path";
import ejs from "ejs";

const app = express();

app.use(express.static(path.join('.', 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/welcome', (req, res) => {
    res.render('welcome')
})

export default app;