var resultado = document.querySelector("#resultado")

function limpar() {
    resultado.innerHTML = ""
}

function inserir(n){
    resultado.innerHTML += n;
}

function voltar() {
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length -1)
}

function calcular() {
    resultado.innerHTML = eval(resultado.innerHTML);
}