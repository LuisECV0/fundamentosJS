function numeroMayor(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = document.getElementById("resultado");

    if ( num1 > num2) {
        resultado.innerHTML="el numero mayor es :" + num1;
    }else if( num2 > num1) {
        resultado.innerHTML= "el numeromayor es :" + num2;
    }else {
        resultado.innerHTML ="los numeros son iguales";
    }
}