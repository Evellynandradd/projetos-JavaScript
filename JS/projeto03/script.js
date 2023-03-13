
let calcular = document.getElementById('calcular');



function imc() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome.value !=+ '' && altura !== '' && peso !== ''){

        let valorIMC = (peso / (altura * altura)).toFixed(1)
        resultado.textContent = valorIMC

        let classificacao = '';
        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso'
        } else if (valorIMC < 25){
            classificacao = 'Com peso ideal. Parabéns!!!'
        } else if (valorIMC < 30){
            classificacao = 'levemente acima do peso'
        } else if (valorIMC < 35){
            'com obesidade grau I'
        } else if (valorIMC < 40){
            'com obesidade grau II'
        } else {
            'com obesidade grau III. Cuidado!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`



    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }


}

calcular.addEventListener('click', imc)
