# Creamos nuestra vista
1. En la raiz del proyecto creamos una carpeta llamada **views** y dentro un archivo llamado **index.ejs**.
2. Dentro de index.html colocamos el siguiente código:
    ```html
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OCR | Tesseract JS</title>
    </head>

    <body>
        <h1>Cargue su imagen:</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="file">
            <button type="submit">Subir</button>
        </form>
    </body>

    </html>
    ```
    > No olvidarse en el formulario `enctype="multipart/form-data"` para habilitar el envío de archivos.

3. En nuestro "app.js" nos vinculamos mediante **ejs** escribiendo:

    `app.set("view engine", "ejs");`

4. Creamos la ruta a la vista:
    ```javascript
    app.get('/', (req, res) => {
        res.render('index');
    });
    ```
5. Creamos la ruta POST del formulario:
    ```javascript
    app.post('/upload', (req, res) => {

    });
    ```
6. En el siguiente paso cargaremos el archivo con **multer**.