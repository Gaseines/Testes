const telaText = document.querySelector("#tela")
const operationText = document.querySelector("#operadores")
const buttons = document.querySelectorAll("#btn-container button")

class Calculator {
    constructor(telaText, operationText) {
        this.telaText = telaText
        this.operationText = operationText
        this.digitando = ''
    }

    //adiciona digito a tela da calculadora
    addDigit(digit) {
        //checa se a operação tem um ponto
        if (digit === "." && this.telaText.innerText.includes(".")) {
            return
        }



        this.digitando = digit
        this.updateScreen()
    }

    //Precessa todas as operações da calculadora
    processOperation(operation) {
        //checa se a tela está vazia
        if (this.telaText.innerText === "" && operation != "C") {
            //muda operação
            if (this.operationText.innerText !== "") {
                this.changeOperation(operation)
            }
            return
        }


        let operationValue
        let tela = +this.telaText.innerText
        let operadores = +this.operationText.innerText.split(" ")[0]

        switch (operation) {
            case "+":
                operationValue = operadores + tela
                this.updateScreen(operationValue, operation, tela, operadores)
                break
            case "-":
                operationValue = operadores - tela
                this.updateScreen(operationValue, operation, tela, operadores)
                break
            case "÷":
                operationValue = operadores / tela
                this.updateScreen(operationValue, operation, tela, operadores)
                break
            case "x":
                operationValue = operadores * tela
                this.updateScreen(operationValue, operation, tela, operadores)
                break
            case "backspace":
                this.deleteDigit()
                break
            case "CE":
                this.deleteAllDigit()
                break
            case "C":
                this.deleteAll()
                break
            case "=":
                this.equalOperation()
                break
            default:
                return
        }
    }



    //muda o valor da tela da calculadora
    updateScreen(
        operationValue = null,
        operation = null,
        tela = null,
        operadores = null
    ) {
        console.log(operationValue, operation, tela, operadores)

        if (operationValue === null) {
            this.telaText.innerText += this.digitando
        } else {
            if (operadores === 0) {
                operationValue = tela
            }

            this.operationText.innerText = `${operationValue} ${operation}`
            this.telaText.innerText = ""

        }
    }

    //muda operaçòes matematicas
    changeOperation(operation) {
        const mathOperations = ["+", "-", "÷", "x"]
        if (!mathOperations.includes(operation)) {
            return
        }

        this.operationText.innerText = operationText.innerHTML.slice(0, -1) + operation

    }

    //deleta o ultimo digito
    deleteDigit() {
        this.telaText.innerText = this.telaText.innerText.slice(0, -1)
    }

    //deleta toda a tela de digito
    deleteAllDigit() {
        this.telaText.innerText = ""
    }

    //deleta tudo
    deleteAll() {
        this.telaText.innerText = ""
        this.operationText.innerText = ""
    }
    //operação de igual
    equalOperation() {
        const operation = operationText.innerText.split(" ")[1]

        this.processOperation(operation)

        if (this.operationText.innerText === "") {
            return
        } else {
            this.telaText.innerText = operationText.innerText.slice(0, -1)
            this.operationText.innerText = ""
        }

    }

}


const calc = new Calculator(telaText, operationText)


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText

        if (+value >= 0 || value === ".") {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }

    })
})