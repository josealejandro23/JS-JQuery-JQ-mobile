interface ave{
   volar():void;
   ponerHuevos():void;
}

interface pez{
   nadar():void;
   ponerHuevos():void;
}

declare function getMascota(): pez | ave;

let pet = getMascota();

function esPez(pet: pez | ave):pet is pez {
   return (pet as pez).nadar !== undefined;  //se castea como un tipo definido
}

if (esPez(pet)){
   pet.nadar();
} else{
   pet.volar();
}