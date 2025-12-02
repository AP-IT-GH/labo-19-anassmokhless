let numberArray = [5,4,6,7,8,3,6,5];

function calculateTotalPrice(numbers){
   let result = numbers.reduce((sum, element) => sum + element,0);
   console.log(result);
}

calculateTotalPrice(numberArray);