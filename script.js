function Calculator() {
    this.display = document.querySelector('.display')
    this.start = () => {
        this.clickBtn();
    }


    this.clickBtn = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;
              
            if (elemento.classList.contains('btn-num')) this.sendNumDisplay(elemento)            
            if (elemento.classList.contains('btn-del')) this.btnDel()
            if (elemento.classList.contains('btn-reset')) this.btnReset()         
            if (elemento.classList.contains('btn-eq')) this.doAccount()         
        })
    }

    this.sendNumDisplay = elemento => {
        this.display.value += elemento.innerText;
    }

    this.btnDel = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    
    this.btnReset = () => {
        this.display.value = '';
    }  

    this.doAccount = () => {
        try{
            let count = eval(this.display.value);

            // if(conta === 0) {
            //     conta = this.display.value = '';
            // } 
            // else if(!conta) {
            //     // alert('Conta inválida');
            //     conta = this.display.value = 'Erro';
            //     return;
            // }
            
            this.display.value = count;
        } catch(e) {
            console.log(e);
            // conta = this.display.value = 'Erro';
        }
    }


}

const calculator = new Calculator()
calculator.start()


 