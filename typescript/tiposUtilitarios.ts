interface objeto {
	title?: string;
	description: string;
}

//convierte todas las propiedades de objeto a opcionales
/* type ParcialTodo = Partial<animal>;

const casa : ParcialTodo = {} */

//convierte todas las propiedades de Todo a readOnly
/* type ReadOnlyObjeto = Readonly<objeto>;
const casa : ReadOnlyObjeto = {
   title : "casa de campo",
   description : "casa vacacional"
}
//no permitido cambiar el titulo ni descripción
casa.title = "casa veraniega" */

//propiedad que evita que un campo no tome valores nulos
//T solo puede tomar valor numérico o string
type T = NonNullable<string | number | null | undefined>;

//Hacer que todos los campos sean requeridos
type RequiredObjeto = Required<objeto>;
const casa: RequiredObjeto = {
	description: "descripción de la casa",
	title: "casa veraniega",
};
