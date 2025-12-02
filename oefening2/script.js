let Array = ["blabla", "lala", "lolo", "lele"];

function modifyString(StringArray, aFunction){
    let stringLenght = StringArray.length;
    aFunction(stringLenght);
}

function arrayFunction(length){
    console.log(`De lengte van de array is ${length}`);
}

modifyString(Array, arrayFunction);
