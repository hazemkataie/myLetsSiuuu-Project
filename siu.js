//Select element
const button = document.querySelector("#btn");
// const siuAudio = document.getElementById("snd");

//event listener
eventListener();
function eventListener(){
    button.addEventListener("click",runSiu);
    document.addEventListener("DOMContentLoaded",firstSiu);
}

function firstSiu() {
     runSiu();
}

const sesCal = function(){
     let audio = new Audio("Medya/Siuuu - Notification Tone ! Ronaldo.mp3");
     audio.play();
}

function runSiu(){
     button.innerText='SIIIUUUU';
     sesCal();
     window.setTimeout(() => {
          button.innerText="Let's SIIIUUUU!";
     },1500);
}