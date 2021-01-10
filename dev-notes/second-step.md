# Creamos nuestro app.js
1. En la consola ejecutamos npm start para que Nodemon vaya ejecutando a medida que guardemos y podamos ver si hay un error

2. Importamos nuestras dependencias:
    ```javascript
    const express = require('express');
    const multer = require('multer');
    const { TesseractWorker } = require('tesseract.js');
    const fs =  require('fs');
    ```
    > **fs:** El módulo *"File System"* es nativo de Node y permite trabajar con el sistema de archivos de la computadora.

3. Asignamos express() a la constante app: `const app = express()`
4. Asignamos un puerto a la constante PORT: `const PORT = process.env.PORT || 5000`
5. Escuchamos con express desde PORT:
    ```javascript
    app.listen( PORT, () => {
        console.log(`Funcionando en puerto ${PORT}`);
    });
    ```
6. Verificamos que en consola veamos el mensaje **Funcionando en puerto ####**.