let div = document.getElementById("ejercicio-contenedor");

//Ejercicio 1
let fecha = new Date();
div.innerHTML+=fecha.toLocaleDateString()+" - "+fecha.toLocaleTimeString();

console.log(fecha);
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

//Ejercicio 2
let rodri = new Date("2003-11-21");
/*console.log(rodri);
console.log(rodri.getDay());
console.log(rodri.getDate());
console.log(rodri.getMonth());
console.log(rodri.getFullYear());
console.log(rodri.getHours());
console.log(rodri.getMinutes());
console.log(rodri.getSeconds());*/
console.log(rodri.toLocaleDateString());

//Ejercicio 3
let d = rodri.getDay();
let dia = "";
switch (d){
    case 1:
        dia="Lunes";
        break;
    case 2:
        dia="Martes";
        break;
    case 3:
        dia="Miercoles";
        break;
    case 4:
        dia="Jueves";
        break;
    case 5:
        dia="Viernes";
        break;
    case 6:
        dia="Sábado";
        break;
    case 7:
        dia="Domingo";
        break;
}
console.log("Es "+dia);
//Lo hacemos también con los meses
let mes = "";
let m = rodri.getMonth();
switch (m){
    case 0:
        mes="Enero";
        break;
    case 1:
        mes="Febrero";
        break;
    case 2:
        mes="Marzo";
        break;
    case 3:
        mes="Abril";
        break;
    case 4:
        mes="Mayo";
        break;
    case 5:
        mes="Junio";
        break;
    case 6:
        mes="Julio";
        break;
    case 7:
        mes="Agosto";
        break;
    case 8:
        mes="Septiembre";
        break;
    case 9:
        mes="Octubre";
        break;
    case 10:
        mes="Noviembre";
        break;
    case 11:
        mes="Diciembre";
        break;
}
console.log("Es "+mes);

//Ejercicio 4
//rodri = new Date("2003-11-21");

let edad = fecha.getFullYear()-rodri.getFullYear();
let meses = fecha.getMonth()-rodri.getMonth();
let dias = fecha.getDate()-rodri.getDate();
if(meses<0 || (meses==0 && dias<0)){
    edad --;
}
console.log("Tiene "+edad+" años");

//Ejercicio 5
let futura = new Date ("2027-06-17");
let diferencia = futura - fecha;
console.log(Math.trunc(diferencia/(1000*60*60*24)));

//Ejercicio 6
let SumarDias = (fecha, dias) => {
    return  new Date(fecha.setDate(fecha.getDate() + dias));
}

console.log(SumarDias(rodri, 20));
 
//Ejercicio 7
let dias_entre = (f1, f2) =>{
    let dif;
    if(f1>f2) 
        dif = f1-f2;
    else 
        dif = f2 -f1;
    return Math.trunc(dif/(1000*60*60*24));
}
let fecha1 = new Date ("2027-06-17");
let fecha2 = new Date ("2027-03-03");
console.log(dias_entre(fecha1, fecha2));


//Ejercicio 8
let eventos = [];
let e1 = {
    nombre: "Rodri",
    fecha: new Date ("2003/11/21")
}
eventos.push(e1);
let e2 = {
    nombre: "Pedro",
    fecha: new Date ("2000/01/15")
}
eventos.push(e2);
let e3 = {
    nombre: "César",
    fecha: new Date ("2007/05/19")
}
eventos.push(e3);

let e4 = {
    nombre: "Luis",
    fecha: new Date ("1994/07/15")
}
eventos.push(e4);

let ordenados = eventos.toSorted((a, b) => b.fecha - a.fecha);
console.log(ordenados);