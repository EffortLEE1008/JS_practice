

const h1 = document.querySelector("#title2 h1");

h1.innerText = "change inner Text";


function handleTitleClick(){
    const s_active = "active";

    // if(h1.classList.contains(s_active)){
    //     h1.classList.remove(s_active);
    // }else{
    //     h1.classList.add(s_active);
    // }                                        //toggle의 동작 원리와 같은 기능
    h1.classList.toggle(s_active);

    console.log("현재 클래스 내임은 "+h1.className);
    console.log(h1.classList.length);
}

h1.addEventListener("click", handleTitleClick);

console.dir(h1);
console.log(h1.classList[0]);