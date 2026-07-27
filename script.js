// ================================
// PAGES
// ================================

const pages = document.querySelectorAll(".page");

function nextSection(id) {

    pages.forEach(page => page.classList.remove("active"));

    document.getElementById(id).classList.add("active");

    window.scrollTo(0, 0);

}



// ================================
// LOADING
// ================================

window.addEventListener("load", () => {

    setTimeout(() => {

        nextSection("welcome");

    }, 2500);

});




// ================================
// RELATIONSHIP COUNTER
// 13 APRIL 2025
// ================================

const startDate = new Date("2025-04-13T00:00:00");

function updateCounter() {

    const now = new Date();

    let diff = now - startDate;

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    const years = Math.floor(days / 365);
    days -= years * 365;

    const months = Math.floor(days / 30);
    days -= months * 30;

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter, 1000);




// ================================
// FLOATING HEARTS
// ================================

const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "❤" : "♡";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (14 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 700);




// ================================
// COMPLIMENTS
// ================================

const compliments = [

"Beautiful",

"Pretty",

"Cute",

"Hot",

"My Favourite Person",

"Your Smile",

"Your Laugh",

"Your Eyes",

"Your Voice",

"Your Ice Cream Obsession 🍦",

"Your Little Attitude",

"Your Random Stories",

"My Penguin 🐧",

"Kind",

"Caring",

"Funny",

"Your Good Morning Texts",

"The Way You Say My Name",

"Your Sleepy Face",

"Your Happiness",

"The Way You Laugh",

"The Way You Care",

"My Safe Place",

"My Peace",

"Everything About You ❤️"

];

const complimentArea = document.getElementById("complimentArea");

let complimentIndex = 0;

function showCompliment() {

    if (complimentIndex >= compliments.length) return;

    const bubble = document.createElement("div");

    bubble.className = "compliment";

    bubble.textContent = compliments[complimentIndex];

    const rotation = (Math.random() * 10 - 5);

    bubble.style.transform = `rotate(${rotation}deg)`;

    complimentArea.appendChild(bubble);

    complimentIndex++;

}

setInterval(showCompliment, 1000);




// ================================
// ENDINGS
// ================================

function showEnding(type) {

    pages.forEach(page => page.classList.remove("active"));

    document.getElementById(type).classList.add("active");

    if (type === "happy") {

        celebrate();

    }

}




// ================================
// CELEBRATION
// ================================

function celebrate() {

    let count = 0;

    const timer = setInterval(() => {

        createHeart();

        count++;

        if (count > 80) {

            clearInterval(timer);

        }

    }, 120);

}
