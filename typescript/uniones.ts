type stringOrNumber = string | number;

function padLeft(value:String, padding : stringOrNumber){
   if (typeof padding === 'number'){
      return Array(padding + 1).join(' ') + value
   }
   if (typeof padding === 'string'){
      return padding + value;
   }
   throw new console.error(`Espera un string pero se recibió un ${padding}`);
}

console.log(padLeft('hola mundo',"30"));
console.log(padLeft('hola mundo',30));