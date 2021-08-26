import validateCPF from './validadorCPF.js';

class Validar{
    constructor(){
        this.form = document.querySelector('.form');
        this.event();
    };

    event(){
        this.form.addEventListener('submit', (e)=>{
            this.handleSubmmit(e);
        });
    };

    handleSubmmit(e){
        e.preventDefault();

        const checkInput = this.checkInput();
        const checkPassword = this.checkPassword();
        const checkCPF = validateCPF(this.form.querySelector('.cpf'));

        console.log(checkInput, checkPassword, checkCPF)

        if(!checkCPF) return this.alertErr(this.form.querySelector('.cpf'), 'CPF inválido');
        if(checkInput && checkPassword && checkCPF) alert('Formulário Enviado :D');
    };

    checkInput(){
        let status = true;

        for(let errorText of this.form.querySelectorAll(".form p")){
            errorText.remove();
        };

        for(let input of this.form.querySelectorAll('input')){
            if(!input.value){
                this.alertErr(input, `O campo "${input.previousElementSibling.innerHTML}" não pode ser nulo.`);
                status = false;
            };

            if(input.classList.contains('user')){
                //se não retornar true status vai ser false
                if(!this.validaUser(input)) status = false;
            };
        };

        return status;
    };

    validaUser(input){
        // se estiver tudo certo retorna true
        const user = input.value;
        let status = true;

        if(user.length < 4 || user.length > 12){
            this.alertErr(input, "Nome de usuário deverá ter entre 4 e 12 caracteres");
            status = false;
        };

        if(!user.match(/[a-zA-Z0-9]+/g)){
            this.alertErr(input, 'Nome de usuário só pode conter letras e/ou números');
            status = false;
        };

        return status;
    };

    checkPassword(){
        const password = this.form.querySelector('.password');
        const confPassword = this.form.querySelector('.confirm-password');
        let status = true;

        if(password.value.length < 6 || password.value.length > 12){
            this.alertErr(password, 'Senha precisa ter entre 6 e 12 caracteres.');
            status = false;
        };

        if(password.value !== confPassword.value){
            this.alertErr(password, "As senhas precisam ser iguais");
            this.alertErr(confPassword, "As senhas precisam ser iguais");
            status = false;
        };

        return status;
    };

    alertErr(input, msg){
        const p = document.createElement("p");
        p.innerHTML = msg;
        input.insertAdjacentElement("afterend", p);
    };
};

const validar = new Validar();