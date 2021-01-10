# Cargamos la imagen
1. Primero definimos donde y como **multer** va a guardar el archivo que recibe:
    ```javascript
    const upload = multer({
        storage: multer.diskStorage({
            destination: (req, res, cb) => cb(null, "./uploads"),
            filename: (req, res, cb) => cb(null,  res.originalname)),
        }),
    }).single('file');
    ```
    > "file" es el nombre que pusimos al input (file) del front.

3. Completamos "/upload" con el siguiente código:
    ```javascript
    app.post('/upload', (req, res) => {
        upload(req, res, function (err) {
            if (err) {
                return console.log("Hubo un error al cargar el archivo. Detalle:", err);
            }
        });
    });
    ```
4. Verificamos que al cargar una imagen se guarde con su nombre original en "./uploads".
