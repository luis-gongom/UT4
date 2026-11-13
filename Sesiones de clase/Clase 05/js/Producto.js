export class Producto {
     constructor (nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrar () {
        return this.nombre+" - "+this.precio+" € - "+this.categoria;
    }
    modificar_precio (cantidad){
        this.precio+=cantidad;
    }
}