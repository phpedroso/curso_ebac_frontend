// Função construtora Carro
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

// Método acelerar
Carro.prototype.acelerar = function() {
  console.log('Está acelerando.');
};

// Método frear
Carro.prototype.frear = function() {
  console.log('Está freando.');
};

// Função construtora CarroEsportivo (herda de Carro)
function CarroEsportivo(marca, modelo, ano, velocidadeMaxima) {
  Carro.call(this, marca, modelo, ano);
  this.velocidadeMaxima = velocidadeMaxima;
}

// Herança de Carro para CarroEsportivo
CarroEsportivo.prototype = Object.create(Carro.prototype);
CarroEsportivo.prototype.constructor = CarroEsportivo;

// Método acelerar para CarroEsportivo
CarroEsportivo.prototype.acelerar = function() {
  console.log('O carro esportivo está acelerando.');
};

// Função construtora CarroSedan (herda de Carro)
function CarroSedan(marca, modelo, ano, numeroPortas) {
  Carro.call(this, marca, modelo, ano);
  this.numeroPortas = numeroPortas;
}

// Herança de Carro para CarroSedan
CarroSedan.prototype = Object.create(Carro.prototype);
CarroSedan.prototype.constructor = CarroSedan;

// Método frear para CarroSedan
CarroSedan.prototype.frear = function() {
  console.log('O carro sedan está freando.');
};

// Instâncias de objetos
var carro1 = new Carro('Ford', 'Fusion', 2022);
console.log(carro1.marca + ", " + carro1.modelo + ", " + carro1.ano); 
carro1.acelerar(); 

var carro2 = new CarroEsportivo('Ferrari', '488 GTB', 2023, 340);
console.log(carro2.marca + ", " + carro2.modelo + ", " + carro2.ano + ", " + carro2.velocidadeMaxima); 
carro2.acelerar(); 

var carro3 = new CarroSedan('Honda', 'Civic', 2021, 4);
console.log(carro3.marca + ", " + carro3.modelo + ", " + carro3.ano + ", " + carro3.numeroPortas);
carro3.frear(); 
