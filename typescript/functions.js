function sumar(val1, val2) {
    return val1 + val2;
}
var suma = function (val1, val2) {
    return val1 + val2;
};
function imprimir() {
    console.log(suma(2, 5));
}
var dividir = function (a, b) {
    return a / b;
};
var throwError = function (message) {
    throw new Error(message);
    //Nunca se va a alcanzar el return ya q la función retorna "never"
    return message;
};
imprimir();
throwError("error encontrado");
