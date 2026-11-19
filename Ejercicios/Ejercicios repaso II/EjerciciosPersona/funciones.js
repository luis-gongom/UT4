export let mostrarPersonas = (criterio, personas) => {
    let cadena = "<h2> Listado de personas "+criterio+"</h2>"
    cadena+="<ul>"
    for (let i =0;i<personas.length;i++){
        cadena+="<li>"+personas[i].mostrarInformacion()+"</li>";
    }
    cadena+="</ul>";
    return cadena;
}

export let ordenarNombre = (personas) =>  {
    return personas.toSorted((a,b) => a.nombre.localeCompare(b.nombre, "es"));
}

export let ordenarEdad = (personas) =>  {
    return personas.toSorted((a,b) => a.edad - b.edad);
}
export let cumplir = (personas) => {
    for (let i=0; i<personas.length; i++){
        personas[i].cumplirAnios();
    }
    return personas;
}