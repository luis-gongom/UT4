let cadenas = [];

let div = document.getElementById("ejercicio-contenedor");
let limpiar_cadnena = (cad) => {
    cad = cad.toLowerCase();
    while (cad.indexOf(" ")!=-1){
        cad=cad.replace(" ", "");
    }
    return cad;
}

let cargar_cadenas = () => {
    /*let cantidad = Number(prompt("Indica cuantas cadenas: "));
    for (let i=0;i<cantidad;i++){
        let cad = prompt("Indica cadena: "+(i+1));
        cadenas.push(limpiar_cadnena(cad));
    }*/
   cadenas.push(limpiar_cadnena("Pedro"));
   cadenas.push(limpiar_cadnena("Antonio Manue lOpez"));
   cadenas.push(limpiar_cadnena("Hata para arap     atah"));
   cadenas.push(limpiar_cadnena("Buenos dias"));
   cadenas.push(limpiar_cadnena("Caac"));
}

let mostrar = (mensaje, cadenas) => {
    div.innerHTML+="<h2>"+mensaje+"</h2>";
    div.innerHTML+="<ul>"
    for (let i = 0; i<cadenas.length; i++){
        div.innerHTML+="<li>"+cadenas[i]+"</li>";      
    }
    div.innerHTML+="</ul>"
}
let array_invertido = (array) => {
    return array.toReversed();
}
let cadenas_mayusculas = (cadenas) => {
    let mayus =[];
    for (let i =0; i<cadenas.length; i++){
        mayus.push(cadenas[i].toUpperCase());
    }
    return mayus;
    //return cadenas.map(cad => cad.toUpperCase());
}
let invertir_cadena = (cadena) => {
    let inversa = "";
    for (let i = cadena.length-1; i>=0; i--){
        inversa+=cadena[i];
    }
    return inversa;
}
let cadenas_invertidas = (cadenas) => {
    return cadenas.map(cad => invertir_cadena(cad));
}
let cadenas_mas_grandes_que = (cadenas, limite) => {
    let mayores =[]
    for (let i =0; i<cadenas.length;i++){
        if (cadenas[i].length>limite){
            mayores.push(cadenas[i]);
        }
    }
    return mayores;
    //return cadenas.filter(cad => cad.length>limite);
}
let cadena_larga = (cadenas) =>{
    let mayor = cadenas[0];
    for (let i=0; i<cadenas.length; i++){
        if (cadenas[i].length>mayor.length){
            mayor=cadenas[i];
        }
    }
    return mayor;
    //return cadenas.reduce((acc, cadena) => acc.length > cadena.length ? acc : cadena);
}

let cadena_corta = (cadenas) =>{
    let menor = cadenas[0];
    for (let i=0; i<cadenas.length; i++){
        if (cadenas[i].length<menor.length){
            menor=cadenas[i];
        }
    }
    return menor;
    //return cadenas.reduce((acc, cadena) => acc.length < cadena.length ? acc : cadena);
}

let buscar_cadena = (cadena, cadenas) => {
    return cadenas.filter(cad => cad == cadena);
}
let esPalindroma = (cadena) => {
    if (cadena == "")
        return false;

    for (let i=0;i<Math.ceil(cadena.length/2); i++){
        if (cadena[i]!=cadena[cadena.length-1-i]){
            return false;
        }
    }
    return true;
    //return cadena == invertir_cadena(cadena);
}
let cadenas_palindromas = (cadenas) => {
    return cadenas.filter(cad => esPalindroma(cad));
}
cargar_cadenas();
mostrar("Cadenas insertadas", cadenas);
mostrar("Array de cadenas invertido", array_invertido(cadenas));
mostrar("Cadenas en mayusculas", cadenas_mayusculas(cadenas));
mostrar("Cadenas invertidas", cadenas_invertidas(cadenas));
let limite = Number(prompt("Indica limite: "));
mostrar("Cadenas de mas de "+limite+" carácteres", cadenas_mas_grandes_que(cadenas, limite));
div.innerHTML+="<p>La cadena mas larga es: "+cadena_larga(cadenas)+"</p>";
div.innerHTML+="La cadena mas corta es: "+cadena_corta(cadenas);
let buscada = prompt("Que cadena quieres buscar: ");
encontradas = buscar_cadena(buscada, cadenas);
if (encontradas.length>0){
    div.innerHTML+="<p>La cadena "+buscada+" SI esta en el array</p>";
}else{
    div.innerHTML+="<p>La cadena "+buscada+" NO esta en el array</p>"
}
mostrar("Cadenas palindromas", cadenas_palindromas(cadenas));

mostrar("Cadenas insertadas", cadenas);