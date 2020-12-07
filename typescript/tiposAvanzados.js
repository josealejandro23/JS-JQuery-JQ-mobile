var pet = getMascota();
function esPez(pet) {
    return pet.nadar !== undefined; //se castea como un tipo definido
}
if (esPez(pet)) {
    pet.nadar();
}
else {
    pet.volar();
}
