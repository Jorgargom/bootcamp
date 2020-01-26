"use strict";
console.log("empiezo");

// funcion escribe un texto tras 2 segundos

function escribeTras2Segundos(texto, callback) {
  // setTimeout(function() {})
  setTimeout(() => {
    console.log(texto);
    //return 22
    callback(22);
  }, 2000);
}
escribeTras2Segundos("texto1", () => {
  console.log("termino la primera ejecucion");
  escribeTras2Segundos("texto2", () => {
    console.log("termino la segunda ejecucion");
  });
});
