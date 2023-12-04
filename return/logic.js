function sumar(num1,num2) {
    return num1 + num2;
}
function numeros() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var resultado = document.getElementById("resultado");

    var suma = sumar(n1,n2);
    resultado.innerHTML = "la suma es : " + suma; 
}