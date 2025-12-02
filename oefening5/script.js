let persons = [
    {
        name: "jan",
        age: 40,
        city: "Antwerpen"
    },
    {
        name: "anass",
        age: 28,
        city: "Mechelen"
    },
    {
        name: "Michael",
        age: 30,
        city: "Beveren"
    }
]

persons.forEach(person => {
    console.log(person);
})

console.log("");

function sortByAttribute(array, attributeName){
    array.sort((element1,element2) => {
        if(element1[attributeName] > element2[attributeName]){
            return 1;
        }
        else if(element1[attributeName] < element2[attributeName]){
            return -1;
        }
        else if(element1[attributeName] === element2[attributeName]){
            return 0;
        }
    })
}

sortByAttribute(persons, "age");

persons.forEach(person => {
    console.log(person);
})