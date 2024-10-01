import express from "express";
import path from "path";
import multer from "multer";
import merge from "./utils/merge.js";
const app = express();
const port = 8080;

const upload = multer({ dest: 'uploads' });

app.use(express.static(path.join(import.meta.dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, 'templates/index.html'))
})

app.post('/merge', upload.array('pdfs'), async (req, res) => {
    const filename = await merge(req.files);
    
    res.redirect(`/pdfs/${filename}.pdf`);
})

app.listen(port, () => {
    console.log(`PDF Merge Utility listening on port ${port}`)
})