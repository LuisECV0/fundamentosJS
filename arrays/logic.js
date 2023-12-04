function encontrarNumeroMasGrande() {
    var numerosInput = document.getElementById("numeros").value;

    var numerosArray = numerosInput.split(',').map(Number);


    var numeroMasGrande = Math.max(...numerosArray);

    document.getElementById("resultado").textContent = `El número más grande es: ${numeroMasGrande}`;
}