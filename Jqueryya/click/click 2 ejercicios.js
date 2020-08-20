let x = $(document);
x.ready(iniciar);

function iniciar(){
   let x = $('#title1');
   x.click(modificar1);
   x = $('#title2');
   x.click(modificar2);
}

function modificar1(){
   let x = $('#title1');
   x.css('color','#ff0000');
   x.css('background-color','blue');
   x.css('font-family','Courier');
}

function modificar2(){
   let x = $('#title2');
   x.css('color','#ABCDEF');
   x.css('background-color','orange');
   x.css('font-family','Arial');
}