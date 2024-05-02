/* Data types:
undefine, null, boolean,string , symbol, number, and object
*/
// java script is case sensitive
// use camel case = it is preffered


/*ways to declare variable*/

var myName = "shalini"; // for whole program and can store any type
myName =8;

let name = "with in scope" // can store any datatype but is used with in a scope

const pi = 3.14; // it is constant for whole program , and can store any type
/*-----------------------------------------------------*/

/*
use ; = it is not compulsory but is prefered as it tells where line ends
*/

var a =8;
var b = a;

console.log(b); // allows us to see things in console

b = b+a;

var c; // this is declaring
var d = 2; // this is declaring and assigning a variable

// if want to use double qoute use escape character(\)


/* Escape character*/
var string = "i am a \"double qouted\" string";
console.log(string);

string ='string can also use single qoutes to use "double qoutes" as it let both are different';
console.log(string);

/*
    \'  single quote
    \"  double quote
    \\  backslash
    \n   newline
    \r  carriage return
    \t  tab
    \b  backspace
    \f  form feed
*/

var str1 = "hello there!";
var str2 ="What are u studying";
var str3 ="teacher says: " + str1 + str2;  // concatinate string using +;
console.log(str3);

/* Finding Length of String */

var strLength = str3.length;
console.log(strLength);

/* Bracket Notation */
var lastLetter= str3[str3.length-1];
console.log(lastLetter);
console.log(str3[0]);

/* Strings are immutable */
// that is we can change the content in the string as whole but not at specific indexes.

var string = "hello";
string = "pie";
//string[0] = "s";  not possible

/* word blanks */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";
    result = "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog", " big", "ran", "quickly"));

/* Array */
var array = ["hi", 24];
var multiDemArray = [["the sun",12345], ["snow",98765]];

//access array data

var data = array[0];
console.log(data);
data = multiDemArray[0][1];
console.log(data);

/* PUSH : add element at the end  */

var arr1 = ["shalini", "suman", 24];
arr1.push(["shals",32]);
console.log(arr1);

/* UNSHIFT : add element at the beginning  */

arr1 = ["shalini", "suman", 24];
arr1.unshift("happy");
console.log(arr1);

/* POP : remove last element */

var removeFromArray = arr1.pop();
console.log(removeFromArray);

/* SHIFT : remove first element */

removeFromArray = arr1.shift();
console.log(removeFromArray);

/* List */

var myList = [["cereal",3],["milk",2],["banana",3]];

/* Function */

function ourReusableFunction(name){
    console.log("hello "+name);
}

ourReusableFunction("user");

/** Global Scope and Local Scope */

//if we make a variable without var than it automatically becomes global.

var myGlobal =10;  // this is a global variable since not restricted my function

function global(){
    thisIsGlobal = 5; // this is also global since no var is used;
    var oopsGlobal = 4; // this is within scope, not global.
}

function checkGlobal(){
    var output= "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: "+ myGlobal;
    }
    if(typeof thisIsGlobal != "undefined"){
        output += "thisIsGlobal: "+ thisIsGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: "+ oopsGlobal;
    }
    console.log(output);
}
global();
checkGlobal();

function localScope(){
    var local =4;
    console.log(local);
}
localScope();
//console.log(local);  give error

/** Some What Queue */

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var arr = [1,2,3,4,5];

console.log("Before: "+ JSON.stringify(arr)); // JSON.stringify(arr) print array as string.
console.log(nextInLine(arr,6));
console.log("After: "+JSON.stringify(arr));

/*
    3 == 3 : true
    3 == '3' : true
    3 === 3 : true
    3 === '3' : false
    == does type conversion.
    === do not type convert.
*/

function testDoubleEqual(val){
    if(val == 3){
        return true;
    }else{
        return false;
    }
}

console.log(testDoubleEqual(3));
console.log(testDoubleEqual("3"));

function testTripleEqual(val){
    if(val === 3){
        return true;
    }else{
        return false;
    }
}

console.log(testTripleEqual(3));
console.log(testTripleEqual("3"));

/*
    3 != 3 : false
    3 != '3' : true
    3 !== 3 : false
    3 !== '3' : true
    != does type conversion.
    !== do not type convert.
*/

function testNotEqual(val){
    if(val != 3){
        return true;
    }else{
        return false;
    }
}

console.log(testNotEqual(3));
console.log(testNotEqual("3"));

function testStrictlyNotEqual(val){
    if(val !== 3){
        return true;
    }else{
        return false;
    }
}

console.log(testStrictlyNotEqual(3));
console.log(testStrictlyNotEqual("3"));

/** Counting card function */

var count = 0;

