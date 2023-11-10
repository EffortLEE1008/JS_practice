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



// const k_age = parseInt(prompt("age?"));

// if(isNaN(k_age)|| k_age<=0){

//     console.log("pleas write a real positive number");
// } else if(k_age<18){
//     console.log("your too young");

// }else if(k_age===20){
//     console.log("good age");
// } else if(k_age<30){
//     console.log("your very good age");
// } else{
//     console.log("your very old sorry");
// }

const title = document.getElementById("title");

const hellos = document.getElementsByClassName("hello");

const h1 = document.querySelector("#title2 h1");

console.log(title.id);
console.log(title.className);

let sw = false;


function handleTitleClick(){
    if(sw){
        h1.style.color = "blue";
        sw=false;
    }
    else if(!sw){
        h1.style.color="red";
        sw = true;
    }
    
}

function handleMouseEnter(){
    h1.innerText = " mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = " mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOffLine(){
    alert("SOS no Wifi");
}

function handleWindowOnline(){
    alert("ALL good");
}

h1.style.color = "blue";
console.dir(h1);
console.log(typeof(h1));
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

//window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
