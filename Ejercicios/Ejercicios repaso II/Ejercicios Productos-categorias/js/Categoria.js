export class Categoria {
    constructor (id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
    mostrar () {
        return "ID: "+this.id+" - Nombre: "+this.nombre;
    }
}