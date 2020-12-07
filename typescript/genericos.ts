function echo<T>(arg: T) : T {
   return arg;
}

//Este tipo de definición permite enviar cualquier tipo de dato a la función
let a = echo<number>(1); // El typeof es Number
let b = echo<String>("Hola mundo"); // El typeof es String
let c = echo<string>("saludos");

console.log(echo(c));

//////////////////////////////////////
class Generic<T> {
   add: (X: T, y:T) => T;
}
let myGeneric = new Generic<number>();
myGeneric.add = function (x,y) {return x + y};
console.log(myGeneric.add(3,4));

let generico = new Generic<number>();
generico.add = function (a,b){
   return (a*b);
}
console.log(generico.add(3,2));
