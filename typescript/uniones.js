function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new console.error("Espera un string pero se recibi\u00F3 un " + padding);
}
console.log(padLeft('hola mundo', 10));
