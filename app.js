

//**************************** */

let gameSeq = [];
let userSeq = [];
let btns = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

//any key press on keyboard to start game 
document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function() {
        btn.classList.remove("gameFlash");
    },250);

}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random() * 11);
    let randColor = btns[randIdx];
    console.log(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx) {
 if(userSeq[idx] === gameSeq[idx]) {
    console.log("same value");
    if(userSeq.length == gameSeq.length) {
        setTimeout(levelUp,1000);
    }
 } else {
    h2.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to start`
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
    },1000);
    reset();
}
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}