// ================================
// PAGE NAVIGATION
// ================================

function goToPage(pageId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

// ================================
// FLOATING HEARTS
// ================================

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const emojis=["❤️","💕","💖","🌸"];

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animationDuration=(8+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },13000);

}

setInterval(createHeart,450);

// ================================
// STORY BOOK
// ================================

const chapters=[

{
title:"How We Met ❤️",
text:"Replace this with your own story."
},

{
title:"The First Time I Smiled Because Of You 🐧",
text:"Write your second chapter here."
},

{
title:"The Little Moments 🌸",
text:"Write another memory here."
},

{
title:"Today ❤️",
text:"Write what you want her to know today."
}

];

let currentChapter=0;

function showChapter(){

document.getElementById("chapterTitle").innerHTML=chapters[currentChapter].title;

document.getElementById("chapterText").innerHTML=chapters[currentChapter].text;

}

showChapter();

function nextChapter(){

if(currentChapter<chapters.length-1){

currentChapter++;

showChapter();

}

}

function previousChapter(){

if(currentChapter>0){

currentChapter--;

showChapter();

}

}

// ================================
// RELATIONSHIP COUNTER
// ================================

// CHANGE THIS DATE

const relationshipDate=new Date("2025-01-01T00:00:00");

function updateCounter(){

const now=new Date();

const diff=now-relationshipDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(diff/(1000*60*60))%24;

const minutes=Math.floor(diff/(1000*60))%60;

const seconds=Math.floor(diff/1000)%60;

document.getElementById("counterBox").innerHTML=`

<div>${days} Days</div>

<div>${hours} Hours</div>

<div>${minutes} Minutes</div>

<div>${seconds} Seconds</div>

`;

}

setInterval(updateCounter,1000);

updateCounter();

// ================================
// LOVE LETTERS
// ================================

const letters=[

{

title:"Dear Cutiee ❤️",

body:"Write your first love letter here."

},

{

title:"My Favourite Penguin 🐧",

body:"Write your second love letter here."

},

{

title:"One Last Letter 🌸",

body:"Write your third love letter here."

}

];

function openLetter(index){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML=letters[index].title;

document.getElementById("popupBody").innerHTML=letters[index].body;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

// ================================
// MINI GAME
// ================================

const gameArea=document.getElementById("gameArea");

let score=0;

function createPenguins(){

gameArea.innerHTML="";

score=0;

document.getElementById("gameResult").innerHTML="";

for(let i=0;i<5;i++){

const penguin=document.createElement("div");

penguin.innerHTML="🐧";

penguin.style.position="absolute";

penguin.style.left=Math.random()*80+"%";

penguin.style.top=Math.random()*80+"%";

penguin.style.fontSize="48px";

penguin.style.cursor="pointer";

penguin.onclick=function(){

penguin.remove();

score++;

if(score===5){

document.getElementById("gameResult").innerHTML=`

<h3>🎁 Surprise ❤️</h3>

<p>

You once told me that you wanted effort...

not words.

So I made this little website for you.

</p>

<button onclick="goToPage('promises')">

Continue ❤️

</button>

`;

}

};

gameArea.appendChild(penguin);

}

}

createPenguins();

// ================================
// FINAL BUTTONS
// ================================

document.getElementById("yesBtn").onclick = function () {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popupTitle").innerHTML = "❤️ Thank You ❤️";

    document.getElementById("popupBody").innerHTML = `
    Thank you for giving us another chance.

    I promise I'll spend every day trying to be
    someone who deserves your love.

    🐧❤️
    `;

    startConfetti();

}

document.getElementById("timeBtn").onclick = function () {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popupTitle").innerHTML = "🌸";

    document.getElementById("popupBody").innerHTML = `
    That's okay.

    I'll respect your feelings.

    Thank you for taking the time
    to go through everything I made.

    No matter what happens,
    you'll always be my favourite penguin.

    🐧❤️
    `;

}

// ================================
// CONFETTI
// ================================

function startConfetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.innerHTML=["❤️","🌸","💕","💖"][Math.floor(Math.random()*4)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-50px";

c.style.fontSize=(20+Math.random()*20)+"px";

c.style.pointerEvents="none";

c.style.zIndex=9999;

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform=`translateY(${window.innerHeight+200}px) rotate(${Math.random()*720}deg)`;

},20);

setTimeout(()=>{

c.remove();

},4500);

}

}
