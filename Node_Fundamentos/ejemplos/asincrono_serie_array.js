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

//bucle asincrono en serie
//llamar a una función con cada elemento de un array en serie

function serie(arr, fn, callbackFinalizador) {
  if (arr.lenght == 0) {
    // aqui termino
    callbackFinalizador();
    return;
  }

  fn("texto" + arr.shift(), () => {
    //cuando termine, nos llamamos a nosotros mismos
    serie(arr, fn, callbackFinalizador);
  });
}

serie([1, 2, 3, 4, 5], escribeTras2Segundos, () => {
  console.log("He terminado");
});
