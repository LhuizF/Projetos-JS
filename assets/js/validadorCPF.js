export default (cpf) =>{
    const cpfFormatado = cpf.value;

    if(!cpfFormatado) return false;
    if(cpfFormatado.length !== 11) return false;

    const nineDigitCPF = cpfFormatado.slice(0, -2);
    const digito1 = setDigit(nineDigitCPF);
    const digito2 = setDigit(nineDigitCPF + digito1);
    const cpfTrue = nineDigitCPF + digito1 + digito2;

    return cpfTrue === cpfFormatado;
}

function setDigit(cpf){
    const cpfArr = Array.from(cpf);
    let cont = cpfArr.length + 1;
    let total = cpfArr.reduce((acc, cur)=>{
        acc += (cont * cur);
        cont--;
        return acc;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9? "0" : String(digito);
}
