if (localStorage.getItem("usuario")){
    console.log("EXISTE");
    console.log(localStorage.getItem("usuario"));
}else{
    console.log("NO EXISTE");
    localStorage.setItem("usuario", "pepe");
}
