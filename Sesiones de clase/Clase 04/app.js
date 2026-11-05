//localStorage.clear();
//localStorage.removeItem("tema");

/*if (localStorage.getItem("usuario")){
    console.log("EXISTE");
    console.log(localStorage.getItem("usuario"));
}else{
    console.log("NO EXISTE");
    localStorage.setItem("usuario", "pepe");
    localStorage.setItem("tema","oscuro");
}*/

let almls = localStorage.getItem("alumno");
//localStorage.clear();
let div = document.getElementById("ejercicio-contenedor");
if (almls != null){
    console.log("SI EXISTE");
    console.log(almls);
    console.log(JSON.parse(almls));
    let alumno = new Alumno(JSON.parse(almls).nombre, JSON.parse(almls).edad)
    div.innerHTML+="<p>"+alumno.mostrar()+"</p>";
}else{
    console.log("NO EXISTE");
    let nombre = prompt("Dime nombre de alumno");
    let edad = Number(prompt("Dime edad: "));
    let nuevo_alumno = new Alumno (nombre, edad); 
    console.log(nuevo_alumno);
    localStorage.setItem("alumno",JSON.stringify(nuevo_alumno));
}

let fecha = new Date();
fecha.setTime(fecha.getTime() + (24 * 60 * 60 * 1000));
document.cookie = "usuario=Ana; expires=" + fecha.toUTCString();
document.cookie = "tema=oscuro;";
console.log("LAS COOKIES");
console.log(document.cookie);