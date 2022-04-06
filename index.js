const sayHi = name => console.log("Hi " + name);
const sayBye = name => console.log(name + " Bye");

// sayHi("Stefano");

const greetWithEnthusiasm = (str, symbol, customFunc) => {
  const enthusiasm = str + symbol;

  customFunc(enthusiasm); // sayHi("Max!!!!!"), sayBye("Sara!!"), ("Rasmus>>>") => console.log("Hey " + "Rasmus>>>")
};

sayHi("Max");
greetWithEnthusiasm("Max", "!!!!!", sayHi);

greetWithEnthusiasm("Sarah", "!!", sayBye);
greetWithEnthusiasm("Rasmus", ">>>", name => console.log("Hey " + name));

const animals = ["cat", "dog", "mouse", "rabbit", "lion", "crocodile", "donkey", "goldfish", "monkey"];

const displayAnimal = string => {
  console.log("I looked inside and found a " + string);
};

const displayAnimal2 = string => {
  console.log("Hey what a nice " + string + "!");
};

displayAnimal(animals[1]);

const getRandomAnimal = (arr, callback) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const selectedAnimal = arr[randomIndex];

  callback(selectedAnimal); //  displayAnimal(selectedAnimal), displayAnimal2(selectedAnimal)
};

getRandomAnimal(animals, displayAnimal);
// getRandomAnimal(animals, displayAnimal2("rabbit")); // ([], undefined) DON'T call the callback functions, pass them as reference
getRandomAnimal(animals, string => console.log("Here we have another " + string));

// div.addEventListener("click", function(){})

// FOREACH

// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i];

//   console.log(animal + " " + i);
// }

// animals.forEach((animal, i) => console.log(animal + " " + i));

// EXAMPLE OF FOREACH POSSIBLE DEFINITION
// const forEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     callback(element);
//   }
// };

// forEach(animals, animal => console.log(animal + "!"));

animals.forEach(animal => console.log(animal + "!"));

const arrOfNum = [1, 3, 45, 76, 12, 0, 2888];

//EXAMPLE OF MAP POSSIBLE DEFINITION
// const map = (arr, callback) => {
//   const mapped = [];

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     mapped.push(callback(num));
//   }

//   return mapped;
// };

// const mappedElements = map(arrOfNum, num => num * 2);

const mappedElements = arrOfNum.map(num => num * 5);
const listNumbers = arrOfNum.map(num => `<li> number is: ${num * 2}</li>`);
console.log(listNumbers.join(""));
const listAnimals = animals.map(str => `<li> animal found is: ${str} </li>`).join("");

console.log(listAnimals);

const arrOfPeople = [
  { name: "Stefan", age: 62, kudos: 900 },
  { name: "Raeven", age: 12, kudos: 9 },
  { name: "Leon", age: 42, kudos: 1200 },
  { name: "Max", age: 28, kudos: 100 },
];

const arrOfAges = arrOfPeople.map(obj => obj.age); // [900, 9, 1200, 100]
console.log(arrOfAges);

const filteredPeople = arrOfPeople.filter(obj => obj.age === 10);

console.log(filteredPeople);

//EXAMPLE OF FILTER POSSIBLE DEFINITION
// const filter = (arr, callback) => {
//   const filteredItems = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (callback(element)) {
//       filteredItems.push(element);
//     }
//   }

//   return filteredItems;
// };

// const filteredPeople2 = filter(arrOfPeople, obj => obj.age > 12);
// console.log(filteredPeople2);

//FIND - it returns the inner object, not a new array like filter does
console.log(arrOfPeople.find(obj => obj.age === 12));

//SOME - to check wheather at least one element that matches the condition is present in the array
console.log(
  "SOME",
  arrOfPeople.some(obj => obj.kudos <= 9)
);

//EVERY - all items need to pass the test in order for the function to return true
console.log(
  "EVERY",
  arrOfPeople.every(obj => obj.kudos >= 9)
);

//SORT - mutates the original array!
// console.log(arrOfNum.sort((a, b) => a - b));
// console.log(
//   arrOfPeople.sort((a, b) => {
//     if (a.age < b.age) {
//       return -1;
//     }
//   })
// );

//REDUCE - it's just another way to cycle your elements and produce a different result

const reducedKudos = arrOfPeople.reduce((accumulator, currentValue) => {
  console.log("ACC", accumulator);
  console.log("CURR", currentValue.kudos);

  return accumulator + currentValue.kudos;
}, 0);

console.log(reducedKudos);
const reduceAges = arrOfPeople.reduce((acc, curr) => acc + curr.age, 0);

// console.log("AGES", reduceAges);

const reducedArr = arrOfPeople.reduce((acc, curr) => {
  console.log("ACC", acc);
  console.log("CURR", curr.age);
  return acc.concat(curr.age);
}, []);

console.log(reducedArr.filter(num => num > 30));
