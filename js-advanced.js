console.clear();

//Destructuring
const arr = ['The Crow', 'The Cranberries', 'Cheesecake'];
const [movie, music, food] = arr;
console.log(movie, music, food);
console.log(`My favourite movie is ${movie}`);

const melissa = {
    name: 'Melissa Christie',
    age: 30,
    dob: (new Date(1989, 8, 2)).toString()
};
console.log(melissa);
const {name, age, dob} = melissa;
console.log(`Your name is ${name} and you are ${age} years old. You were born on ${dob}.`);

//default values
const tim = {
    alias: 'Super Bob'
};
const {alias, aka = 'Tim', race = 'unknown'} = tim;
console.log(alias, aka, race);

//aliasing destructured property names
const {name: my_name, age: my_age, dob: my_dob} = melissa;
console.log(my_name, my_age, my_dob);

// Spread Operator
const temps = [98, 67, 35];
const tempChanges = [...temps, 89, 65];
console.log(tempChanges);

const person = {name: 'Bob', spouse: 'Karen', children: 4};
const hobbies = {fav: 'Walking the dog', secFav: 'Food'};
const completedPerson = {...person, hobbies: {...hobbies}};
console.log(completedPerson);

function sayHello (name, age, dob) {
    console.log(`Hello, ${name}. You are ${age} years old. And ${dob}`);
}
const personArr = ['Melissa', 30, '09-02-1989'];
sayHello(...personArr);

function sayGoodBye ({name, age, dob}) {
    console.log(this);
    console.log(`Goodbye, ${name}. ${age} ${dob}`);
}
sayGoodBye(melissa);

//Arrow functions
const myFirstArrowFunc = () => {
    console.log("I'm an arrow function");
};
myFirstArrowFunc();

const func2 = (param1, param2) => {
    console.log(param1, param2);
}
func2('arg1', 'arg2');

const func3 = param => {
    console.log(param);
};
func3('urgh');

const func4 = param => console.log(param);
func4('wowza');

