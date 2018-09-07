var enviar =document.querySelector("#enviar");

var caja2 =document.querySelector("#caja2");
var caja3 =document.querySelector("#caja3");
// la sintaxis de addEventListener(nombreEvento,nombreFunsion());
enviar.addEventListener("click",moverCaja);

function moverCaja(){
   //caja2.style.left= 0;
   caja2.style.left= 0;
}

function moverCaja2(){

  //caja3.style.left =0;
  caja3.style.right = 0;
}

function cambiarColor(){
  caja2.style.background ="green";
  caja3.style.background ="black";
}
