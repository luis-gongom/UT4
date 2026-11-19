import { cargarDatos, guardarLS } from "./LocalStorage.js";
import { Persona } from "./Persona.js";
import {mostrarPersonas, ordenarNombre, ordenarEdad, cumplir} from "./funciones.js"

let div = document.getElementById("ejercicio-contenedor");
let personas = [];

let datos = localStorage.getItem("personas");
if (datos != null){
    personas = cargarDatos(JSON.parse(datos));
}else{
    personas = [];
    let p1 = new Persona("Pedro", 26);
    personas.push(p1);
    let p2 = new Persona("Rodri", 23);
    personas.push(p2);
    let p3 = new Persona("César", 19);
    personas.push(p3);
    let p4 = new Persona("Luis", 38);
    personas.push(p4);
    guardarLS(personas);
}

div.innerHTML+=mostrarPersonas("",personas);

div.innerHTML+=mostrarPersonas(" ordenadas alfabeticamente", ordenarNombre(personas));

div.innerHTML+=mostrarPersonas(" ordenadas por edad", ordenarEdad(personas));

personas=cumplir(personas);

div.innerHTML+=mostrarPersonas("",personas);