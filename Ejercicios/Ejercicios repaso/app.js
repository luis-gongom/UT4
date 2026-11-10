
let div = document.getElementById("ejercicio-contenedor");

//Ejercicio 5
let contarCaracter = (texto, caracter) => {
    let cont =0;
    for (let i=0;i<texto.length; i++ ){
        if (texto[i]==caracter){
            cont++;
        }
    }
    return cont;
}
div.innerHTML+=contarCaracter("Hala madrid", "a")+"<br>";
//Ejercicio 7
let contarTipos = (texto) =>{
    const vocales = ["a","e","i","o","u"];
    const consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n','ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    texto = texto.toLowerCase();
    let cont_vocales =0;
    let cont_consonantes =0;
    for (let i=0;i<texto.length; i++ ){
        if (vocales.includes(texto[i])){
            cont_vocales++;
        }
        if (consonantes.includes(texto[i])){
            cont_consonantes++;
        }
    }
    return {
        vocales: cont_vocales,
        consonantes: cont_consonantes
    }
}
div.innerHTML+="Vocales: "+contarTipos("Hala madrid").vocales+" Consonantes: "+contarTipos("Hala madrid").consonantes+"<br>";

//Ejercicio 11 con todo de la Cruz => De La Cruz
let normalizar1 = (cadena) => {
    cadena = cadena.toLowerCase();
    cadena = cadena.trim();
    //Quitar los dobles espacios
    while (cadena.indexOf("  ")!=-1){
        cadena=cadena.replace("  "," ");
    }
    console.log(cadena);
    let partes= cadena.split(" ");
    console.log(partes);
    let normalizada = "";
    for (let i=0; i<partes.length; i++){
        let primer= partes[i].charAt(0).toUpperCase();
        normalizada+=partes[i].replace(partes[i].charAt(0), primer)+" ";
    }
    return normalizada.trim();

}
div.innerHTML+="<p>"+normalizar1("  JaviEr Guzmam De    La Crúz   ")+"</p>";

//Ejercicio 12

let identificador = (nombre, ape1, ape2) => {
    let identificador = nombre.replace(" ", "").substring(0,3);
    identificador+= ape1.replace(" ", "").substring(0,3);
    identificador+= ape2.replace(" ", "").substring(0,3);
    return identificador.toLowerCase();
}
div.innerHTML+="<p>"+identificador("Javier", "Guzman", "Cruz")+"</p>";

//Ejercicio 14
let analizarPalabras = (frase) => {
    let ignorados = ["!","¡"];
    for (let i=0; i<ignorados.length;i++){
        frase = frase.replaceAll(ignorados[i],"");
    }
    let palabras= frase.split(" ");
    let mayor = palabras.reduce((acc, palabra) => acc.length > palabra.length ? acc : palabra);
    let menor = palabras.reduce((acc, palabra) => acc.length < palabra.length ? acc : palabra);
    let media = palabras.reduce((acc, palabra) => acc+palabra.length, 0)/palabras.length;
    return {
        mayor: mayor,
        menor: menor,
        media: media
    }
}
console.log(analizarPalabras("¡Hala madrid y nada mas!"));
console.log(analizarPalabras(""));

//Ejercicio 15
let cifrar = (texto) => {
    const alfabetoMayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    texto =texto.toUpperCase();
    let resultado = "";
    for (let i = 0; i<texto.length; i++){
        if(texto[i]!=" "){
            let indice = alfabetoMayusculas.indexOf(texto[i]);
            if (indice == 25){
                indice = 0;
            }
            resultado+=alfabetoMayusculas[indice+1];
        }else{
            resultado+=" ";
        }
        
        
    }
    return resultado;
}
div.innerHTML+="<p>"+cifrar("Javier Guzman Cruz")+"</p>";