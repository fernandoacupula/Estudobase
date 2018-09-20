function calculadora() {
    var txtCalc1 = document.querySelector("#txtCalc1");
    var Calc1 = parseInt(txtCalc1.value);
    var txtCalc2 = document.querySelector("#txtCalc2");
    var Calc2 = parseInt(txtCalc2.value);
    var txtOperador = document.querySelector("#operacao");
    var operador = txtOperador.value;
    var txtResultado = document.querySelector("#resultado");
    if (operador == "+") {
        var resultado = Calc1 + Calc2;
        txtResultado.value = resultado;
     }
     if (operador == "-") {
        var resultado = Calc1 - Calc2;
        txtResultado.value = resultado; }
     if (operador == "*") {
        var resultado = Calc1 * Calc2;
        txtResultado.value = resultado;}
     if (operador == "/") {
        var resultado = Calc1 / Calc2;
        txtResultado.value = resultado; }
} 

var btn = document.querySelector("#btnCalcular");
btn.addEventListener('click', calculadora);