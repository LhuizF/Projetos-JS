const rand = (min, max) => Math.floor(Math.random()* (max - min) + min);
const symbols = ',.;^~(){}[]+=_-*&%$#@!?/';

const getNumber = () => String.fromCharCode(rand(48, 58));
const getMinuscula = () => String.fromCharCode(rand(97, 123));
const getMaiuscula = () => String.fromCharCode(rand(65, 91));
const getSymbol = () =>  symbols[rand(0, symbols.length)];

function createPassword(qtd, num, min, mai, sym){
    const arrPassword = [];

    for(let i = 0; i < qtd; i++){
        num? arrPassword.push(getNumber()): null;
        min? arrPassword.push(getMinuscula()): null;
        mai? arrPassword.push(getMaiuscula()): null;
        sym? arrPassword.push(getSymbol()): null;
    }

    return mixCharacters(arrPassword).join('').slice(0, qtd);
};

function mixCharacters(password){
    let m = password.length;

    while(m) {
        const i = Math.floor(Math.random() * m--);
        const t = password[m];
        password[m] = password[i];
        password[i] = t;
    };
    return password;
};

document.getElementById('new-password').addEventListener('click', () => {
    const qtd =  document.getElementById('NumCharacter').value
    const password = createPassword( qtd,
        document.getElementById('chk-num').checked,
        document.getElementById('chk-min').checked,
        document.getElementById('chk-mai').checked,
        document.getElementById('chk-sym').checked
    );

    if(qtd < 4 || qtd > 30){
        displayMsg('Quantidade invalida');

    }else{
        if(!password){
            displayMsg('Nenhum caractere selecionado');

        }else{
            displayMsg('Selecione as opções abaixo', password);
        }
    }
});

function btnCopy(){
    const text = document.querySelector(".password");
    console.log(text.value);
    text.select();
    document.execCommand("Copy");
    alert("Senha copiada: " + text.value);
};

function displayMsg(msg, password){
    const pwContainer = document.querySelector('.password-container');
    const pwDisplay = document.querySelector('.password');
    const pwStatus = document.querySelector('.main-container p');

    if(!password){
        pwContainer.style.display = 'none';
        pwStatus.innerHTML = msg;
        pwDisplay.value = '';
    }else{
        pwContainer.style.display = 'flex';
        pwStatus.innerHTML = msg;
        pwDisplay.value = password;
    };
}