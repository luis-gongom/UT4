import {Producto} from './Producto.js'
import {Categoria} from './Categoria.js'
export let regenerarLS = (datos) => {
    let productos = [];
    for (let i=0; i<datos.length; i++){
        productos.push(new Producto(datos[i].id, datos[i].nombre, new Categoria(datos[i].categoria.id, datos[i].categoria.nombre)));
    }
    return productos;
}

export let guardarLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}