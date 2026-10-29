let cad = "La cadena tenia   dobles    y triples      espacios";
//let cad ="casac"
let eliminar_dobles_espacios = (cadena) => {
    while(cadena.indexOf("  ")!=-1){
        cadena=cadena.replace("  ", " ");
    }
    return cadena;
}

let mostrar_cadena = (mensaje, cadena) => {
    document.getElementById("ejercicio-contenedor").innerHTML+="<h2>"+mensaje+"<h2>"
    document.getElementById("ejercicio-contenedor").innerHTML+=cadena
}
let contar_caracter = (cadena, caracter) => {
    let cont = 0;
    cadena=cadena.toLowerCase();
    caracter=caracter.toLowerCase();
    while(cadena.indexOf(caracter)!=-1){
        cadena=cadena.replace(caracter, "");
        cont++;
    }
    return cont;
}

let contar_vocales = (cadena) => {
    let vocales = ['a','e', 'i', 'o', 'u'];
    let cont = 0;
    for (let i=0; i<vocales.length; i++){
        cont+=contar_caracter(cadena, vocales[i]);
    }
    return cont;
}

let es_palidroma = (cadena) => {
    if (cadena==="")
        return false;
    let cad = cadena.toLowerCase();
    for (let i =0; i<Math.trunc(cad.length/2); i++){
        if(cad[i]!=cad[cad.length-i-1]){
            return false;
        }
    }
    return true;
}
let normlaizar_nombre = (nombre) => {
    let res = eliminar_dobles_espacios(nombre).toLowerCase().split(" ");
    for (let i = 0; i<res.length;i++){
        res[i]=res[i].charAt(0).toUpperCase()+res[i].substring(1);
        console.log(res[i]);
    }
    return res.join(" ");
}
mostrar_cadena("Original", cad);
mostrar_cadena("Sin espacios duplicados", eliminar_dobles_espacios(cad));
cad=eliminar_dobles_espacios(cad);
document.getElementById("ejercicio-contenedor").innerHTML+="<h2>Informacion sobre la cadena</h2>"
document.getElementById("ejercicio-contenedor").innerHTML+="<p>La cadena tiene "+cad.length+" caracteres</p>";
document.getElementById("ejercicio-contenedor").innerHTML+="<p>La cadena tiene "+cad.split(" ").length+" palabras</p>";
document.getElementById("ejercicio-contenedor").innerHTML+="<p>En la cadena tiene "+cad.split(" ")[0]+" es la primera palabra</p>";
document.getElementById("ejercicio-contenedor").innerHTML+="<p>En la cadena tiene "+cad.split(" ")[length-1]+" es la última palabra</p>";
document.getElementById("ejercicio-contenedor").innerHTML+="<p>La cadena invertida es "+cad.split("").reverse().join("")+" palabras</p>";
document.getElementById("ejercicio-contenedor").innerHTML+="<p>El caracter \"a\" aparece "+contar_caracter(cad, 'a')+" veces</p>";
document.getElementById("ejercicio-contenedor").innerHTML+="<p>En la cadena tiene "+contar_vocales(cad)+" vocales</p>";
if(es_palidroma(cad)){
    document.getElementById("ejercicio-contenedor").innerHTML+="<p>La cadena Si es palindroma</p>";
}else{
    document.getElementById("ejercicio-contenedor").innerHTML+="<p>La cadena NO es palindroma</p>";
}

document.getElementById("ejercicio-contenedor").innerHTML+="<p>El nombre normalizado "+normlaizar_nombre("paco UrbiNa loPez")+"</p>";