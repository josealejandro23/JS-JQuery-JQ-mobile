function imprimir(a, b, cb) {
    var resultado = a + b;
    cb(resultado);
}
function cb(b) {
    console.log(b);
}
imprimir(3, 5, cb);
function resultado(x, y, cb) {
    var res;
    res = x + y;
    return cb(res);
}
function callback(val) {
    return val * 2;
}
console.log(resultado(3, 4, callback));
