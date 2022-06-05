const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const output = document.querySelector('#output')
const resCard = document.querySelector('#res')

function getInputValues(){
    const value1 = num1.valueAsNumber
    const value2 = +num2.value //вариант указания на число
    return[value1, value2]
}

function addHandler() {
    const value = getInputValues()
    const result = value[0] + value[1]
    output.closest('.card').style.display = 'block'
    output.innerHTML = `Результат = ${result}`
}

function subHandler () {
    const value = getInputValues()
    const result = value[0] - value[1]
    output.closest('.card').style.display = 'block'
    output.innerHTML = `Результат = ${result}`
}

function hideRes (){
        resCard.style.display = 'none'
}

console.log(addHandler())

addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)
num1.addEventListener('click', hideRes)
num2.addEventListener('click', hideRes)

// setTimeout(() => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }, 5000)
