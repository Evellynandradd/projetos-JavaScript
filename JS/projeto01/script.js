
    let n1 = (document.querySelector('#n1'))
    let n2 = (document.querySelector('#n2'))
    let resultado = document.querySelector('span')
    
    function somar(){
        resultado.innerHTML = Number(n1.value) + Number(n2.value)
    }
