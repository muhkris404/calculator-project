//Memulai JS
// Button Angka
const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

//Update Layar 
const calculationScreen = document.querySelector(".calculator-screen");

const updateScreen = (number)=>{
    calculationScreen.value = number;
};

//Inisialisasi variable
let prevNumber ="";
let calculatorOperator ="";
let currentNumber ="0";

const inputNumber =(number)=>{
    if (currentNumber === "0"){
        currentNumber = number;
    }else {
        currentNumber += number;
    }
};

//Event Klik Operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) =>{
    if(calculationOperator===""){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber ="";
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", ()=>{
    calculate();
    updateScreen(currentNumber);
});

//Fungsi Kalkulasi
const calculate =()=>{
    let result ="";
    const prev = parseFloat(prevNumber);
    const current = parseFloat(currentNumber);

    switch(calculationOperator){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
        break;
        default:
            return;
        
    }
    currentNumber = result;
    calculationOperator ="";
};

//Fungsi AC
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener("click",()=>{
    clearAll();
    updateScreen(currentNumber);
})

const clearAll =()=>{
    prevNumber ="";
    calculationOperator = "";
    currentNumber = "0";
}

//Fungsi Desimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click",(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const inputDecimal =(dot)=>{
    currentNumber += dot;
}