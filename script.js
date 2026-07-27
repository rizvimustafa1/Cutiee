// ==========================
// PAGE NAVIGATION
// ==========================

function nextPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo(0, 0);
}

// ==========================
// FLOATING HEARTS
// ==========================

const background = document.getElementById("background");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️","💖","💕","🌸"][Math.floor(Math.random()*4)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.animationDuration = (8 + Math.random()*6) + "s";

    background.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },14000);

}

setInterval(createHeart,500);

// ==========================
// LOVE LETTERS
// ==========================

const letters = [

{
title:"My Cutiee ❤️",
body:"Write your first love letter here. Tell her something only she would understand."
},

{
title:"My Favourite Penguin 🐧",
body:"Write your second letter here. Maybe your favourite memory together."
},

{
title:"One Last Letter 🌸",
body:"Write your final heartfelt message here."
}

];

function openLetter(index){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML=letters[index].title;

document.getElementById("popupText").innerHTML=letters[index].body;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

// ==========================
// RELATIONSHIP COUNTER
// ==========================

// CHANGE THIS DATE
const togetherDate = new Date("2024-01-01T00:00:00");

function updateCounter(){

const now = new Date();

const diff = now - togetherDate;

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor(diff / (1000*60*60)) % 24;

const minutes = Math.floor(diff / (1000*60)) % 60;

const seconds = Math.floor(diff / 1000) % 60;

document.getElementById("timer").innerHTML = `
<div style="font-size:55px;">❤️</div>
<div>${days} Days</div>
<div>${hours} Hours</div>
<div>${minutes} Minutes</div>
<div>${seconds} Seconds</div>
`;

}

setInterval(updateCounter,1000);

updateCounter();

// ==========================
// MINI GAME
// ==========================

const gameArea=document.getElementById("gameArea");

let caught=0;

for(let i=0;i<5;i++){

const penguin=document.createElement("div");

penguin.innerHTML="🐧";

penguin.style.position="absolute";

penguin.style.left=Math.random()*80+"vw";

penguin.style.top=(20+Math.random()*60)+"vh";

penguin.style.fontSize="50px";

penguin.style.cursor="pointer";

penguin.onclick=function(){

penguin.remove();

caught++;

if(caught===5){

document.getElementById("gameMessage").innerHTML=`
<h2>🎁 Surprise ❤️</h2>
<p>
You once told me you wanted effort, not words.
So instead of sending another paragraph...
I spent my time making something just for you.
</p>

<button onclick="nextPage('final')">
Continue ❤️
</button>
`;

}

}

gameArea.appendChild(penguin);

}
