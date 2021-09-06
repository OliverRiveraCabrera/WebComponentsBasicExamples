//actualizar el atributo del contador desde una funcion externa
function restart(){
    //obtencion del componente en una variable
    let counter = document.querySelector("#counter");
    //actualizacion del atributo count del componente
    counter.setAttribute("count", 1);

    //obtencion del valor del atributo del component y lo imprime en consola
    console.log(counter.getAttribute("count"));
}

function cambioNombre(){
    var txtNombre = document.getElementById("txtNombre");
    var nombre = txtNombre.value;

    document.querySelector("#componenteCambio").setAttribute("nombre", nombre);
}