var persona1 = {
    nombre: "juan",
    edad: 45,
    direccion: {
        calle: "americas",
        carrera: "segunda sur"
    },
    cursos: ["matemáticas", "tsc", "node"]
};
/*let persona = {
   nombre : "alejandro",
   edad : 24,
   direccion : {
      calle : "piagua",
      carrera : "segunda"
   },
   cursos : ["css", "delphi", "sql"]
} */
console.log(persona1.cursos);
var hobbies; //se define el tipo de dato
hobbies = ['estudiar', 'películas', "leer", "viajar"];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobbie = hobbies_1[_i];
    console.log(hobbie.toUpperCase());
}
