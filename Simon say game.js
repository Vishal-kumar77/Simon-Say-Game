let gamesequence = [];
let usersequence = [];

let btns = ["yellow", "purple", "red", "green"];

let started = false//started=false because game is not started yet
let level = 0;
let h3 = document.querySelector("h3");

let button = document.querySelector(".button");

button.addEventListener("click", function () {
    if (started == false) {
        console.log("game is started ");
        started = true;

        levelup();//calling level up
    }

})

// gameflash generates white color
function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}

//userflash generates green color
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}

function levelup() {
    usersequence = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomcolor}`);

    gamesequence.push(randomcolor);
    console.log(`gamesequence :${gamesequence}`);
    gameflash(randombtn);
}

function checkans(index) {

    if (usersequence[index] === gamesequence[index]) {
        console.log("same value");
        if (usersequence.length == gamesequence.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        h3.innerHTML = `Game over!.Your score is <b>${level}</b> <br>Press Start button to start the game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset_game();
    }

}

function btnpress() {
    console.log(this);
    let button = this;
    userflash(button);//calling userflash
    console.dir(button);
    let usercolor = button.getAttribute("id");
    console.log(usercolor);
    usersequence.push(usercolor);
    console.log(`usersequence:${usersequence}`);

    checkans(usersequence.length - 1);


}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset_game() {
    started = false;
    level = 0;
    gamesequence = [];
    usersequence = [];
}


