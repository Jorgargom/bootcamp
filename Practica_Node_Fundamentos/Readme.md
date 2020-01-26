# Nodepop API

Es una api que permite filtrar anuncios utilizando una base de datos en Mongo DB, Express y Node.js.

Los pasos a seguir para el funcionamiento de la API son los siguientes:

# Cómo instalar

Descargar el proyecto desde un terminal:

`git clone https://github.com/Jorgargom/practica_node_fundamentos.git`

### Arrancar mongoDB desde un terminal

Desde la carpeta ./bin de mongodb arrancamos con:

    mongod --dbpath ./data/db --directoryperdb   --- si es linux o IOS
    .\mongod --dbpath c:\data\db --directoryperdb ---- de Windows

# DESDE OTRO TERMINAL

### Para instalar las dependencias

npm install

### Para inicializar la base de datos

npm run installDB

## Para arrancar nuestra API

nodemon o npm run start

## Comprobación funcionamiento

Muestra una lista de los anuncios:

http://localhost:3000

## Funcionamiento API

El funcionamiento de la API permite:

### Mostrar lista de anuncios

Muestra lista en formato json:
http://localhost:3000/apiv1/anuncios

### Filtrar lista de anuncios

Existen cinco tipos de filtrados:

1. Filtrado por tag

   Filtra por el nombre del producto que contenga el tag que se pasa como string:
   P.ej: los anuncios que contengan el tag "motor"
   http://localhost:3000/apiv1/anuncios?tag=motor

2. Filtrado por venta

   Filtra si el producto esta a la venta (true) o alguien quiere comprarlo(false)
   P.ej: los anuncios a la venta
   http://localhost:3000/apiv1/anuncios?venta=true

3. Filtrado por precio

   Filtra por precio del producto. Los valores de filtrado son: - 10-50: anuncios entre 10 y 50 euros. - 10-: anuncios de más de 10. - -50: anuncios de menos de 50 euros. - 50: anuncios de precio igual a 50 euros.
   P.ej: los anuncios de precio menor a 50 euros
   http://localhost:3000/apiv1/anuncios?precio=-50

4. Filtrado por nombre

   Filtra por nombre de producto que empiece por el string que se pase.
   P.ej: los anuncios cuyo nombre empiece por r >>> http://localhost:3000/apiv1/anuncios?nombre=r

5. Filtrado combinado

   Combinación de 2 o más elementos (de los citados en los puntos anteriores) usando & para concatenar:
   P.ej: anuncios con precio entre 10-50 y con tag motor
   http://localhost:3000/apiv1/anuncios?precio=10-50&tag=motor

### Mostrar lista de tags existentes

Muestra los tags en formato json entre los que se puede elegir para crear un nuevo anuncio:

http://localhost:3000/tags

### Crear un nuevo anuncio (POST)

Realizar petición POST mediante Postman:

* Url: http://localhost:3000/apiv1/anuncios

* Body (formato x-www-form-urlencoded): pasar nombre, venta, precio, foto, tags(valores separados por comas) y sus respectivos valores.

### Mostrar fotos de la base de datos

Se mostrará la imagen renderizada accediendo a la ruta:

http://localhost:3000/images/Nombreimagen
P.ej: http://localhost:3000/images/iphoneX.jpg
