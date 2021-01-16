const express = require('express');
const multer = require('multer');
const { createWorker } = require('tesseract.js');
const fs = require('fs');

// const worker = createWorker({
//     logger: m => console.log(m)
// });


const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Funcionando en puerto ${PORT}`);
});

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, res, cb) => cb(null, "./uploads"),
        filename: (req, res, cb) => cb(null, res.originalname),
    }),
}).single('file');

app.set("view engine", "ejs");

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            return console.log("Hubo un error al cargar el archivo. Detalle:", err);
        }
        fs.readFile(`./uploads/${req.file.originalname}`, (err, fdata) => {
            if (err) return console.log("Hubo un error al leer el archivo. Detalle:", err);

         console.log(`Reconociendo imagen`);

            (async () => {
                const worker = createWorker();
                await worker.load();
                await worker.loadLanguage('spa');
                await worker.initialize('spa');
                const { data: { text } } = await worker.recognize(fdata);
                console.log(text);
                res.send(text);
                await worker.terminate();
                console.log(`Trabajo terminado`);
            })();


        });
    });
});

