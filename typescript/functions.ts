function sumar(val1 : number, val2 : number):number{
   return val1 + val2;
}

const suma = (val1:number, val2:number) =>{
   return val1 + val2;
}

function imprimir():void{
   console.log(suma(2,5));
}

const dividir = function(a:number, b:number):number{
   return a/b;
};

const throwError = (message : string) =>{
   throw new Error(message);    
   //Nunca se va a alcanzar el return ya q la función retorna "never"
   return message;
}

imprimir();
throwError("error encontrado");