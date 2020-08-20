import * as objeto from './clases.js'

function inicio(){
    //var mensaje = document.getElementById('mensaje')
    var mensaje2 = document.getElementById('mensaje2')
    //mensaje.innerHTML = persona1.imprimir()
    mensaje2.innerHTML = emplado1.imprimir()
}

var persona1 = new objeto.Persona('José Alejandro', 'Vargas', 24)

var emplado1 = new objeto.Empleado('Gratiniano','Vargas',59,'Operario', 1000000)

window.addEventListener('DOMContentLoaded',inicio,false)