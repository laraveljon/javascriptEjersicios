

for (var i = 1; i <= 10; i++) {
  console.log("Esto es  =" + i);
}

/***  listado del input **/

 var listado = document.querySelector("#listado");

   for(var i=1; i<10; i++){

    /* Se incrementa con esta "+=" */
     listado.innerHTML += '<li>JON</li>';
   }

   var caja_texto = document.querySelector("#caja_texto");

     for(var i=1; i<10; i++){

      /* Se incrementa con esta "+=" */
       caja_texto.innerHTML += '<input type ="text" >';

       

     }
