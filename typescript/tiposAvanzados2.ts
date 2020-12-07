interface animal {
	name: string;
}

//esta es una manera de agregar propiedades a una interface, se crea otra interface que extiende
//la anterior sin modificarla
interface tigre extends animal {
	genero: string;
}

//esta es otra manera de agregar propiedades a una interface, modifica la interface original
//Debe tenerse cuidado pues por error podrían agregarse
//propiedades a interfaces definidas previamente si es que
//se olvida que estas comparten el mismo nombre
interface animal {
	age: number;
}

const tigre1: tigre = {
	name: "rocky",
	genero: "macho",
	age: 3,
};

const raton: animal = {
	name: "mickey",
	age: 10,
};
//Types desde aquí

type animal2 = {
	name: string;
};

//Esta es una manera de agragar propiedades a un type
type felino = animal2 & {
	genero: string;
};

const leon: felino = {
	name: "rocky2",
	genero: "macho",
};
