# Preparamos el entorno
1. Inicializamos npm en el workspace (simplemente se crea un package.json). \
`npm init -y`
2. Instalamos la primer tanda de dependencias:
`npm install ejs express multer tesseract.js@next`
    1. **ejs:** Crear paginas web de forma sencillas en node.js.
    2. **express:** Framework de back end para node.js.
    3. **multer:** Middleware para la carga de archivos.
    4. **tesseract.js:** El OCR más famoso en su versión JS.
3. Instalamos Nodemon como dependencia de desarrollo.
`npm install --save-dev nodemon`
    1. **nodemon:** Reinicia automáticamente la aplicación cuando detecta algún cambio.
4. Agregamos o modificamos en nuestro `package,json` en `"scripts": { ...`: \
`"start": "nodemon app.js"`
5. Actualizamos nuestro `,gitignore` \
    ```
    # Dependency directories
    node_modules/
    ```
6. Publicamos.