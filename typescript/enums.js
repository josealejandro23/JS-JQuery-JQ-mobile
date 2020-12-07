var direccion;
(function (direccion) {
    direccion["arriba"] = "up";
    direccion["abajo"] = "down";
    direccion["derecha"] = "right";
    direccion["izquierda"] = "left"; //3
})(direccion || (direccion = {}));
var tamanio;
(function (tamanio) {
    tamanio[tamanio["pequenio"] = 1] = "pequenio";
    tamanio[tamanio["medio"] = 3] = "medio";
    tamanio[tamanio["grande"] = 5] = "grande";
    tamanio[tamanio["muyGrande"] = 10] = "muyGrande";
})(tamanio || (tamanio = {}));
var pelota = {
    posicionInicial: direccion.arriba,
    size: tamanio.medio
};
/////////////////////////////////
var rol;
(function (rol) {
    rol[rol["estudiante"] = 0] = "estudiante";
    rol[rol["profesor"] = 1] = "profesor";
    rol[rol["administrativo"] = 2] = "administrativo";
})(rol || (rol = {}));
var persona = {
    nombre: "juan",
    edad: 24,
    direccion: {
        calle: "rosa",
        carrara: "americas"
    },
    cursos: ["sql", "pascal"],
    puesto: rol.profesor
};
console.log(persona);
