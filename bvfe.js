console.log("HOLA");
const express = require('express');
const PORT =process.env.PORT || 5000;
const fs =  require('fs');
const multer = require('multer');

const app = express();
const { TesseractWorker } = require('tesseract.js');
// const worker = new TesseractWorker();

// Storage
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./upload")
    },
    filename: (req, res, cb) => {
        cb(null, req.file);
    }
});

app.set("view engine", "ejs");
// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res, cb) => {
    res.json(req.body.name);
});

// Listening
app.listen( PORT, () => {
    console.log(`Funcionando en puerto ${PORT}`);
});
const upload = multer({storage: storage})

