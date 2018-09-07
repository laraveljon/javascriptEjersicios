
var codicion;
var caja = document.querySelector("#caja");
condicion = Math.ceil(Math.random()*3);

console.log(condicion);

if(condicion== 1){
    caja.style.width ="300px";
    caja.style.height ="100px";
    caja.style.background ="cyan";
}else if(condicion== 2){
    caja.style.width ="100px";
    caja.style.height ="300px";
    caja.style.background ="magenta";
}else{

  caja.style.width ="400px";
  caja.style.height ="200px";
  caja.style.background ="purple";

}
