import {porcentaje, TAE} from './financieras.mjs'
import { gestionarLS } from './localstorage.js';


let div = document.getElementById("ejercicio-contenedor");
let productos = [];
let mostrar_array = (array) => {
    for (let i=0; i<array.length; i++){
        div.innerHTML+=array[i].mostrar()+"<br>";
    }
}
let incrementar = (index, cantidad) => {
    productos[index].modificar_precio(cantidad);
}
let aplicar_descuento = (descuento) => {
    for (let i = 0; i< productos.length; i++){
        let cantidad = porcentaje(productos[i].precio, descuento)
        productos[i].modificar_precio(-cantidad);
    }
}

gestionarLS(productos);

mostrar_array(productos);
//incrementar(2,2000000);
aplicar_descuento(10);
mostrar_array(productos);
console.log(TAE);