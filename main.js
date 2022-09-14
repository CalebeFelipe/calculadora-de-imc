// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// estrutura de dados que facilita a manutenção e a leitura -> Um objeto literal
const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal .title button'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value 

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

Modal.buttonClose.onclick = () => Modal.close()


const IMC = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(2)

