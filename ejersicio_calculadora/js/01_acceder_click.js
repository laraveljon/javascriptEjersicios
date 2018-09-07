/* OBJETO CON LAS PROPIEDADES DE LA CALCULADORA*/

var p ={
  // se crea una variable en la cual selecionas todo lo que es calculadora...
      teclas : document.querySelectorAll("#calculadora ul li"),
      action :""

};
/* OBJETO CON LAS METODO DE LA CALCULADORA*/

var m= {
  inicio: function(){
     //console.log("HEY");
     // se realiza un for con longitud para saber cuantas teclas existen
     for(var i =0; i< p.teclas.length; i++){
       // pasa ver cuantos botones se estan encontrando..,
       //console.log("Esto es : "+ i);
       // Realizar el evento para cada boton o que muestra cada boton...
       p.teclas[i].addEventListener("click", m.oprimirTecla);
     }
  },
  oprimirTecla: function(tecla){
    //console.log(tecla.target.getAttribute("class"));
    p.action = tecla.target.getAttribute("class");
    // se crea otrometodo llamado calculadora con su parametro
    m.calculadora(p.action);
  },
  calculadora: function(accion){
    switch (accion) {
      case "numero":
            console.log("numero");
        break;
      case "signo":
            console.log("signo");
        break;
      case "decimal":
            console.log("decimal");
        break;
      case "igual":
            console.log("igual");
        break;
      default:

    }
  }
}
// dispare el evento del METODO
  m.inicio();
/* */
