
var logo =document.querySelector("#logo");
var expresion =0;

expresion =Math.round(Math.random());

console.log("Esto es : "+ expresion);

switch (expresion) {
  case 0:
    logo.style.background = "green";
    break;
  case 1:
  logo.style.background = "black";
  break;
  default:

}
