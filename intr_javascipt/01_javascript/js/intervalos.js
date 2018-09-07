/*
   * Intervalo de tiempo se escrbe asi : " setInterval();  "
   * la sintaxis es setInterval(funcion, tiempo);

   * sirve para hacer temporalizadores ej HMTL
*/
var segun =0;
var segun2=0;
var time =document.querySelector("#time");
var pregunta =document.querySelector("#pregunta");
var respuesta =document.querySelector("#respuesta");

setInterval(function(){
  //console.log(segun++);
  console.log(segun2+=10);
},100);

setInterval(function(){
  //console.log(segun++);
  segun++
  time.innerHTML= segun;

  if(segun == 7){
    //alert("Como estan");
    for(var i=1;i<10;i++){
      pregunta.innerHTML+="<li>como estan</li>";
    }
  }
  if(segun ==10){

    respuesta.innerHTML+="<li>bien</li>";
  }
  if(segun == 13){
    respuesta.innerHTML+="<li>OK</li>";
  }

},1000);



