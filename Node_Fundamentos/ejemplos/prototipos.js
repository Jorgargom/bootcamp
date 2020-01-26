"use stric";
// definimos una función constructora

function Persona(name) {
  this.name = name;
}

//construir un objeto

const luis = new Persona("Luis");

Persona.prototype.saluda = function() {
  console.log(`Hola, me llamo ${this.name}`);
};
luis.saluda();

// Herencia de persona -----------------------------------------

function Agente(name) {
  // heredar constructor de su padre
  Persona.call(this, name);
}

// Heredar sus propiedades y métodos

Agente.prototype = new Persona("soy un prototipo");

const smith = new Agente("Smith");
smith.saluda();

console.log(smith instanceof Object);

// Herencia múltiple

// Mixin Superheroe

function Superheroe() {
  this.vuela = function() {
    console.log(this.name, "vuela");
  };
  this.esquivaBalas = function() {
    console.log(this.name, "esquiva balas");
  };
}

// copio todas las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe());
smith.esquivaBalas();
smith.vuela();

