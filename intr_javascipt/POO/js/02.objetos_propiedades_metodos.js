
// Objetos es una colecion de propiedades u metodos
// 
// 
var object = {
    
    // una Propiedad esta construido con un nombre y un valor
    nombre : "JON",
    edad   : 35,

    // El metodo es una fusion dentro de un objeto.
    
    metodo_descripcion : function(){
    	console.log("El nombre es : " + object.nombre + "La edad es : " + object.edad);
    },

    // tambien se puede crear metodos con parametos (Nota : antrs de la lave poner una ' , ')
    saludar:function(saludo){
      
      console.log(saludo +" "+ object.nombre);
    }

}

// inmprimiendo en consola llamando el objct y su propiedad de nombre y edad...
console.log("NOMBRE : " + object.nombre);
console.log("EDAD   : " + object.edad);
// la forma de sacar el valor de un object y con el metodo
object.metodo_descripcion();
object.saludar("Hola");