function countingCard(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold';
    if(count>0){
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

console.log(countingCard(2));
console.log(countingCard('K'));
console.log(countingCard(10));
console.log(countingCard('J'));
console.log(countingCard(4));
console.log(countingCard(7));
console.log(countingCard('A'));


/** Object */

var dog = {
    "name": "quincy",
    "multiple legs": 5,
    "tails": 9,
    "how many friends": []
};

/* Dot Notation */

var petName = dog.name;
var petTail = dog.tails;
console.log(petName);
/** Bracket Notation */

petName = dog["name"];
var petLegs = dog["multiple legs"];
var petFriends = dog['how many friends'];
console.log(petName);

/** Accessing Object Properties with Variable  */

var testObj = {
    "name": "shalini",
    13: "shruti"
};
var variable1 = "name";
var x1 = testObj[variable1];
console.log(x1);

/** Add new Property to an Object

    var dog = {
    "name": "quincy",
    "multiple legs": 5,
    "tails": 9,
    "how many friends": []
};

 */

dog.bark = "bow-wow";

/** Delete Property */

delete dog.bark;

/** Object For Lookup*/

function phoneticLookup(val){
    var result ="";

    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "echo" : " Easy"
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("echo"));

/** Testing Objects for properties */

var obj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
};

function checkObj(val){
    if(obj.hasOwnProperty(val)){
        return obj[val];
    }else{
        return " Not Found";
    }
}

console.log(checkObj("gift"));
console.log(checkObj("hell"));

/** Manipulating Complex Objects */

var myMusic = [
    {
        "artist" : "billy joel",
        "title" : "titanic",
    },
    {
        "artist" : "sam",
        "title" : "true sheep",
    }
];

/** Accessing Nested Object */

var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : " jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

/** Nested Arrays */

var myPlants = [
    {
        type: " flowers",
        list : [ "rose", "tuplip", "dandelion"]
    },
    {
        type: " tress",
        list : [ "fir", "pine", "birch"]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

/** Record Collection */

var collection = {
    "2548" : {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : ["Let It Rock", "You Give Love a Bad Name"]
    },
    "2468" : {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : ["1999", "Little Red Corvette"]
    },
    "1245" : {
        "artist" : "Robert Palmer",
        "tracks" : []
    },
    "5439" : {
        "album" : "ABBA Gold",
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); // make copy of object

function updateRecords( id, prop, value){
    if(value ===""){
        delete collection[id][prop];
    }else if (prop === 'tracks'){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468,"tracks","test");
console.log(updateRecords(5439,"artist", "ABBA"));

/** while loop */

var array = [];
var i = 0;
while(i<5){
    array.push(i);
    i++;
}

console.log(array);

/**  for loop */

var arr = [];
for(var i = 0 ;i<5; i++){
    arr.push(i*2);
}

console.log(arr);

var print = printAll([[1,2],[3,4],[5,6,7]]);

function printAll(arr){
    for(var i = 0; i< arr.length; i++){
        for(var j = 0 ; j < arr[i].length; j++){
            var x =arr[i][j];
            console.log(x);
        }
    }
    return;
}

/** Do While Loop */
var i=0;
do{
    arr.push(i);
    i++;
}while(i<5);
console.log(arr);

/** profile */

var contacts = [
    {
        "firstName" : "Akira",
        "lastName" : "Laine",
        "number" : "098765431",
        "likes" : ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName" : "Harry",
        "lastName" : "Potter",
        "number" : "12345678990",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName" : "Sherlock",
        "lastName" : "Holmes",
        "number" : "876543211234",
        "likes" : ["Intriguing", "Cases", "Violin"]
    },
    {
        "firstName" : "Kristian",
        "lastName" : "Yos",
        "number" : "unknown",
        "likes" : ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for(var i =0 ;i < contacts.length;i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

data = lookUpProfile("Akira","likes");
console.log(data);
data = lookUpProfile("Sherlock","lastName");
console.log(data);
data = lookUpProfile("Sherlock","sins");
console.log(data);

/** Generate random numbers */

function randomFraction(){
    return Math.random(); // generate number btw 0 and 1 but never 1
}

console.log(randomFraction());

function randomWholeNumber(){
    return Math.floor(Math.random() *10 ); // generate number btw 0 and 10 but never 10
}

console.log(randomWholeNumber());

// Generate random number with in range

function randomNumberRange(max,min){
    return Math.floor(Math.random()*(max - min +1)) + min;
}
console.log(randomNumberRange(15,4));

/** convert string to integer */

function convertToInteger(str){
    console.log(parseInt(str));
}

convertToInteger("1234");

//with radix
// for eaxple convert binary to decimal
function convertBinaryToDecimal(num){
    console.log(parseInt(num,2));
}

convertBinaryToDecimal(101101);

/** Ternary Operator
 *      condition ? statement-if-true : statement-if-false
 */

function checkEqual(a,b){
    return a===b ? true : false;
}

console.log(checkEqual(3,4));

function checkSign(num){
    return num>0 ? "POSITIVE" : NUM<0 ? "NEGATIVE" : "ZERO";
}

console.log(checkSign(3));

/** var vs let
 * var : var allow us to declare variable twice with same name. can be global or with in function scope.
 *
 * let : let does not allow us to declare a variable already declared. scope of let is limited to block statement;
 */

var cat = "milli";
var cat = "joy";
//let cat = "bloom";

let snake = "jolly";

function catTalk(){
    "use strict";  //enable strict mode. to catch mistake : eg - if we make a variable and not declare it var/let/const.

    cat = "jake";
}

function checkScope(){
    let i = "function scope";
    if(true){
        let i = " block scope";
        console.log( " block scope i is ",i);
    }
    console.log( " function scope i is "+i);
}
checkScope();

const PIE = 3.14;

// const variable should be written in capital . if we make a const array we can now change the whole array but we can change value at indexes.

const ARRAY = [1,3,5];

//ARRAY = [2,4,6];
ARRAY[0] = 2;
ARRAY[1] = 4;
ARRAY[2] = 6;

console.log(ARRAY);

/** Prevent Object Mutation
 *
 * as seen before const does not save object or array from mutation to save from mutation Object.freeze is used.
 */

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS ={
        PI : 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI)

/** use arrow function to write concise anonymous function */

var magic = function (){  // this function is called anonymous function
    return new Date();
};

var magic = () => {
    return new Date();
};

var magic = () => new Date();

/** arrow function with two arguments */

var myConcat = function(arr1,arr2){
    return arr1.concat(arr2);
};

console.log(myConcat([1,2],[3,4,5]));

var myConcat = (arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));

/** Default Parameters */

const increment = (function(){
    return function increment(number,value =1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

/** rest operator */

const sum = (function(){
    return function sum(...args){  // rest operator ... convert parameters into array.
        return args.reduce((a,b)=> a+b, 0);
    };
})();
console.log(sum(1,2,3,4,5,6));

/** spread operator : looks like rest operator and spreads out to its individuals */

const arr3 = ['JAN', 'FEB', 'MAR', 'APR'];
let aar2;
(function () {
    arr2 = arr3; // arr2 and arr3 points to same address
    arr3[0] = 'potato';
})();
console.log(arr2);

(function () {
    arr2 = [...arr3]; // arr2 has copy of arr3
    arr3[0] = 'corn';
})();
console.log(arr2);
console.log(arr3);

/** Destructing Assignment */

var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x : p, y : q, z : r } = voxel; // assign p = 3.6, q = 7.4, r = 6.54.

const AVG_TEMPERATURE ={
    today : 77.5,
    tomorrow : 79
};

function getTempOfTmrw(avgtemperatures){
    const { tomorrow : temp } = avgtemperatures;
    return temp;
}

console.log(getTempOfTmrw(AVG_TEMPERATURE));

//in nested

const LOCAL_FORECAST ={
    today : {min : 72.5, max: 83},
    tomorrow : {min : 73, max: 84.6},
};

function getMaxOfTmrw(forecast){
    const { tomorrow : {max : temp }} = forecast;
    return temp;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// destructing an array

const [f,e, ,g] = [1,2,3,4,5,6,7];
console.log(f,e,g);

// switch places

let a1 = 8 , b1 = 6;
(() => {
    "use strict";
    [a1,b1] = [b1,a1];
})();
console.log(a1);
console.log(b1);

/** Use Destructing Assignment with the Rest Operator */

const source = [1,2,3,4,5,6,7];
function removeFisrtTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr4 = removeFisrtTwo(source);
console.log(arr4);
console.log(source);

/** Use Destructuring Assignment to Pass an Object as a function's Parameters */

const stats = {
    max: 56.78,
    sod : 4.34,
    median : 34.7,
    min : -0.74
};

const half = ( function (){
    return function half({ max , min }){
        return (max+min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats));

/** create string using template literals
 * # can use single and double qoutes with in statement.
 * # can make multi line strings.
 * # put variable in string
 */

const person = {
    name : "shalini sahu",
    age : 21
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}

/**
 * makeList (result.failure) should return :
 * [`<li class = " text-warning">no-var</li>`,
 *  `<li class = " text-warning">var-on-top</li>`,
 *  `<li class = " text-warning">linebreak</li>`]
 */

function makeList(arr){
    const result =[];
    for(let i=0;i<arr.length;i++){
        result.push(`<li class = " text-warning">${arr[i]}</li>`);
    }
    return result;
}

const result1 = makeList(result.failure);
console.log(result1);

/** Write concise Object Literal Declarations Using Simple Fields */

const createPerson = (name, age, gender) => {
    return {
        name : name,
        age : age,
        gender : gender
    };
};

console.log(createPerson("shalini sahu",21,"female"));

const createPerson1 = (name, age, gender) => ( {name, age, gender});

console.log(createPerson1("shalini sahu",21,"female"));

/** Class Syntax */

class SpaceShuttle {
    constructor (targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

/** Getter and Setter */

class Book{
    constructor(author){
        this.author = author;
    }

    get writer(){
        return this.author;
    }

    set writer(updateAuthor){
        this.author = updateAuthor;
    }
}

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 *(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedtemp){
            this._temp = updatedtemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

/** import and export */


