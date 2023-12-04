function imprimirNumeros() {
    var desde = parseInt(document.getElementById("desde").value);
    var hasta = parseInt(document.getElementById("hasta").value);
    var resultado = document.getElementById("resultado");
    if (hasta > desde) {
        for( var i = desde; i<= hasta; i++ ) {
            resultado.innerHTML += i + " ";
        }
    }else {
        alert('valores no validos');
    }
    
}