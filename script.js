// it's a master function which will take all the numbers and decide what to do with them 

let sum=""
let num1 = ''
let num2 = ''


const master = (number1, number2, operator) => {
    if (operator === "+") {
        sum= number1 + number2;
        num1Display.textContent= sum;
        num1= sum
        hope2()
        return sum;
        
    } else if (operator === "-") {
        sum= number1 - number2;
        num1Display.textContent= sum;
        num1= sum
        hope2()
        return sum;
    } else if (operator === "*") {
        sum= number1 * number2;
        num1Display.textContent= sum;
        num1= sum
        hope2()
        return sum;
    } else if (operator === "/") {
        if (number2 === 0) {
            sum="Error you can't divide a number by zero"
            return  sum
        } else {
            sum = (number1/ number2).toFixed(2)
            num1= sum
            num1Display.innerHTML = sum
            hope2()
            return sum
        }
    }
}
 


// grabbing important buttons and display. 
const numBtn = document.querySelectorAll('.number')
const opBtn = document.querySelectorAll('.operator')
const ans = document.getElementById('ans')
const num1Display = document.getElementById('num1')
const num2Display = document.getElementById('num2')
const operatorDiv = document.getElementById('operatorDiv')
const clearbtn = document.getElementById('clear')


// function numbers is important function it takes number and them to num 1 and num 2 and show them to display
function numbers() {
    something()
    // hope();
    numBtn.forEach(button => button.addEventListener('click', () => {
        if (some == '') {
            num1 += button.value
            num1Display.innerHTML = num1

        } else if (some == 'dee') {
            num2 += button.value
            num2Display.innerHTML = num2
        }

    }))
}

// something returns operator and helps to switch between num1 and num2 
// todo: change it's name
let some = ""
let op = ''
function something() {

    opBtn.forEach(button => button.addEventListener('click', () => {
        some = button.name
        op = button.value
        operatorDiv.innerHTML = button.value
    }))
    return some
}


// and finally this calls innerHTML to master and calculate everything 

const equal = document.getElementById('equal')
equal.addEventListener("click", () => {
    master(Number(num1), Number(num2), op)
    num2Display.textContent = ''
    operatorDiv.textContent = ''
    ans.innerHTML=sum
    return num2 = ''
})

function hope(){
    
    master(Number(num1), Number(num2), op)
    
    
}

function hope2(){
    num2=''
}

numbers()
