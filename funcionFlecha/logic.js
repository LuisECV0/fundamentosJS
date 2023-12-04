
const area = (base, altura) => base * altura;
const calcularArea = () => {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);

    var resultado = document.getElementById("resultado");
    var areaa = area(base,altura);
    resultado.innerHTML = "el area es : " + areaa;
}