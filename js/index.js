// // alert(`Hello World!`);


// var message = 'Hello World!';

// let newMessage = 'Hello New World!';
// const constMessage = 'Hello World';

// newMessage = 'Goodbye World!';

// // alert(newMessage);


// // JavaScript Data Types:
// // String - set of characters
// let stringMessage = 'Message';
// // Number - any number, +/-Infinity, NaN
// let numberMessage = 42;
// // Boolean - true/false
// let boolMessage = true;
// // undefined
// let undef = undefined;
// // null
// let nullVar = null;
// // Object
// let obj = {};
// // Symbol - ES2015
// let symb = Symbol();

// let sum = (1 + 2 + 3 + 4) / 5;
// // alert(sum);
// sum = sum + stringMessage;
// // alert(sum);

// const age = Number(prompt('Enter your age!'));
// //alert('Your name is ' + name);
// // console.log(message);

// const boolVal = true;

// const nextAge = String(age) + 1 + boolVal;


// const message = 'Next year you will be ' + nextAge;

// document.write(message);

function add(a, b, c) {
    return a + b + c;
}

//let sum = add(10, 20);
//print(sum);
//sum = add('Hello', 42);
//print(sum);

function print(val) {
    document.write(val + '<br>');
}

function checkAge(age) {
    if (age < 18) {
        const left = 18 - age;
        return 'Child, to 18 left: ' + left;
    } else {
        return 'Adult';
    }   
}

// const age = Number(prompt('Your age'));
// print(checkAge(age));

// const sqrtResult = Math.sqrt(16);
// print(sqrtResult);

const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));

function disc(a, b, c) {
    return 42;
}

function solveQuadr(a, b, c) {
   const d = disc(a, b, c);
   if (d > 0) {
     const x1 = d / 2334;
     const x2 = -d * 32;
     return 'x1 = ' + x1 + ', x2 = ' + x2;
   } else if (d === 0) {
       
   } else {
       return 'No roots';
   }
}

const result = solveQuadr(a,b,c);
print(result);