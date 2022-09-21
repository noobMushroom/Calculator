//* it's a master function which will take all the numbers and decide what to do with them 

let sum = ""
let num1 = ''
let num2 = ''

const master = (number1, number2, operator) => {
    if (operator === "+") {
        sum = number1 + number2;
        num1Display.textContent = sum;
        num1 = sum
        num2 = ''
        return sum;

    } else if (operator === "-") {
        sum = number1 - number2;
        num1Display.textContent = sum;
        num1 = sum
        num2 = ''
        return sum;
    } else if (operator === "*") {
        sum = number1 * number2;
        num1Display.textContent = sum;
        num1 = sum
        num2 = ""
        return sum;
    } else if (operator === "/") {
        if (number2 != 0) {
            sum = Number((number1 / number2).toFixed(10))
            num1 = Number(sum)
            num2 = ''
            num1Display.textContent = Number(sum)
            return Number(sum);
        } else {
            ans.textContent = "ERROR"
            // ans.textContent   = ''
            num1Display = sum
        }
    }
}



// *grabbing important buttons and display. 
const numBtn = document.querySelectorAll('.number')
const opBtn = document.querySelectorAll('.operator')
const ans = document.getElementById('ans')
const num1Display = document.getElementById('num1')
const num2Display = document.getElementById('num2')
const operatorDiv = document.getElementById('operatorDiv')
const clearbtn = document.getElementById('clear')
const backspace = document.getElementById('backspace')
const plusMinus = document.getElementById('plus_minus')


// *function numbers is important function it takes number and them to num 1 and num 2 and show them to display




function numbers() {
<<<<<<< HEAD
    switchNumbers()
    numBtn.forEach(button => button.addEventListener('click', () => {
        if (switched == '') {
=======
    something()
    numBtn.forEach(button => button.addEventListener('click', () => {
        if (some == '') {
>>>>>>> a5085ed (finished +/- bug and just have to do one more thing)
            num1 += button.value
            num1Display.innerHTML = num1

        } else if (switched == 'switch') {
            num2 += button.value
            num2Display.innerHTML = num2
        }

    }))
}





// *switchNumbers returns operator and  switch between num1 and num2 
let switched = ""
let op = '' // *this is the operator 

function switchNumbers() {
    sum = ''
    opBtn.forEach(button => button.addEventListener('click', () => {
        operator()
        ans.textContent = ''
<<<<<<< HEAD
        switched = button.name
=======
        some = button.name
>>>>>>> a5085ed (finished +/- bug and just have to do one more thing)
        op = button.value
        operatorDiv.innerHTML = button.value
    }))
    return switched
}


// *and finally this calls innerHTML to master and calculate everything 

const equal = document.getElementById('equal')
equal.addEventListener("click", () => {
    master(Number(num1), Number(num2), op)
    num2Display.textContent = ''
    operatorDiv.textContent = ''
    num1Display.innerHTML = sum
    op = ''
    ans.textContent = ''
    return sum = ''
})


numbers()


function operator() {
    if (sum == '') {
        master(Number(num1), Number(num2), op)
        num2Display.textContent = ''
        operatorDiv.textContent = op
        op = ''
        num2 = ""
    } else {
        master(Number(sum), Number(num2), op)
        num2Display.textContent = ''
        operatorDiv.textContent = op
        op = ''
        num2 = ''
    }
}


clearbtn.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    sum = '';
    switched = ''
    num1Display.textContent = ''
    num2Display.textContent = ''
    ans.textContent = ''
    operatorDiv.textContent = ''

})



backspace.addEventListener('click', () => {
    if (switched == '') {
        num1 = num1.slice(0, -1)
        num1Display.textContent = num1
        return num1
    } else if (switched == 'switch') {
        num2 = num2.slice(0, -1)
        num2Display.textContent = num2;
        return num2
    }
})
plusMinus.addEventListener('click', () => {
<<<<<<< HEAD
    if (switched == '') {
=======
    if (some == '') {
>>>>>>> a5085ed (finished +/- bug and just have to do one more thing)
        num1 = num1 * -1
        num1Display.textContent = num1
        return num1

<<<<<<< HEAD
    } else if (switched == 'switch') {
=======
    } else if (some == 'dee') {
>>>>>>> a5085ed (finished +/- bug and just have to do one more thing)
        num2 = num2 * -1
        num2Display.textContent = num2
        return num2
    }
<<<<<<< HEAD
=======


})
>>>>>>> a5085ed (finished +/- bug and just have to do one more thing)


})