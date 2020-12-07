const os = require('os');

console.log(`sistema operativo ${os.platform()}`);
console.log(`version: ${os.release()}`);
console.log(`memoria total: ${os.totalmem()} bytes`);
console.log(`memoria libre: ${os.freemem()} bytes`);