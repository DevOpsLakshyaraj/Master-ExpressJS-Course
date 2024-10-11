import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Auth App Project!'
    })
})

export default app;