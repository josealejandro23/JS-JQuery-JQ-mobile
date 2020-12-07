enum direccion{
   arriba = "up",  //0
   abajo = "down",   //1
   derecha = "right", //2
   izquierda = "left" //3
}

enum tamanio{
   pequenio = 1,
   medio = 3,
   grande = 5,
   muyGrande = 10
}

interface pelota{
   size: tamanio
   posicionInicial: direccion;
}

const pelota: pelota = {
   posicionInicial : direccion.arriba,
   size : tamanio.medio
}
/////////////////////////////////
enum rol {
   estudiante,
   profesor,
   administrativo
}

let persona = {
   nombre : "juan",
   edad : 24,
   direccion : {
      calle : "rosa",
      carrera : "americas"
   },
   cursos : ["sql", "pascal"],
   puesto : rol.profesor
}

console.log(persona);