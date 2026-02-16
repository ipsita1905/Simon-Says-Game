let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let allBtns = document.querySelectorAll(".btn");
let h2 = document.querySelector("h2");

document.addEventListener("click", function(){
    if(started == false){
        console.log("Game is started");
        started=true;

        levelUp();
    } 
    
});

function btnFlash(btn){
    console.log(btn);
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btnFlash(btn);
    });
});

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash();
}
function btnPress(){
    console.log(btn);
}

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}