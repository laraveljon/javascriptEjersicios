/**
 OBJETO CON LAS PROPIEDADES DEL SLIDE
*/
 var propiedad ={
   //selecciona todos los li que se encuentran el html
   paginacion :document.querySelectorAll("#paginacion li"),
   // capturar los items,,,

   item:0,
   cajaSlide : document.querySelector("#slide ul")

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

  }

 }

 // se dispara el metodo de accion

 metodo.inicioSlide();
