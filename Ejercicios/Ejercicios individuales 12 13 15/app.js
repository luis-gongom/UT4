//Ejercicio 12, 13 ,15

let usuario = localStorage.getItem("usuario");

if(usuario!=null){
    let recp = JSON.parse(usuario);
    let div = document.getElementById("ejercicio-contenedor");
    div.innerHTML+="<p> Nombre: "+recp.nombre+" edad: "+recp.edad+" años.</p>";
}else{
    let nombre = prompt("Indica nombre");
    let edad = Number(prompt("Indica edad"));
    let usuario = {
        nombre: nombre,
        edad: edad
    }
    localStorage.setItem("usuario", JSON.stringify(usuario));
}