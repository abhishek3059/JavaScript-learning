const animal = {
    family : undefined,
    age : undefined,

    
}
const createAnimalObject = function(family , age){
    const newAnimal = Object.create(animal);
    newAnimal.family = family;
    newAnimal.age = age;
    return newAnimal;
}
const dog = createAnimalObject("newFamily", 5);
dog.breed = "labrador";
dog.name = "Pochi";
dog.sex = "F"
const cat = createAnimalObject("Shukla",4);
cat.breed = "Persian";
cat.name = "Daisy"
cat.sex = "M";
console.log(dog);
console.log(cat);