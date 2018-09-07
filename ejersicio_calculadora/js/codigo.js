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
  // Metodo para eventos de teclado....
  teclado : function(){

    document.addEventListener("keydown",m.oprimir);

  },
  oprimir : function(tecla){
    // recibir la tecla que se esta recibiendo e identificar el codigo para cada tecla
    console.log(tecla.keyCode);
    if(tecla.keyCode == 48 || tecla.keyCode == 96 ){
      p.action = "numero";
      p.digito = 0;
    }
    if(tecla.keyCode == 49 || tecla.keyCode == 97 ){
      p.action = "numero";
      p.digito = 1;
    }
    if(tecla.keyCode == 50 || tecla.keyCode == 98 ){
      p.action = "numero";
      p.digito = 2;
    }
    if(tecla.keyCode == 51 || tecla.keyCode == 99 ){
      p.action = "numero";
      p.digito = 3;
    }
    if(tecla.keyCode == 52 || tecla.keyCode == 100 ){
      p.action = "numero";
      p.digito =4;
    }
    if(tecla.keyCode == 53 || tecla.keyCode == 101 ){
      p.action = "numero";
      p.digito =5;
    }
    if(tecla.keyCode == 54 || tecla.keyCode == 102 ){
      p.action = "numero";
      p.digito =6;
    }
    if(tecla.keyCode == 55 || tecla.keyCode == 103 ){
      p.action = "numero";
      p.digito =7;
    }
    if(tecla.keyCode == 56 || tecla.keyCode == 104 ){
      p.action = "numero";
      p.digito =8;
    }
    if(tecla.keyCode == 57 || tecla.keyCode == 105 ){
      p.action = "numero";
      p.digito =9;
    }
    if(tecla.keyCode == 88 || tecla.keyCode == 106 ){
      p.action = "signo";
      p.digito = "*";
    }
    if(tecla.keyCode == 187 || tecla.keyCode == 107 ){
      p.action = "signo";
      p.digito = "+";
    }
    if(tecla.keyCode == 111 ){
      p.action = "signo";
      p.digito = "/";
    }
    if(tecla.keyCode ==189 || tecla.keyCode==109){
      p.action ="signo";
      p.digito ="-"
    }
    if(tecla.keyCode ==190 || tecla.keyCode==110){
      p.action ="decimal";
      p.digito ="."
    }
    if(tecla.keyCode ==8 ){
       m.borrarCalculadora();
    }






    if(tecla.keyCode == 13 ){
      p.action = "igual";
      p.digito = "=";
    }

    m.calculadora(p.action,p.digito);
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
// dispare el evento del METODO del teclado
  m.inicio();
  m.teclado();
/* */
