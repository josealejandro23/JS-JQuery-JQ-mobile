const fs = require('fs');

fs.readFile('prueba/nodejs.txt',(error,datos) =>{
   if (error){
      console.log(error);
   }else{
      console.log(datos.toString());
   }
})