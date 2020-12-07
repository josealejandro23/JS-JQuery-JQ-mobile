var array = [1, 2, 3, 4];
var [x,y,...rest] = array;
console.log(x,y,rest);

function suma(x,y,...otros):number{
   var res = x + y;
   for (let i = 0; i < otros.length; i++) {
      res += otros[i];
   }
   return res;
}

console.log(suma(1,3,4,2,5));