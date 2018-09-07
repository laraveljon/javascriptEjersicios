/*=============================================
CASO 1. LOS CUATRO ATLETAS. 

De cuatro corredores de atletismo se sabe que C 
ha llegado inmediatamente detrás de B, y D ha llegado en 
en medio de A y C. ¿Podría usted calcular el orden de llegada?
4 corredores 
a->d->c-> b

*/
var atletaA = document.querySelector("#atletaA");
var atletaB = document.querySelector("#atletaB");
var atletaC = document.querySelector("#atletaC");
var atletaD = document.querySelector("#atletaD");

var caballoA = document.querySelector("#caballoA");
var caballoB = document.querySelector("#caballoB");
var caballoC = document.querySelector("#caballoC");
var caballoD = document.querySelector("#caballoD");

// realiza un objeto de clase
var atleta = {

   // se realizan las propiedades empezando con valores 0
	A:0,
	B:0,
	C:0,
	D:0,

	// matodo de funcison
   resultado : function(){
       // si c a llegado mas tarde que b, y si D a llegado mas tarde que B,
       // si D a llegado mas tarde que C, si D a llegado antes que A
   	   if(atleta.C > atleta.B &&
   	   	  atleta.D > atleta.B  &&
   	   	  atleta.D > atleta.C &&
   	   	  atleta.D < atleta.A){
   	   	return true;
   	   }
   	   return false;
   },
   // se realiza un intervalo de tiempos para sacar los valores 
   intervalo: setInterval(function(){
        
        // redondedea a valor entero
   	    atleta.A = Math.ceil(Math.random()*4);
   	    atleta.B = Math.ceil(Math.random()*4);
   	    atleta.C = Math.ceil(Math.random()*4);
   	    atleta.D = Math.ceil(Math.random()*4);

   	    if(atleta.resultado()){
   	    	clearInterval(atleta.intervalo);
   	    	/*console.log("Atleta A",atleta.A);
   	    	console.log("Atleta B",atleta.B);
   	    	console.log("Atleta C",atleta.C);
   	    	console.log("Atleta D",atleta.D);*/
   	    	atletaA.innerHTML = "Atleta A"+" "+atleta.A;
   	    	atletaB.innerHTML = "Atleta B"+" "+atleta.B;
   	    	atletaC.innerHTML = "Atleta C"+" "+atleta.C;
   	    	atletaD.innerHTML = "Atleta D"+" "+atleta.D;
   	    }
   },10)



}
// Pequeño ejemplo de intervalos

var time = document.querySelector("#time");
var time2 = document.querySelector("#time2");
var time3 = document.querySelector("#time3");

segundos = 0;
// se crea una cariable para parar el tiempo
var PararIntervalo = setInterval(function(){


segundos ++;

time.innerHTML = segundos;
time2.innerHTML += segundos + " , ";

console.log("Segundos : " + segundos);
  
},1000)

// retardo de tiempo 
// SET TIMEOUT (retardo de tiempo)
// setTimeout(funciton(){},timepo)
setTimeout(function(){
	//alert("Pasa en 10 segundos");
	clearInterval(PararIntervalo);
	time3.innerHTML ="Paro el tiempo";
},10000)


/* 
   El caballo de Mac es más oscuro que el de Smith, pero más rápido 
y más viejo que el de Jack, que es aún más lento que el de Willy, 
que es más joven que el de Mac, que es más viejo que el de Smith,
 que es más claro que el de Willy, aunque el de Jack es más lento y más oscuro 
 que el de Smith. ¿Cuál es el más viejo, cuál el más lento y cuál el más claro?

Caballo de MAC = tono > Caballo de Smith
Caballo de MAC = velocidad > Caballo de Jack
Caballo de MAC = edad > Caballo de Jack
Caballo de MAC = velocidad < Caballo de WIlly
Caballo de Willy = edad < Caballo de Willy
Caballo de MAC = edad > Caballo de Smith

*/



/*var caballo = {

	Mac:   {edad:0,velocidad:0,tono:0},
	Smith: {edad:0,velocidad:0,tono:0},
	Jack:  {edad:0,velocidad:0,tono:0},
	Willy: {edad:0,velocidad:0,tono:0},

	resultado:function(){
		if(caballo.Mac.tono > caballo.Smith.tono &&
			caballo.Mac.velocidad > caballo.Jack.velocidad &&
			caballo.Mac.edad > caballo.Jack.edad &&
			caballo.Willy.velocidad > caballo.Jack.velocidad &&
			caballo.Mac.edad > caballo.Willy.edad &&
			caballo.Mac.edad > caballo.Smith.edad &&
			caballo.Willy.tono > caballo.Smith.tono &&
			caballo.Smith.velocidad > caballo.Jack.velocidad &&
			caballo.Smith.tono > caballo.Jack.tono){

			return true;

		}
		return false;
	},
	intervalo: setInterval(function(){

		caballo.Mac.edad = Math.ceil(Math.random()*2);
		caballo.Mac.velocidad = Math.ceil(Math.random()*2);
		caballo.Mac.tono = Math.ceil(Math.random()*2);

		caballo.Smith.edad = Math.ceil(Math.random()*2);
		caballo.Smith.velocidad = Math.ceil(Math.random()*2);
		caballo.Smith.tono = Math.ceil(Math.random()*2);


		caballo.Jack.edad = Math.ceil(Math.random()*2);
		caballo.Jack.velocidad = Math.ceil(Math.random()*2);
		caballo.Jack.tono = Math.ceil(Math.random()*2);

		caballo.Willy.edad = Math.ceil(Math.random()*2);
		caballo.Willy.velocidad = Math.ceil(Math.random()*2);
		caballo.Willy.tono = Math.ceil(Math.random()*2);

		if(caballo.resultado()){
       
			clearInterval(caballo.intervalo);

			caballoA.innerHTML = "MAC es : " + caballo.Mac;
			caballoB.innerHTML = "Smith es : " + caballo.Smith;
			caballoC.innerHTML = "Jack es : " + caballo.Jack;
			caballoD.innerHTML = "WIlly es : " + caballo.Willy;

			console.log("Cabalo A", caballo.Mac);
		}



	},1)


}

*/