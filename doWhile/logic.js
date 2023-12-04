function imprimirNumeros() {
    var desde = parseInt(document.getElementById("desde").value);
    var hasta = parseInt(document.getElementById("hasta").value);
    var resultado = document.getElementById("resultado");    
    
    var i = desde;

    do {
        resultado.innerHTML += i;
        i++;
    }while( i<= hasta);


}