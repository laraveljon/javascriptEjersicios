/**
 OBJETO CON LAS PROPIEDADES DEL SLIDE
*/
 var propiedad ={
   paginacion :document.querySelectorAll("#paginacion li"),
   item:0,
   cajaSlide : document.querySelector("#slide ul"),
   animacionSilde: "slide",
   animacionFade: "fade",
   imgSlide : document.querySelectorAll("#slide ul li"),
   avanzar: document.querySelector("#slide #avanzar"),
   retroceder: document.querySelector("#slide #retroceder"),
   velocidadSlide:3000,
   formatearLoop:false

 }


/**
 OBJETO CON LAS METODOS DEL SLIDE
*/
 var metodo ={

   
   inicioSlide : function(){

     for(var i =0; i <  propiedad.paginacion.length;i++){

           propiedad.paginacion[i].addEventListener("click",metodo.paginacionSlide)
     }

     propiedad.avanzar.addEventListener("click", metodo.avanzar)
     propiedad.retroceder.addEventListener("click", metodo.retroceder)

     metodo.intervalo();


   },
   paginacionSlide:function(item){

    propiedad.item = item.target.parentNode.getAttribute("item")-1;

    metodo.movimientoSlide(propiedad.item);
  },
  avanzar:function(){

    if(propiedad.item == propiedad.imgSlide.length -1){

      propiedad.item =0;
    }else{
      propiedad.item++;
    }

 
    metodo.movimientoSlide(propiedad.item);
  },
  retroceder:function(){


        if(propiedad.item ==0){

          propiedad.item =propiedad.imgSlide.length -1;
        }else{
          propiedad.item--;
        }

        metodo.movimientoSlide(propiedad.item);;

  },

  movimientoSlide : function(item){

    propiedad.formatarloop =true;

    propiedad.cajaSlide.style.left = - item * 100 + "%";


    for(var i = 0; i < propiedad.paginacion.length; i++){

			propiedad.paginacion[i].style.opacity = .5;

		}
 

		propiedad.paginacion[item].style.opacity = 1;

    if(item == 0 || item == 2){

      if(propiedad.animacionSilde == "slide"){

        propiedad.cajaSlide.style.transition = ".7s left ease-in-out";
      }

    }

 if(item == 1 || item== 3){

        if(propiedad.animacionFade =="fade"){

            propiedad.imgSlide[item].style.opacity = 0;


            setTimeout(function(){
               propiedad.imgSlide[item].style.transition = ".7s opacity ease-in-out";
              propiedad.imgSlide[item].style.opacity = 1;
            },500)
        }
    }
  },
 
  intervalo:function(){

    setInterval(function(){

       if(propiedad.formatarloop){

         propiedad.formatarloop =false;
       }else{


         metodo.avanzar();
       }
    },propiedad.velocidadSlide)
  }
 }


 metodo.inicioSlide();
