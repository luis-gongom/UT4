console.log(document.body);
//Repaso a innerHTML
let perros = ["Ulula", "Perro de César", "Simba"];
let div= document.getElementById("ejercicio-contenedor");
let pasa= window.confirm("Quieres mostrar los perros");

if (pasa){
    div.innerHTML+="<ul>";
    for (let i =0; i<perros.length;i++){
        div.innerHTML+="<li>"+perros[i]+"</li>";
    }
    div.innerHTML+="</ul>";
}else{
    div.innerHTML+="<p>No se muestran los perros</p>";
}

//Propiedades del objeto window
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location);
//let ventana = window.open("http://www.marca.com", "_blank");

let ventana2 = window.open("web2.html", "_blank");
ventana2.document.body.write="DSAD";
setTimeout(()=> {
    ventana2.close();
},2000)
