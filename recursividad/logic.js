function factorial(n) {
    if ( n === 0 || n === 1) {
        return 1;
    }else {
        return n * factorial(n - 1);
    }
}
function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");
     
    var factorialCalculado = factorial(numero);
    resultado.innerHTML = `el resultado del factorial es : ` + factorialCalculado;
}