function limpar() {
    var resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""

}
function inserir(n){
    var resultado = document.querySelector("#resultado")
    resultado.innerHTML += n;
}
function voltar() {
    var resultado = document.querySelector("#resultado")
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length -1)
}
function calcular() {
    var resultado = document.querySelector("#resultado")
    resultado.innerHTML = eval(resultado.innerHTML);
}