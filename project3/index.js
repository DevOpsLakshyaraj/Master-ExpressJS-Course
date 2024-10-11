import app from "./src/app.js";

const port = 8080 || process.env.PORT;

app.listen(port, () => {
    console.log(`Auth App listening on port ${port}`);
})