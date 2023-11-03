alert("hello")


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