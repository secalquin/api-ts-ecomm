# Node & Typescript

## Instalando Node

1. Nos dirigimos a la raiz del proyecto o carpeta donde inicializaremos nuestro proyecto.

2. Inicializamos nuestro proyecto de node.
    - npm init -y

3. Instalaremos la dependencia typescript
    - npm install -g typescript : (No es necesario instalar global, yo no lo tenia en ese momento, puedes instalarlo en el proyecto.)

4. Crearemos el archivo de configuracion de typescript, para que compile o interprete nuestro archivo.
    - tsc --init

5. Configuraremos variables necesarias para utilizar typescript.
    - "target": "es5" : (Opcional, en mi caso me gusta utilizar ECMA 5+ para mis proyectos en typescript).
    - outDir: "./dist"
    - "sourceMap: true : (Ayudará a mostrar los errores js, en equivalente al codigo typescript)
    - "strict": true
    - "moduleResolution": "node"
    - "esModuleInterop": true

6. Creamos el archivo app.ts en la raiz del proyecto y ejecutamos
    -   tsc
    Veremos que se nos creará la carpeta dist, lo cual es correcto, ya que hemos compilado nuestro proyecto.

7. Realizaremos la instalacion de "tslint" como dependencia de desarrollo.
    - npm i tslint --save-dev

8. Debemos instalar typescript como dependencia de desarrollo.
    -   npm i typescript --save-dev

9. Creamos nuestro archivo de configuracion "tslint", por lo cual ejecutaremos el siguiente comando:
    - ./node_modules/.bin/tslint --init

10. Ahora agregaremos reglas a nuestro ts link para que los console.log no nos den error (se pueden configurar mas reglas.)
    -   Abrimos el archivo creado en la raiz del proyecto tslint.json
    -   Añadimos a nuestras reglas el siguiente nodo
    - "no-console": false (para que no nos de error ejecutar console.log).

11. Al archivo app.ts que generamos podemos agregar un console.log('Hello World') y ejecutamos el comando tsc, el cual compilará nuestro archivo.
Luego vamos a la consola y ejecutamos lo siguiente.

    -   node ./dist/app.js

Luego de ejecutar el comando veremos que se ha imprimido por consola y sin errores un log de "Hello World".



# Estructura de carpetas para un proyecto Node.js Typescript
    ├── README.md
    ├── dist
    ├── public
    ├── src
    │   └── config
    │   └── controllers
    │   └── interfaces
    │   └── models
    │   └── routes
    ├── app.ts
    ├── package.json
    ├── tsconfig.json
    ├── .env
    ├── tslint.json

# Librerias utilizadas
    - express
    - typescript
    - tslint
    - dotenv
    - jest
    - supertest
    - express-validator
