import {Producto} from './Producto.js'

export const gestionarLS = (productos) =>{
    if (localStorage.getItem("productos")){
        //alert("Productos cargados");
        let info = JSON.parse(localStorage.getItem("productos"));
        for (let i = 0; i< info.length; i++){
            let p = new Producto(info[i].nombre, info[i].precio, info[i].categoria);
            productos.push(p);
        }
    }else{
        let p1 = new Producto("LG 75 pulgadas", 1000, "TV");
        productos.push(p1);
        let p2 = new Producto("Accer 7500", 800, "Informática");
        productos.push(p2);
        let p3 = new Producto("Xiaomi 17", 500, "Telefónia");
        productos.push(p3);
        localStorage.setItem("productos", JSON.stringify(productos));
        alert("Local Storage generado");
    }
}