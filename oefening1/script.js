let number1 = 5;
let number2 = 10;

function calculate(number1, number2, functioncalc){
    let solution = number1 + number2;
    functioncalc(solution);
}

function calculation(value){
    console.log(value);
}

calculate(number1, number2, calculation);
