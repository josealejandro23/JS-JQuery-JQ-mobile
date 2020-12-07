export const pi:Number = 3.1416;

export function sumar(a:number,b:number):number{
   let res : number;
   res = a + b;
   return res;
}

export function Restar(a : number, b : number):number{
   return a - b;
}

export function dividir(a : number, b : number):number{
   if (b == 0) {
      mostrarErrorDivision();
   }else{
      return a / b;
   }
}

export function multiplicar(a:number,b:number):number{
   return a * b;
}

export function mostrarErrorDivision(){
   console.log('no se puede dividir entre 0');
}
