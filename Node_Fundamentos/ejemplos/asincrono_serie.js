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
//llamar a una función N veces en serie

function serie(n, fn, callbackFinalizador) {
  if (n == 0) {
    // aqui termino
    callbackFinalizador();
    return;
  }
  n = n - 1;

  fn("texto" + n, () => {
    //cuando termine, nos llamamos a nosotros mismos
    serie(n, fn, callbackFinalizador);
  });
}

serie(5, escribeTras2Segundos, () => {
  console.log("He terminado");
});
