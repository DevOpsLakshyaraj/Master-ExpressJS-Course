import express from "express";
import path from "node:path";
import ejs from "ejs";
import "dotenv/config";
import { connectDB } from "./db/index.js";
import { authRouter } from "./routes/auth.routes.js";
import { indexRouter } from "./routes/index.routes.js";

connectDB();

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.join('.', 'public')));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/api/auth', authRouter);

export default app;