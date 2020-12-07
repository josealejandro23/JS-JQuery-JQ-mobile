const fs = require('fs');

const txt = '1. Esta es una línea de texto \n2. Esta es otra línea de texto';

/*fs.mkdir('prueba',error =>{
   if (error) {
      console.log(error);
   }
})*/

function resultado(){
   console.log('archivo creado');
}

console.log('iniciando escritura');
fs.writeFile('prueba/nodejs.txt',txt,(error)=>{
   if (error) {
      console.log(error);
   }else{
      resultado()
   }
})