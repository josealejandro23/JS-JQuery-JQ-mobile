const os = require('os');
var vector = [];

console.log(`memoria libre: ${os.freemem()}`);

for (let i = 0; i < 1000000; i++) {
   vector.push(i); 
}

console.log(`memoria libre después de crear el vector: ${os.freemem()}`);

