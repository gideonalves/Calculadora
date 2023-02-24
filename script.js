function Calculator() {
  this.display = document.querySelector(".display");
  this.start = () => {
    this.clickBtn();
    this.btnEnter();
    this.esc();
  };

  this.clickBtn = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;

      if (element.innerHTML === "÷") {
        element.innerHTML = "/";
        this.sendNumDisplay(element);
        element.innerHTML = "÷";
      }

      if (element.innerHTML === "x") {
        element.innerHTML = "*";
        this.sendNumDisplay(element);
        element.innerHTML = "x";
      }

      if (
        element.classList.contains(".btn-division") ||
        element.classList.contains(".btn-multiplication") ||
        element.classList.contains("btn-num")
      )
      
      this.sendNumDisplay(element);

   
      if (element.classList.contains("btn-del")) this.btnDel();
      if (element.classList.contains("btn-reset")) this.btnReset();
      if (element.classList.contains("btn-eq")) this.doAccount();
    });
  };

  this.sendNumDisplay = (element) => {
    this.display.value += element.innerHTML;
    this.display.focus();
  };

  this.btnEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if(e.keyCode === 13) {
          this.doAccount();
      }
    });
  }

  this.esc = () => {
    this.display.addEventListener('keyup', (e) => {
      if(e.keyCode === 27) {
          this.btnReset();
      }
    });
  }

  this.btnDel = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.btnReset = () => {
    this.display.value = "";
  };

  this.doAccount = () => {
    try {
      let count = eval(this.display.value);

      if (count === 0) {
        count = this.display.value = "";
      } else if (!count) {
        // alert('Conta inválida');
        count = this.display.value = "Erro";
        return;
      }

      this.display.value = count;
    } catch (e) {
      console.log(e);
      // conta = this.display.value = 'Erro';
    }
  };
}

const calculator = new Calculator();
calculator.start();


