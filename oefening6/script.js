let numberArray = [1,5,6,8,7,9,3,1,7,8,6];
let evenNumberArray = [];
let doubleNumberArray =[];

function filterAndDouble(numbers){
    evenNumberArray = numbers.filter(number => (number % 2 === 0));

    doubleNumberArray = evenNumberArray.map(number => number *= 2);
}

filterAndDouble(numberArray);

doubleNumberArray.forEach(number => console.log(number)) ;






