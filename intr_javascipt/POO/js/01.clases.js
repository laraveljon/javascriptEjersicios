// las clases son funsiones constructoras que siempre se inicia en Mayusculas
// 
// 
// Clases primitivas
var string = new  String("Jonathan Alanis");

console.log("string",string);

var numero = new Number(12);

console.log("numero",numero);

var boolean = new Boolean(true);

console.log("boolean",boolean);

// clase array

var array = new Array("azul","amarillo","verde","azul");
console.log(array);
// array object
var object = new Object({nombre1:"juan",edad:23});

console.log("Object",object);

// Clases creadas por el programador
// se crean los prototipos
// se crea una funsion constructora...

 function Persona(){

 	// Propiedades publicas 
 	
 	this.nombre;
 	this.edad;


}

var yo = new Persona();
yo.nombre = "Jonathan";
yo.edad ="29 años";

console.log("Yo es : ", yo);

// Clases con parametros...
// 
function Animales(nombre,raza){
	this.nombre = nombre;
	this.raza= raza;
}

var animal = new Animales("Leon","Felino");
console.log("Animal : " ,animal);





