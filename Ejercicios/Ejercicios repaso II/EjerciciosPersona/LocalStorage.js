import { Persona } from "./Persona.js";

export let cargarDatos = (datos) => {
    let personas = [];
    for (let i=0; i<datos.length; i++){
        personas.push(new Persona (datos[i].nombre, datos[i].edad))
    }
    return personas;
}

export let guardarLS = (personas) => {
    localStorage.setItem("personas", JSON.stringify(personas));
    return true;     
}