let imageMove = document.getElementById("main")
let finalScore = document.getElementById("score")
let startButton = document.getElementById("button")
const question = [
    "ArrowUp", "ArrowDown", "Space",
    "ArrowUp", "ArrowLeft", "ArrowRight", "Space",
    "ArrowDown", "ArrowRight", "ArrowLeft", "ArrowRight", "Space",
    "ArrowUp", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowUp", "ArrowLeft", "Space",
    "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "ArrowRight", "ArrowLeft", "Space",
    "ArrowDown", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowUp", "ArrowDown", "ArrowLeft", "Space",
    "ArrowRight", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowDown", "Space",
    "ArrowLeft", "ArrowDown", "ArrowLeft", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "ArrowRight", "Space",
    "ArrowUp", "ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown", "ArrowRight", "ArrowLeft", "ArrowRight", "Space",
    "ArrowLeft", "ArrowDown", "ArrowLeft", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "ArrowRight", "ArrowUp", "ArrowDown", "ArrowRight", "Space",
    "ArrowUp", "ArrowDown", "ArrowUp", "ArrowDown", "ArrowUp", "ArrowDown", "ArrowUp", "Space"
]
const answer = [
    "[↑] [↓] [SPACE]",
    "[↑] [←] [→] [SPACE]",
    "[↓] [→] [←] [→] [SPACE]",
    "[↑] [↓] [↑] [←] [↑] [←] [SPACE]",
    "[↑] [↓] [→] [←] [→] [←] [SPACE]",
    "[↓] [←] [↑] [↓] [↑] [↓] [←] [SPACE]",
    "[→] [←] [→] [←] [→] [←] [↓] [SPACE]",
    "[←] [↓] [←] [↓] [←] [→] [↑] [↓] [→] [SPACE]",
    "[↑] [↓] [→] [↑] [←] [→] [↓] [→] [←] [→] [SPACE]",
    "[←] [↓] [←] [↓] [←] [→] [↑] [↓] [→] [↑] [↓] [→] [SPACE]",
    "[↑] [↓] [↑] [↓] [↑] [↓] [↑] [SPACE]"
]
// const question = [
//     "ArrowUp", "ArrowLeft",

//     "ArrowUp", "ArrowLeft", "ArrowRight",

//     "ArrowUp", "ArrowLeft", "ArrowRight", 'ArrowDown',

//     "ArrowUp", "ArrowLeft", "ArrowRight", 'ArrowDown', 'Space',

//     "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowLeft", "ArrowRight",

//     "ArrowUp", "Space", "ArrowDown", "ArrowRight", "ArrowLeft", "ArrowRight", "ArrowLeft", "Space",

//     "ArrowUp", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowUp", "ArrowLeft", "ArrowDown",

//     "ArrowDown", "ArrowLeft", "ArrowSpace", "ArrowDown", "Arrowup", "ArrowDown", "ArrowLeft", "ArrowSpace",

//     "ArrowDown", "ArrowRight", "ArrowLeft",  "ArrowDown", "ArrowUp", "ArrowLeft"
// ]
var music = new Audio('./others/y2mate.com - Ottawan - D.I.S.C.O. (HD) Legendado em PT- BR.mp3');
// var command = new Audio('./others/REC004-MP3MusicAmplifier.mp3')
var punch = new Audio('./others/PUNCH.mp3')
var applause = new Audio('./others/applause3.mp3')
var achievement = new Audio('./others/fiesta_trio.mp3')
var buzzer = new Audio('./others/Buzzer-sound.mp3')


let i = 0
let j = 0
let score = 0
let arrow = document.getElementById("arrow")


let timeleft = 60;
startButton.addEventListener('click', function() {
    timeleft = 60
    var downloadTimer = setInterval(function(){
        if(timeleft === 1) {
            buzzer.play()
        }
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
            alert(`Thanks for helping me burn calories! (score = ${score})`)
            music.pause();
            music.currentTime = 0
            i=0
            j=0
            score=0 
            timeleft=0
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
    score = 0
    i = 0
    j = 0
    finalScore.innerText = score
    arrow.innerText = answer[0]
    document.getElementById("main").src="./img/joe/IMG_6673.gif"
    // command.play();
    music.play();
    
})
document.addEventListener('keydown', function(event) {
    console.log(event.code);
    if (event.code === 'ArrowUp') {
        // document.getElementById("main").src="./img/up.jpg"
        document.getElementById("main").src="./img/joe/IMG_66761.gif"

        punch.play()
    }
    if (event.code === 'ArrowRight') {
        document.getElementById("main").src="./img/joe/IMG_66741.gif"
        punch.play()
    }
    if (event.code === 'ArrowDown') {
        document.getElementById("main").src="./img/joe/IMG_66771.gif"
        punch.play()
    }
    if (event.code === 'ArrowLeft') {
        document.getElementById("main").src="./img/joe/IMG_66751.gif"
        punch.play()
    }
    if (event.code === 'Space') {
        document.getElementById("main").src="./img/joe/IMG_66781.gif"
        punch.play()
        applause.play()
        j++
    }

    if (j === answer.length) {
        alert (`Thanks for helping me burn calories! (score = ${score+1})`)
        achievement.play()
        music.pause();
        music.currentTime = 0
        // command.pause();
        // command.currentTime = 0
        timeleft=0
    }
    
    if (event.code !== question[i] || timeleft === 0) {
        console.log(question[i]);
        alert(`I can't win unless you do it correctly. Try again. (score = ${score})`)
        music.pause();
        music.currentTime = 0
        i=0
        j=0
        score=0 
        timeleft=0
        // command.pause();
        // command.currentTime = 0
    } else if (event.code === question[i]) {
        console.log(question[i]);
        score += 1
        i++
    } 

    console.log(i);
    arrow.innerText = answer[j]
    finalScore.innerText = score

})
