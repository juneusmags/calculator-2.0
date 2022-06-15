//ELEMENTS
let allNumbers = document.querySelectorAll("#number")
let allOperations = document.querySelectorAll("#operation")
let equals = document.querySelector("#equals")
let deleteSingle = document.querySelector("#delete")
let prevDisplay = document.querySelector("#previous-display")
let currentDisplay = document.querySelector("#current-display")
let clearAll = document.querySelector("#clear")

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
    if(number === "0" && currentNumber === "0"){
        return
    }
        
    
    if(currentNumber === "0" && number !== 0){
        currentNumber = number
    }
    else{
        currentNumber = currentNumber.toString() + number
    }

    
    //SETS INPUT NUMBER TO CURRENTNUMBER AS A STRING
     
    
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
            result = result.toFixed(6)
        
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



document.addEventListener("keydown", (e) => {
    if (e.key === "1") {
      inputNumber("1");
      updateDisplay();
    } else if (e.key === "2") {
      inputNumber("2");
      updateDisplay();
    } else if (e.key === "3") {
      inputNumber("3");
      updateDisplay();
    } else if (e.key === "4") {
      inputNumber("4");
      updateDisplay();
    } else if (e.key === "5") {
      inputNumber("5");
      updateDisplay();
    } else if (e.key === "6") {
      inputNumber("6");
      updateDisplay();
    } else if (e.key === "7") {
      inputNumber("7");
      updateDisplay();
    } else if (e.key === "8") {
      inputNumber("8");
      updateDisplay();
    } else if (e.key === "9") {
      inputNumber("9");
      updateDisplay();
    } else if (e.key === "0") {
      inputNumber("0");
      updateDisplay();
    } else if (e.key === "+" && "Shift") {
      selectOperater("+");
    } else if (e.key === "-") {
      selectOperater("-");
    } else if (e.key === "x") {
      selectOperater("X");
    } else if (e.key === "/") {
      selectOperater("÷");
    } else if (e.key === ".") {
      inputNumber(".");
    } else if (e.key === "Backspace") {
      backSpace();
      updateDisplay();
    } else if (e.key === "Escape") {
      clear();
      updateDisplay();
    } else if (e.key === "Enter") {
        calculate();
        updateDisplay();
    }
    console.log(currentNumber)
    console.log(e.key)
});