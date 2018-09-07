/*CASO 3. LOS CUATRO PERROS. 

Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. 
Éste último come más que el galgo; el alano come más que el galgo y 
menos que el dogo, pero éste come más que el podenco. ¿Cuál de los cuatro 
perros come menos?.

galgo
dogo
alano
podenco

if(podendo > galgo && 
alano > galgo &&
alano < dogo &&
dogo > podenco)


=============================================*/

// se crea un objeto 
var galgo_ = document.querySelector("#galgo");
var dogo_ = document.querySelector("#dogo");
var alano_ = document.querySelector("#alano");
var podenco_ = document.querySelector("#podenco");

var p = {

	galgo : 0,
	dogo :  0,
	alano:  0,
	podenco:0,

	// se crea el metodo de funsion
  resultado : function(){
  	if(p.podenco > p.galgo && 
		p.alano > p.galgo &&
		p.dogo > p.podenco &&
		p.alano < p.dogo ){
  		return true;
  	}
  	return false;
  },
  intervalo: setInterval(function(){

  	p.galgo   = Math.ceil(Math.random()*4);
  	p.dogo    = Math.ceil(Math.random()*4);
  	p.alano   = Math.ceil(Math.random()*4);
  	p.podenco = Math.ceil(Math.random()*4);

  	if(p.resultado()){
        
        // para el intervalo
  		clearInterval(p.intervalo);

  		galgo_ = innerHTML = "galgo : " +" "+ p.galgo; 
  		dogo_ = innerHTML = "dogo : " +" "+ p.dogo; 
  		alano_ = innerHTML = "alano : " +" "+ p.alano; 
  		podenco_ = innerHTML = "Galgo : " +" "+ p.podendo; 

  		console.log("Galgo" + " "+p.galgo);
  		console.log("Dogo" + " "+p.dogo);
  		console.log("alano" + " "+p.alano);
  		console.log("podenco" + " "+p.podenco);

  		

  	}
  },10)

}