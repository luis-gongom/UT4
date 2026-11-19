let div = document.getElementById("ejercicio-contenedor");
let contactos = [];


let mostrar_contactos = (array) => {
    let cadena="<h2>Lista de contactos</h2>";
    cadena+="<ul>";
    for (let i = 0;i<array.length; i++){
        cadena+="<li>ID: "+array[i].id+" - Nombre:  "+array[i].nombre+" - Telefono: "+array[i].telefono+" - Correo: "+array[i].correo+"</li>";
    }
    cadena+="</ul>";
    return cadena;
}
let anadir_contacto = () => {
    let nuevo = {
        id: contactos.length,
        nombre: "Luis",
        telefono: "666222111",
        correo: "luis@edu.es"    
    }
    contactos.push(nuevo);
    //Al guardar muestro el array y sobrescribo la clave contactos con el nuevo estado del array
    div.innerHTML+=mostrar_contactos(contactos);
    localStorage.setItem("contactos", JSON.stringify(contactos));
}
let eliminar_contacto = (id) => {
    let aux = [];
    //Para eliminar hago una copia en un array aux ignorando el id que quiero borrar
    for (let i = 0; i<contactos.length; i++){
        if (contactos[i].id != id) {
            aux.push(contactos[i]);
        }
    }
    //Al eliminar muestro el array y sobrescribo la clave contactos con el nuevo estado del array
    div.innerHTML+=mostrar_contactos(aux);
    localStorage.setItem("contactos", JSON.stringify(aux));
    contactos = aux;
}


let buscar_por_nombre = (nombre) => {
    let encontrados = [];
    for (let i =0 ; i<contactos.length; i++){
        if (contactos[i].nombre==nombre){
            encontrados.push(contactos[i]);
        }
    }
    return encontrados;
    return contactos.filter(contacto => contacto.nombre == nombre);
}
let ordenar_por_nombre = () => {
    return contactos.toSorted((a,b)=> a.nombre.localeCompare(b.nombre, 'es'));
}


//Al iniciar compruebo si existe en el localStorage por la clave contactos
let datos = localStorage.getItem("contactos");
if (datos != null){
    contactos = JSON.parse(datos);
    div.innerHTML+=mostrar_contactos(contactos);
    if (confirm("¿Quieres añadir un nuevo contacto?")){
        anadir_contacto();
    }
    if (confirm("¿Quieres eliminar un contaco?")){
        //Fuerzo a eliminar el ID 2, es decir Pedro 
        eliminar_contacto(2);
    }
    if (confirm("¿Quieres buscar un contacto?")){
        div.innerHTML+=mostrar_contactos(buscar_por_nombre("César"));
    }
    div.innerHTML+=mostrar_contactos(ordenar_por_nombre());

}else{ //Si no existe creo unos contactos de pruba
    alert("No hay datos en el localStorage, por lo que los mockeamos");
    let contacto1 = {
        id: 1,
        nombre: "Rodri",
        telefono: "66655544",
        correo: "rodri@edu.es"
    }
    contactos.push(contacto1);
    let contacto2 = {
        id: 2,
        nombre: "Pedro",
        telefono: "666777444",
        correo: "pedro@edu.es"
    }
    contactos.push(contacto2);
    let contacto3 = {
        id: 3,
        nombre: "César",
        telefono: "666333222",
        correo: "cesar@edu.es"
    }
    contactos.push(contacto3);
    localStorage.setItem("contactos", JSON.stringify(contactos));

    div.innerHTML+=mostrar_contactos(contactos);
    
    if (confirm("¿Quieres añadir un nuevo contacto?")){
        anadir_contacto();
    }
    if (confirm("¿Quieres eliminar un contaco?")){
        //Fuerzo a eliminar el ID 2, es decir Pedro 
        eliminar_contacto(2);
    }
    if (confirm("¿Quieres buscar un contacto?")){
        div.innerHTML+=mostrar_contactos(buscar_por_nombre("César"));
    }
    div.innerHTML+=mostrar_contactos(ordenar_por_nombre());

    
}