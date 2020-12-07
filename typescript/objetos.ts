interface persona {
	nombre: string;
	edad: number;
	direccion: {
		calle: string;
		carrera: string;
	};
	cursos: string[];
}

let persona1: persona = {
	nombre: "juan",
	edad: 45,
	direccion: {
		calle: "americas",
		carrera: "segunda sur",
	},
	cursos: ["matemáticas", "tsc", "node"],
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

let hobbies: string[]; //se define el tipo de dato
hobbies = ["estudiar", "películas", "leer", "viajar"];

for (const hobbie of hobbies) {
	console.log(hobbie.toUpperCase());
}
