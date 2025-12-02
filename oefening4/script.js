let array1 = [1,2,3,4,5,6];
let array2 = [1,2,3,4,5];


function mergedArray(array1, array2){
    let mergedArray = [...array1, ...array2];
    return mergedArray;
}

let mergeArray = mergedArray(array1,array2);

array1.forEach(element => {
    console.log(element);
});

console.log("");

array2.forEach(element => {
    console.log(element);
});

console.log("");

mergeArray.forEach(element => {
    console.log(element);
})