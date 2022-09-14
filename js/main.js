import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculateIMC } from './utils.js'

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertError = document.querySelector('.alert-error')

//Quando for usado essa sintaxe para evento é possível utilizar apenas uma vez para o elemento selecionado
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value 
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
}



