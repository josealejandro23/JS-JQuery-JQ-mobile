function funcion1(x:number,y:number):number{
   return x + y;
}

let funcion2 = function(x:number,y:number):number{
   return x + y;
}

const funcion3 = (x:number, y:number):number=>{
   return x + y;
}

console.log(funcion1(4,6));
console.log(funcion2(5,2));
console.log(funcion3(8,1));

export default{}