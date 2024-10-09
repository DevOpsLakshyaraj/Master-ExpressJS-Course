const express = require("express");
const ejs = require("ejs");
const path = require("path");
const { connectDB } = require('./db');

connectDB()
    .then(() => {
        const app = express();
        const port = 8080;

        app.set('view engine', 'ejs');

        app.use(express.urlencoded({
            extended: true
        }))
        app.use(express.json())

        app.use('/static', express.static(path.join(__dirname, 'public')))
        app.use('/', require('./routes/index'))
        app.use('/api', require('./routes/api'))

        app.listen(port, () => {
            console.log(`Short URL App listening on port ${port}`);
        })
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })

