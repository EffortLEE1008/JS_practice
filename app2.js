

const h1 = document.querySelector("h1.title2");

h1.innerText = "change inner Text";


function handleTitleClick(){
    h1.className= "active";
}

h1.addEventListener("click", handleTitleClick);

console.log(h1.classNAme);