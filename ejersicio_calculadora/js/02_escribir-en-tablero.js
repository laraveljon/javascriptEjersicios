/* OBJETO CON LAS PROPIEDADES DE LA CALCULADORA*/

var p ={
  // se crea una variable en la cual selecionas todo lo que es calculadora...
      teclas : document.querySelectorAll("#calculadora ul li"),
      action :"",
      digito: "",
      operaciones:document.querySelector("#operaciones"),
      cantidadSignos:0,
      cantidadDecimales:false,
      //operaciones:$("operaciones").val()

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
    //console.log("Esto es : "+p.action);
    // cuando uno le de clic.... agrega un contenido de HTML con  innerHTML
    //al igual se puede utilizar como agregador de html es decir lo que tenga en esa etiueta
    // muestra e valor
    p.digito = tecla.target.innerHTML;
    //console.log("Esto es : " + p.digito);

    // se crea otrometodo llamado calculadora con su parametro
    m.calculadora( p.action , p.digito);
  },
  calculadora: function( accion , digito){
    switch (accion) {
      case "numero":
            //console.log("numero");
            p.cantidadSignos =0;
            if(p.operaciones.innerHTML == 0){
              console.log("Pasa 1");

                p.operaciones.innerHTML = digito;
            }else{
              console.log("Pasa 2");
                p.operaciones.innerHTML +=digito;
              }

        break;
      case "signo":
            //console.log("signo");
            p.cantidadSignos++;
            if(p.cantidadSignos== 1){
              console.log("Pasa 3");
              if(p.operaciones.innerHTML == 0){
                console.log("Pasa 4");
                p.operaciones.innerHTML = 0;
              }else{
                console.log("Pasa 5");
                  p.operaciones.innerHTML += digito;
              }

            }

        break;
      case "decimal":
      
            //console.log("decimal");
            //p.cantidadDecimales ++;
            //if(!p.cantidadDecimales){
              p.operaciones.innerHTML += digito;

                //p.cantidadDecimales =true;
            //}

        break;
      case "igual":
            console.log("igual");
        break;
      default:

    }
  },
  borrarCalculadora:function(){
    p.operaciones.innerHTML =0;
  }
}
// dispare el evento del METODO
  m.inicio();
/* */
