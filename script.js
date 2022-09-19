const master = (number1, number2, operator) => {
    // let number1=Number(prompt("enter  a number"))
    // let operator= prompt('What do you want to do (+) (-) (*) (/)')
    // let number2= Number(prompt('enter the second number'))
    if (operator === "+") {
        sum(number1, number2)
    } else if (operator === "-") {
        subtract(number1 - number2);
    } else if (operator === "*") {
        multiply(number1, number2);
    } else if (operator === "/") {
        divide(number1, number2);
    }
}
let num;
const sum = (a, b) => {
    console.log(a + b)
    display.innerHTML=(a+b)
    return num = a + b
}

const subtract = (a, b) => {
    console.log(a - b)
    display.innerHTML=(a-b)
    return num = a - b
}


const multiply = (a, b) => {
    console.log(a * b)
    display.innerHTML=(a*b)
    return num = a * b
}

const divide = (a, b) => {
    if (b == 0) {
        console.log("Error you can't divide a number by zero")
        return "Error you can't divide a number by zero"
    } else {
        console.log(a / b)
        display.innerHTML=(a/b)
        return num = a / b
    }
} 

const numBtn = document.querySelectorAll('.number')
const opBtn = document.querySelectorAll('.operator')
const display = document.getElementById('display')

let n1 = ''
let n2 = ''
let number=''

function num2() {
    numBtn.forEach(button => button.addEventListener('click', () => {
        if (something() == '') {
            const num1Display= document.getElementById('num1')
            n1 += button.value
            num1Display.innerHTML=n1
            console.log(`this is num 1:  ${n1}`)
            
        } else if (something() == 'dee') {
            const num2Display= document.getElementById('num2')
            n2 += button.value
            num2Display.innerHTML=n2
            console.log(`this is num 2:  ${n2}`)
        }

    }))
}


let some = ""
let op = ''
function something() {
    opBtn.forEach(button => button.addEventListener('click', () => {
        const operatorDiv= document.getElementById('operatorDiv')
        some = button.name
        
        op = button.value
        console.log(op)
        operatorDiv.innerHTML=button.value
    }))
    return some 
}



const equal = document.getElementById('equal')
equal.addEventListener("click", ()=> {
    console.log("you clcked equal")
    master(Number(n1), Number(n2), op)
})
num2()
