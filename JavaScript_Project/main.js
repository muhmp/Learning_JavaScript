/* source from Traversy Media*/
console.log('Hello World');
console.error('This is an Error');
console.warn("This is a Warning");


/*1.Variables in JavaScript
//var , let , const

let age = 30; //let
age = 31; //let variable can be continued
console.log(age);
*/

const a = 1; //const
//a = 2;// output will be error cause duplicate the initialization of the variable
console.log(a);


var b = 2; //var
b=4;
console.log(b);


/*Data type in JS*/
/*String, Numbers, Boolean, Null, undefined,

const name = 'Matt';//string
const age = 25;
const rating = 4.5;
const bool =  true; //boolean
const x = null;//null: variable with the empty value (not really an object)
const y = undefined;
let z;

console.log(typeof z); // typeof : checking the description of the variable
*/

const Name = 'Matt';//string
const age = 25;

//Concatenation
console.log('My name is ' + Name + ' and I am ' + age);
//Template String
const hello = `My name is ${Name} and I am ${age}`;

console.log(hello);

//another example

const s = 'Hello World';

console.log(s.length); // length of the string
console.log(s.toUpperCase()); // using uppercase method
console.log(s.toLowerCase());
console.log(s.substring(0,5)); //Substring (specified string)
console.log(s.split(''));// Split each string to see detail of each string

const t = 'technology , computers , it , code';
console.log(t.split(' , ')); // split each string

//3.Arrays : variables that hold multiple values

const num = new Array(1,2,3,4,5); //new Array() : Constructor

//const fruits = ['apples', 'oranges','pears',10,true];

const fruits = ['apples', 'oranges','pears'];

fruits [3] = 'grapes';
fruits.push('mangos'); // adding the value after
fruits.unshift('strawberries'); //adding the value before
fruits.pop(); //remove the last value

console.log(Array.isArray('hello'));
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits[1]); // [] : read the value from the array
console.log(fruits); // adding more value to array 


//another array
const people = ['person 1 ', 'person 2', 'person 3'];
console.log(people); //print people

//object array

const person = {
    firstName: 'Matt',
    lastName: 'John',
    age: 25,
    hobbies: ['football', 'music','travel','photography'],
    Address: 'Japan',
    City :  'Fukuoka'
}

console.log(person);
console.log(person.hobbies , 'His name is: '+ person.firstName, person.lastName);
console.log(person.hobbies[0]);//print the value inside

person.email = 'matt@gmail.com';
console.log(person);

//create a todo list example 
const todos = [
    {
        id: 1,
        text:'Japanese class',
        isCompleted:true//boolean condition
    },
    {
        id:2,
        text:'Cooking',
        isCompleted:true//
    },
    {
        id:3,
        text:'Cleaning',
        isCompleted:false
    }
];

//For example using JSON: usually used for sending information to server
//convert to JSON
const todoJSON = JSON.stringify(todos); //to create json
console.log(todoJSON);


//4.For loop

//for example
for(let i = 0; i<10;i++){ //,Initial, , condition, i++ increment
    console.log(`number:  ${i}`);
}

//example display the text from the variable
//print the value of the text
for (let i = 0 ; i< todos.length ; i ++ ){
    console.log(todos[i].text);//todos[i]: print every value of the i
}

//another example
for (let activity of todos ){ // of : from the value
    console.log(activity.text);
}

//for each, map, filter : high order array

//for each
todos.forEach(function(todo){
    console.log(todo.text);
});

//using map: to print specified
const todoText = todos.map(function(todo){
    return todo.text; //return
});
console.log(todoText); //calling from the function

//filter
const todoCompleted = todos.filter(function(todo){
   return todo.isCompleted == true;
        }).map(function(todo){
             return todo.text;
        })

console.log(todoCompleted);
//question for writing the function method of the bracket problem


//5.If statement
//const x = 10; // even you define it with x = '10' is still equal using == in if statement
const x = 20;
if (x == 10){
    //=== (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality. If we compare 2 with "2" using ===, then it will return a false value.
    console.log('x is : '+ x);
} else {
    console.log('value is not true')
} 

//else if
const y = 20;
if (y === 10){
    console.log('value is: ' + y);
} else if (y>10) {
    console.log('The value is greater  ');
} else {
    console.log ('The value is smaller');
}


//another example using if statement
const z1 = 5;
const z2 = 3;
//logic
// || :or
// &&: and
if (z1 > 4 && z2 > 2){
    console.log ("Both value are greater ");
}

//another operation
const col = 10; // const col = 11;

const color = col > 10 ? 'red': 'blue'; // if value equal it will choose the opposite answer but if the value is not equal it will answer the first statement
//const color = col > 10 ? 'red': 'blue'; // if value equal it will choose the opposite answer but if the value is not equal it will answer the first statement

console.log(color);


//function

function addNum (num1,num2){
    return sumNum = num1 + num2;
}
console.log(addNum(6,5));


//another function
var sum = 0;
function addThree(){ 
    return sum = sum + 3;//add three
}
function addFive(){
    return sum = sum + 5;
}

//calling the function
console.log(addThree());
console.log(addFive());




/*
//constructor function
function Bio( firstName, lastName, birth){//()parameter
    this.firstName = firstName; //properties of the object
    this.lastName = lastName;
    this.birth = new Date(birth); // set birth
}

//define with prototype
Bio.prototype.getBirthYear = function(){
    return this.birth.getFullYear();
}

Bio.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
*/


//Class
class Bio{
    constructor(firstName, lastName, birth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = new Date(birth);
    }

    getBirthYear(){
        return this.birth.getFullYear();
    }

    getFullName(){
        return `${this.firstName}, ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Bio('muh','mappanyompa','15-11-1995');
const person2 = new Bio('muhammad','mp','5/11/1995');

//display
//console.log(person1.getFullName());
console.log (person2.getFullName());
console.log(person);


//console.log(window);
//alert(1);


//Load element
//single element
//console.log(document.getElementById('my-form'));/* getElementById from window function. load my-form from HTML file */
//console.log(document.querySelector('h1'));//load h1 from HTML

//multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));




/*
//making form using javascript
//modify list
const ul = document.querySelector('.items'); //load query of the items list in HTML file

 
ul.firstElementChild.textContent = 'Hello'; 
ul.children[1].innerText = 'Matt'; //other way
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //dynamic way
 */

/*
//button customization
const btn = document.querySelector('.btn');
//btn.style.background = 'red'; //customize color of the button

btn.addEventListener('click',(e) => { // ('click',(e): when click:-> run the function
    e.preventDefault(); //
    //console.log('click'); //display click on console 
    //console.log(e);  //display element of MouseEvent
    //console.log(e.target.className);  //the name of the defined variable from HTML
    document.querySelector('#my-form').style.background = '#ccc';//customize background if click
    document.querySelector('body').classList.add('bg-dark'); //load bg-dark body from modified css
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
 */


//form function

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//submit function
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){ //if both form input true
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(),3000); //set time , 3000: 3 s 
    } else{
        const li = document.createElement('li');
        console.log('success');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}