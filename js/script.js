function limpar() {
    document.querySelector("#resultado").innerHTML = "";
}
function inserir(n){
    var numero = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = numero + n;
}
function voltar() {
    var resultado = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular() {
    var numero = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = eval(numero);
}