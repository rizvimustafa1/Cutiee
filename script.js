/* ===========================================
   PAGE NAVIGATION
=========================================== */

function showPage(pageId){

    const pages=document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

}

/* ===========================================
   STORY BOOK
=========================================== */

const chapters=[

{
title:"How We Met ❤️",
text:"Write your story here. Tell her how you first met, what you noticed first, and why that moment became special."
},

{
title:"The Little Things 🐧",
text:"Write about the small things she does that make you smile."
},

{
title:"My Favourite Memories 🌸",
text:"Write your favourite memory together."
},

{
title:"Today ❤️",
text:"Write how you feel today and why you wanted to build this website."
}

];

let currentChapter=0;

function updateChapter(){

document.getElementById("chapterTitle").innerHTML=chapters[currentChapter].title;

document.getElementById("chapterText").innerHTML=chapters[currentChapter].text;

}

updateChapter();

function nextChapter(){

if(currentChapter<chapters.length-1){

currentChapter++;

updateChapter();

}

}

function previousChapter(){

if(currentChapter>0){

currentChapter--;

updateChapter();

}

}

/* ===========================================
   RELATIONSHIP COUNTER
=========================================== */

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

${days} Days<br>

${hours} Hours<br>

${minutes} Minutes<br>

${seconds} Seconds

`;

}

setInterval(updateCounter,1000);

updateCounter();

/* ===========================================
   LOVE LETTERS
=========================================== */

const letters=[

{

title:"Dear Cutiee ❤️",

text:"Write your first love letter here."

},

{

title:"You Make My World Better 🐧",

text:"Write your second love letter here."

},

{

title:"Thank You ❤️",

text:"Write your third love letter here."

},

{

title:"One Last Thing 🌸",

text:"Write your final letter here."

}

];

function openLetter(index){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML=letters[index].title;

document.getElementById("popupText").innerHTML=letters[index].text;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
/* ===========================================
   FLOATING HEARTS
=========================================== */

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    const hearts=["❤️","💕","💖","💗","🌸"];

    heart.className="heart";

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

}

setInterval(createHeart,450);

/* ===========================================
   PENGUIN GAME
=========================================== */

const gameArea=document.getElementById("gameArea");

let penguinsCaught=0;

function startGame(){

    penguinsCaught=0;

    gameArea.innerHTML="";

    document.getElementById("gameResult").innerHTML="";

    for(let i=0;i<5;i++){

        const penguin=document.createElement("div");

        penguin.innerHTML="🐧";

        penguin.style.position="absolute";

        penguin.style.fontSize="50px";

        penguin.style.left=Math.random()*80+"%";

        penguin.style.top=Math.random()*80+"%";

        penguin.style.cursor="pointer";

        penguin.style.transition=".25s";

        penguin.onclick=function(){

            penguin.style.transform="scale(0)";

            setTimeout(()=>{

                penguin.remove();

            },200);

            penguinsCaught++;

            if(penguinsCaught===5){

                document.getElementById("gameResult").innerHTML=`

                <h3>🎉 You Found Them All!</h3>

                <p>

                You once told me that actions matter more than words.

                So instead of writing another message...

                I made this little website for you.

                ❤️

                </p>

                <button onclick="showPage('promises')">

                Continue ❤️

                </button>

                `;

            }

        };

        gameArea.appendChild(penguin);

    }

}

startGame();

/* ===========================================
   FINAL PAGE BUTTONS
=========================================== */

document.getElementById("yesButton").onclick=function(){

    showPage("success");

}

document.getElementById("timeButton").onclick=function(){

    showPage("wait");

}

/* ===========================================
   RESTART GAME WHEN RETURNING
=========================================== */

const originalShowPage=showPage;

showPage=function(pageId){

    originalShowPage(pageId);

    if(pageId==="game"){

        startGame();

    }

}

/* ===========================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
=========================================== */

document.getElementById("popup").addEventListener("click",function(e){

    if(e.target.id==="popup"){

        closePopup();

    }

});

/* ===========================================
   SMALL STARTUP ANIMATION
=========================================== */

window.onload=function(){

    updateCounter();

    updateChapter();

};
