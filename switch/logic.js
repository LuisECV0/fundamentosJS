function realizarAccion() {
    var opcion = document.getElementById("opcion").value;
    var resultado = document.getElementById("resultado");

    switch(opcion) {

        case "1":
            resultado.innerHTML = "opcion 1";
            break;
        case "2":
            resultado.innerHTML = "opcion 2";
            break;
        case "3":
            resultado.innerHTML = "opcion 3";
            break;
        default:
            resultado.innerHTML = "No se ha seleccionado una opción válida.";


    }
}