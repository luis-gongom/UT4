class Alumno {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrar(){
        return this.nombre+" - "+this.edad+" años";
    }
}