//ELEMENTS
var allNumbers = document.querySelectorAll("#number")
var allOperations = document.querySelectorAll("#operation")
var equals = document.querySelector("#equals")
var deleteSingle = document.querySelector("#delete")
var prevDisplay = document.querySelector("#previous-display")
var currentDisplay = document.querySelector("#current-display")
var clearAll = document.querySelector("#clear")

//VARIABLES
let operater = ""
let currentNumber = ""
let prevNumber = ""

//CLEARS ALL VARIABLES
const clear = () => {
    operater = ""
    currentNumber = ""
    prevNumber = ""
}
//DELETES END NUMBER
const backSpace = () => {
    currentNumber = currentNumber.toString().slice(0, -1)
}
//INPUTS A NUMBER FOR CALCULATION
const inputNumber = (number) => {
    //CHECKS IF NUMBER ALREADY CONTAINS A .
    if(number === "." && currentNumber.includes(".")){
        return
    }
    if(number === "0" && currentNumber.includes("0")){
        return
    }
    //SETS INPUT NUMBER TO CURRENTNUMBER AS A STRING
    currentNumber = currentNumber.toString() + number 
    
}
//SELECTS OPERATER
const selectOperater = (operation) => {
    if(currentNumber === ""){
        return
    }
    if(prevNumber !== ""){
        calculate()
    }

    operater = operation
    prevNumber = currentNumber
    currentNumber = ""
}
//DOES THE CALCULATIONS
const calculate = () => {
    let result = ""
    let previous = parseFloat(prevNumber)
    let current = parseFloat(currentNumber)
    //CHECKS IF YOU ARE DIVIDING BY 0 / FROM A 0
    if(operater === "÷" && current === 0 || previous === 0){
        alert("You cant do that")
    }
    else{
        //CHECKS IF PREVIOUS OR CURRENT NUMBER EXISTS
        if(!previous || !current){
            return
        }
    
        if(operater === "+"){
            
            result = previous + current
        }
        else if(operater === "-"){
            result = previous - current
        }
        else if(operater === "X"){
            result = previous*current
        }
        else if(operater === "÷"){
            
            result = previous / current
        }
        else{
            return
        }
        //ROUNDS DECIMAL
        if(result % 1 !== 0){
            result = Math.round(result)
        }
        
        currentNumber = result
        operater = ""
        prevNumber = "" 
    }
    
}
//UPDATES THE DISPLAY
const updateDisplay = () => {
    currentDisplay.innerHTML = currentNumber
    prevDisplay.innerHTML = prevNumber
}

//EVENT LISTENERS
allNumbers.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        inputNumber(numberBtn.innerHTML)
        updateDisplay()
    })
})

allOperations.forEach((operation) => {
    operation.addEventListener("click", () => {
        selectOperater(operation.innerHTML)
        updateDisplay()
    })
})

equals.addEventListener("click", () => {
    calculate()
    updateDisplay()
})


clearAll.addEventListener("click", () => {
    clear()
    updateDisplay()
}) 

deleteSingle.addEventListener("click", ()=>{
    backSpace()
    updateDisplay()
})