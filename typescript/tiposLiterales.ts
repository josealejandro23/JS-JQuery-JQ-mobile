type color = "rojo" | "verde" | "azul";
 //el valor asignado solo puede ser uno de los declarados
const color1 : color = "rojo";

type dado = 1|2|3|4|5|6;
 //el valor asignado solo puede ser uno de los declarados
const dado1 : dado = 4;

interface validacionExitosa {
   esValido : true;
   reason : null;
}

interface validacionFallida {
   esValido : false;
   reason : string;
}

type validacion = validacionExitosa | validacionFallida;

const result : validacion = {
   esValido : true,
   reason : null
}

const result2 : validacion = {
   esValido : false,
   reason : "error de login"
}

if (!result2.esValido) {
   console.log(result2.reason);
}

export default{}