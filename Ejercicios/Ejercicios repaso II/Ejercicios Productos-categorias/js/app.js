import {Producto} from './Producto.js'
import {Categoria} from './Categoria.js'
import { regenerarLS, guardarLS } from "./LocalStorage.js";
import { mostrar_productos, add_producto } from './funciones.js';

let productos = [];
let datos = localStorage.getItem("productos");

if (datos!=null){
    productos=regenerarLS(JSON.parse(datos));
}else{
    let p1 = new Producto (1, "Samsung 77", new Categoria(1, "TV"));
    productos.push(p1);
    let p2 = new Producto (2, "Xiaomi RedMi 17", new Categoria(1, "Smartphone"));
    productos.push(p2);
    let p3 = new Producto (3, "iPhone 18", new Categoria(1, "Smartphone"));
    productos.push(p3);
    guardarLS(productos);
}

let div = document.getElementById("ejercicio-contenedor");
div.innerHTML+=mostrar_productos("Listado de productos", productos);
productos = add_producto (productos);
div.innerHTML+=mostrar_productos("Listado de productos", productos);