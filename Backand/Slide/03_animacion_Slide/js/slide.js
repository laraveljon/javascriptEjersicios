/**
 OBJETO CON LAS PROPIEDADES DEL SLIDE
*/
 var propiedad ={
   //selecciona todos los li que se encuentran el html
   paginacion :document.querySelectorAll("#paginacion li"),
   // capturar los items,,,

   item:0,
   cajaSlide : document.querySelector("#slide ul"),
   animacionSilde: "slide",
   animacionFade: "fade",
   imgSlide : document.querySelectorAll("#slide ul li")

 }


/**
 OBJETO CON LAS METODOS DEL SLIDE
*/
 var metodo ={

   // evento pada dar click es decir que se reciba este click
   inicioSlide : function(){
     // la propiedad es un array ya que tiene una cantidad de indices...
     for(var i =0; i <  propiedad.paginacion.length;i++){

           propiedad.paginacion[i].addEventListener("click",metodo.paginacionSlide)
     }


   },
   paginacionSlide:function(item){
     // para localizar a cual se esta dando click...
     //parentNode : para que muestre su pariente queseria del item
     //console.log("Item", item.target.parentNode.getAttribute("item")-1);
    propiedad.item = item.target.parentNode.getAttribute("item")-1;

    metodo.movimientoSlide(propiedad.item);
  },
  //si son metodos diferentes se puede poner el mimmo parametro...
  movimientoSlide : function(item){
    console.log("item",(- item * 100 + "%"));
    /*
    style left  PROVIENE DEL ARCHIVO estilos.css
    #slide ul{
     position:relative;
     left:0%;
     margin:auto;
     height:auto;
     width:400%;
     clear:both;
     display: table;
    }
    */
    propiedad.cajaSlide.style.left = - item * 100 + "%";

    // Todos los intems de pagiacion en la opacidad pases a .5
    for(var i = 0; i < propiedad.paginacion.length; i++){
    //no habra evento solamenye sirigirnos a los stilos
			propiedad.paginacion[i].style.opacity = .5;

		}
    //ya que es un array los valores empiecen de 0


		propiedad.paginacion[item].style.opacity = 1;

    if(item == 0 || item == 2){
      console.log("PASA A :" + item);
      //alert("Pasa por aqui X)");
      if(propiedad.animacionSilde == "slide"){
        // Cada ve que se este dando click se le active la actividad transition
        propiedad.cajaSlide.style.transition = ".7s left ease-in-out";
      }

    }
    //alert(item);
 if(item == 1 || item== 3){
     console.log("PASA A XX :" + item);
        if(propiedad.animacionFade =="fade"){
          //no habra evento solamenye sirigirnos a los stilos
          //cuando de de click que se posiscione en opcionn de 0
            propiedad.imgSlide[item].style.opacity = 0;

            // Para realizar acciones retardadas
            setTimeout(function(){
               propiedad.imgSlide[item].style.transition = ".7s opacity ease-in-out";
              propiedad.imgSlide[item].style.opacity = 1;
            },500)
        }
    }



  }

 }

 // se dispara el metodo de accion

 metodo.inicioSlide();
