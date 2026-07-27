// ===============================
// LOADING SCREEN
// ===============================

setTimeout(() => {

    nextScreen("welcome");

}, 3000);




// ===============================
// SCREEN SWITCHING
// ===============================

function nextScreen(id) {

    const currentScreen = document.querySelector(".screen.active");

    if(currentScreen){
        currentScreen.classList.remove("active");
    }


    const next = document.getElementById(id);

    if(next){
        next.classList.add("active");
    }

}




// ===============================
// FLOATING HEARTS
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left = Math.random() * 100 + "%";


    heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";


    heart.style.animationDuration =
    (Math.random() * 3 + 4) + "s";


    document
    .getElementById("hearts")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },7000);

}



setInterval(createHeart,500);






// ===============================
// RELATIONSHIP COUNTER
// START DATE: 13 APRIL 2025
// ===============================


const startDate = new Date("April 13, 2025 00:00:00");



function updateCounter(){


    const now = new Date();


    let difference = now - startDate;



    let seconds = Math.floor(
        difference / 1000
    );


    let minutes = Math.floor(
        seconds / 60
    );


    let hours = Math.floor(
        minutes / 60
    );


    let days = Math.floor(
        hours / 24
    );



    let years = Math.floor(
        days / 365
    );


    days = days % 365;



    let months = Math.floor(
        days / 30
    );


    days = days % 30;



    hours = hours % 24;


    minutes = minutes % 60;


    seconds = seconds % 60;




    document.getElementById("years").innerHTML = years;

    document.getElementById("months").innerHTML = months;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}



setInterval(updateCounter,1000);

updateCounter();






// ===============================
// FINAL CHOICES
// ===============================


function happyEnding(){


    const current = document.querySelector(".screen.active");


    current.classList.remove("active");


    document
    .getElementById("happy")
    .classList.add("active");


}




function sadEnding(){


    const current = document.querySelector(".screen.active");


    current.classList.remove("active");


    document
    .getElementById("sad")
    .classList.add("active");


}
