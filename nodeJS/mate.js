const pi = 3.14

function suma(a,b){
   return a + b;
}

function dividir(a,b){
   if (b == 0) {  
      errorDivision();
   }else {
      return a / b;
   }
}

function errorDivision(){
   console.log("no se puede dividir entre 0")
}

exports.pi = pi;
exports.suma = suma;
exports.dividir = dividir;