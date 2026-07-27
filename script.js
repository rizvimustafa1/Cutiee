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
