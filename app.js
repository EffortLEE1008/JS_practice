console.log("hello");

const a=10;
let myName = "LEE";

const b = 2;

const something = null;

console.log(a+b);
console.log("My name"+myName);
console.log(a/b);

myName= "LEE Seung Hyun"
console.log("My New name "+myName);

console.log(something);

const daysOfWeek = ["mon", "tue", "wednes", "thursday", "friday", "seturday"];

console.log(daysOfWeek);

daysOfWeek.push("Sunday");
console.log(daysOfWeek);



const player ={
    name : "LEE",
    age : 29,
    sex : "male"

};

console.log(player);

player.job = "Student";

console.log(player);
player.age+=10;
console.log(player);

function sayHello(nameOfPerson){
    console.log("hello my name is" + nameOfPerson);
}

sayHello("LEE");

sayHello("Seung");
sayHello("Hyun");



const calculate= {

    plus:function(a,b){
        console.log(a+b);
    },

    minus:function(a,b){
        console.log(a-b);
    },

    multiple:function(a,b){
        console.log(a*b);
    },
    divide:function(a,b){
        console.log(a/b);
    }



};

calculate.plus(1,2);
calculate.minus(1,2);
calculate.multiple(3,4);
calculate.divide(10,4);


function calculateKorAge(birth){
    return 2023-birth+2;

}

const korAge = calculateKorAge(1995);

console.log(korAge);

function voidValue(age){
    console.log(age+10);

}

voidValue(10);


let arr= [1,2,3,4,5];

function change(arr, pos, val){
    arr[pos]=val;
}

change(arr, 2, 10);

console.log(arr);

const myAge = parseInt(prompt("How old are you"));

console.log(myAge);

const k_age = prompt("age?");

console.log(isNaN(k_age));