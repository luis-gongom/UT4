import { guardarLS } from "./LocalStorage.js";
import {Producto} from './Producto.js'
import {Categoria} from './Categoria.js'

export let mostrar_productos = (mensaje, productos) => {
    let cadena = "<h2>"+mensaje+"</h2>";
    cadena+="<ul>";
    for (let i=0;i<productos.length; i++){
        cadena+="<li>"+productos[i].mostrar()+"</li>";
    }
    cadena+="</ul>";
    return cadena;
}

export let add_producto = (array) => {
    array.push(new Producto (4, "Pixel 11 Pro", new Categoria(1, "Smartphone")))
    guardarLS(array);
    return array;
}