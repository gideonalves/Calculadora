function Calculadora() {
    this.display = document.querySelector('.display')
    this.iniciar = () => {
        this.clickBtn();
    }

    this.clickBtn = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;
            if (elemento.classList.contains('btn-num')) this.enviaNumDisplay(elemento)            
            if (elemento.classList.contains('btn-del')) this.btnDelete()
            if (elemento.classList.contains('btn-clear')) this.btnClear()         
            if (elemento.classList.contains('btn-eq')) this.realizaConta()         
        })
    }

    this.enviaNumDisplay = elemento => {
        this.display.value += elemento.innerText;
    }

    this.btnDelete = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    
    this.btnClear = () => {
        this.display.value = '';
    }  

    this.realizaConta = () => {
        try{
            let conta = eval(this.display.value);

            if(conta === 0) {
                conta = this.display.value = '';
            } else if(!conta) {
                // alert('Conta inválida');
                conta = this.display.value = 'Erro';
                return;
            }

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta inválida');
        }
    }


}


const calculadora = new Calculadora()
calculadora.iniciar()


 