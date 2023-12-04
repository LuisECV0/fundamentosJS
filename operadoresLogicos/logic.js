function parImpar() {
    var num = parseInt(document.getElementById("numero").value);

    if ( num % 2 == 0) {
        resultado.innerHTML = "Es par";
    }else if ( num % 2 != 0) {
        resultado.innerHTML = "es impar"
    }

}