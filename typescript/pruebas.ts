var array = [1, 2, 3, 4];
var [x,y,...rest] = array;
console.log(x,y,rest);

function suma(x,y,...rest):number{
   var res = x + y;
   for (let i = 0; i < rest.length; i++) {
      res += rest[i];
   }
   return res;
}

console.log(suma(1,3,4,2,5));