function calcular(){
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value)

    if(isNaN(peso)|| peso === 0) return notNumber("Peso");

    if(isNaN(altura) || altura == 0) return notNumber("Altura");

    let imc = (peso/(altura ** 2)).toFixed(2)

    resultDisplay(imc, getNivel(imc))
}

function notNumber(err){
    const span = document.querySelector('.resultado')
    span.innerHTML = `${err} inválido`;
    span.style.backgroundColor ="#D7102E"
}

function getNivel(imc){
    const nivel = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidaded grau 1",
        "Obesidaded grau 2",
        "Obesidaded grau 3"
    ];

    if(imc > 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 30) return nivel[3];
    if(imc >= 25) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];

}

function resultDisplay(imc, msg){
    const span = document.querySelector('.resultado')
    span.innerHTML = `Seu IMC é de ${imc} (${msg})`;
    span.style.backgroundColor = "#2753F2"
}

function formatarAltura(altura){

    let alturaFormatada = altura.value + '';
    alturaFormatada = parseInt(alturaFormatada.replace(/[\D]+/g, ''));
    alturaFormatada = alturaFormatada + '';
    alturaFormatada = alturaFormatada.replace(/([0-9]{2})$/g, ".$1")

    altura.value = alturaFormatada;

    if(alturaFormatada == 'NaN') altura.value = '';
}