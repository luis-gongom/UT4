let mi_funcion_interna = (texto) => {
    console.log(texto);
}

export const porcentaje = (precio, descuento) => {
    mi_funcion_interna("Has llamado a un porcetanje");
    return (precio/100)*descuento;

}

export const porcentaje2 = (cantidad) => {
    return cantidad*0.1;
}
export const TAE = 3.21;