"use strict";

// funcion que retorna una promesa

function sleep(ms) {
  return new Promise((resolve, reject) => {
    // aqui es donde hago lo que sea asincrono
    setTimeout(() => {
      resolve("resultado");
      //reject(new Error("fatal!!"));
    }, ms);
  });
}

// como consumo una promesa

const promesa = sleep(2000);

console.log(promesa);

promesa
  .then(result => {
    console.log("La promesa se completó con", result);
  })
  .catch(err => {
    console.log("Promesa fallida", err);
  });
