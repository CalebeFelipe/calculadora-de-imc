// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal .title button')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value 

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => modalWrapper.classList.remove('open')


const IMC = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(2)
