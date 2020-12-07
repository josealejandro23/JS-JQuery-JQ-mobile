const suma = (val1 : number,val2:number):number=>{
   return val1 + val2;
}

//Se asigna una función a una variable mediante el puntero
let sumar2: (a:number,b:number) => number;
sumar2 = suma;

console.log(sumar2(4,5));
