/*
   * Intervalo de tiempo se escrbe asi : " setInterval();  "
   * la sintaxis es setTimeout(funcion, tiempo);

*/
  var logo = document.querySelector("#logo");
  setTimeout(function(){
    //alert("Hola");
    logo.style.left ="10px";
  },3000)
