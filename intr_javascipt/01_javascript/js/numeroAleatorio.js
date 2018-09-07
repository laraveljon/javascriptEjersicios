
var num =0;
var numero=0;
var numero2=0;
var numero3=0;

num = Math.random();
numero =Math.floor(Math.random()*10); // redondea el numero menor del decimal
numero2 =Math.ceil(Math.random()*10); //  redondea el numero mayor del decimal
numero3 =Math.round(Math.random()*10); //  redondea  de acuerdo decimal, si es superior a 5 redondea del mayor
                                      //si es inferior a 5 redondea al menor



console.log(num);
console.log(numero);
console.log(numero2);
console.log(numero3);
  console.log("NUMERO PARA QUE TE SALGA LA LOTERIA : ");
if(numero == 7){

  console.log("te  ganaste la loteria");
}
/*var aleatorio = document.querySelector("#aleatorio");

num = Math.random();

aleatorio.innerHTML+="<li>num</li>";*/
//console.log(num);
