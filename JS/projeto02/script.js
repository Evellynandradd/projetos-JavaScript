function verificarIdade(event) {
    event.preventDefault();

    var idade = parseInt(document.querySelector('#idade').value);
    var resultado = document.getElementById('resultado');

    if (idade < 60) {
        resultado.innerHTML = "fila comum";
    } else {
        resultado.innerHTML = "fila prioritária";
    }
}
