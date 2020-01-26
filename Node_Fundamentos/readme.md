# Recordatorio arrancar base de datos

.\mongod --dbpath c:\data\db --directoryperdb

#para arracar el shell de mongo
.\bin\mongo

#añadir a la base de datos/ confimar que base de datos quiero

use cursonode
db.agentes.insert({name: "Borrar", age: 67})

# ver objetos de la base de datos

db.agentes.find ().pretty()

# eliminar registros de la base de datos

db.agentes.remove ({\_id: ObjectId("5a85597e3673b76e9b72fb5f") })

#actualizar sustituyendo por completo los registros de la base de datos

db.agentes.update ({\_id: ObjectId("5a8405be0475b317068de414")}, {age: 19})

# actualización parcial de los registros de la base de datos

db.agentes.update ({\_id: ObjectId("5a8405be0475b317068de414")}, {$set: {name: "Luis"}})

#instalar mongoose

npm i mongoose
