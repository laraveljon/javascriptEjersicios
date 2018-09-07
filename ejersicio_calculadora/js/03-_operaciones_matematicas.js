/* OBJETO CON LAS PROPIEDADES DE LA CALCULADORA*/

var p ={
  // se crea una variable en la cual selecionas todo lo que es calculadora...
      teclas : document.querySelectorAll("#calculadora ul li"),
      action :"",
      digito: "",
      operaciones:document.querySelector("#operaciones"),
      cantidadSignos:0,
      cantidadDecimal :false,
      resultado:0
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
                  if(p.resultado==1){
                    p.resultado = 0;
                    p.operaciones.innerHTML = digito;
                  }else{
                    console.log("Pasa 2");
                      p.operaciones.innerHTML +=digito;
                  }

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
                  p.cantidadDecimal =false;
                  p.resultado = 0;
              }

            }

        break;
      case "decimal":
            //console.log("decimal");
            if(!p.cantidadDecimal){
              console.log("Pasa 6");
                p.operaciones.innerHTML += digito;
                p.cantidadDecimal =true;
                p.resultado = 0;
            }

        break;
      case "igual":
            console.log("igual");
            // eval : contiene toda una cantidad de string y separa signos
            // matematicos y le da el valor matematico que merece es decir evalua
            // siertasoperaciones
            console.log("Pasa 7");
            p.operaciones.innerHTML   =eval(p.operaciones.innerHTML);
            p.resultado =1;
        break;
      //default:

    }
    console.log("Resultado "+p.resultado);
  },
  borrarCalculadora:function(){
    p.operaciones.innerHTML =0;
  }
}
// dispare el evento del METODO
  m.inicio();
/* */
