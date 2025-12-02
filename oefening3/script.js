
let number1 = 5;
let number2 = 10;
let bewerking = "add";

function createCalculator(bewerking){
    if(bewerking === "add"){
        return sum;
    }
    else if(bewerking === "multipy"){
        return multiply;
    }
}

function sum(number1, number2, callbackFunction){
    let solution = number1+number2;
    callbackFunction(solution);
}

function multiply(number1, number2, callbackFunction){
    let solution = number1*number2;
    callbackFunction(solution);
}

function showSolution(solution){
    console.log(solution);
}

let fn = createCalculator(bewerking);
fn(number1, number2, showSolution);