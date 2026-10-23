let numero = 4.7;
console.log(Math.round(numero));  
console.log(Math.floor(numero));  
console.log(Math.ceil(numero));   
console.log(Math.random());     

let aleatorio = Math.floor(Math.random() * 100) + 1;
console.log(aleatorio);

let fecha = new Date();
console.log(fecha.getFullYear());

let texto = "hola_mundo";
console.log(texto.charAt(2));
for (let i =0; i<texto.length; i++){
    console.log(texto.charAt(i));
}
console.log(texto.substring(0, 4));
console.log(texto.indexOf('_'));
console.log(texto.includes("mun"));
console.log(texto.toLocaleUpperCase());


//ventana
//let nombre = prompt("Indicame el nombre: ");
//let edad = Number(prompt("Introduce edad: "));
//window.alert("Buenos dias "+nombre);
let nombre = "Alumno";
let edad = 22;
let parrafo_edad="<p>";
if(edad >=18){
    parrafo_edad+="Eres mayor de edad</p>";
}else{
    parrafo_edad+="Eres menor de edad</p>";
}
//alert(cadena);

//Document write
//document.write("<p>Hola " + nombre+"</p>");
//document.write(parrafo_edad);
//document.write(""); //Esto no permite borrar
//InnerHTML
//document.body.innerHTML="";

document.body.innerHTML+="<p>Hola " + nombre+"</p>";
document.body.innerHTML+=parrafo_edad;

let div = document.getElementById("ejercicio-contenedor");
console.log(div);
div.innerHTML ="";
div.innerHTML+="<p>Hola " + nombre+"</p>";
div.innerHTML+=parrafo_edad;

let nombres = ["César", "Pedro", "Rodri"];

div.innerHTML +="<ul>";
for (let i=0; i<nombres.length;i++){
    div.innerHTML+="<li>"+nombres[i]+"</li>";
}
div.innerHTML+="</ul>";