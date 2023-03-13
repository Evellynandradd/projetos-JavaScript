let idade = parseInt(document.querySelector('#idade').value);
let resultado = document.getElementById('resultado');

function verificarIdade(event){
    if(idade < 60){
        resultado.innerHTML = "fila comun"
    } else {
        resultado.innerHTML = "fila prioritaria"
    }
   
    event.preventDefault()
}
