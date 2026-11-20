export class Producto {
    static cont = 0;
    constructor (id, nombre, categoria){
        Producto.cont++;
        this.id = Producto.cont;
        this.nombre = nombre;
        this.categoria = categoria;
    }
    
    mostrar () {
        return "ID: "+this.id+" - Nombre: "+this.nombre+" - CATEGORIA => "+this.categoria.mostrar();
    }
}