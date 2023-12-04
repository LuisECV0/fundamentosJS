function imprimirNumeros() {
    var desde = parseInt(document.getElementById("desde").value);
    var hasta = parseInt(document.getElementById("hasta").value);
    var resultado = document.getElementById("resultado");
    var contador = desde + 1 ;
    while (contador < hasta) {
        
        resultado.innerHTML += contador + "," ;
        
        contador++;
    }
}