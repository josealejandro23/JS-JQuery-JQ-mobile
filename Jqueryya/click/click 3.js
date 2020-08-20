let x = $(document);
x.ready(iniciar);

function iniciar(){
   /* let x = $('#fila1');
   x.click(() =>{
      x.css('background-color','aquamarine');
   });
   y = $('#fila2');
   y.click(() => {
      y.css('background-color','orange');
   }); */
   let tr = $('tr'); //todas las etiquetas tr
   tr.click((cambiarFondo));
}

function cambiarFondo(){
   let x = $(this);
   x.css('background-color','gray')
}