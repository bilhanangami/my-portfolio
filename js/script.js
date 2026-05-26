/* =========================
   1. VARIABLES & DATA
========================= */

let name = "Bilha Nangami";
let age = 20;
let favoriteColor = "Blue";

let hobbies = ["Taking walks", "Reading novels", "Listening to music", "Watching tutorials"];

let skills = ["HTML", "CSS", "JavaScript", "Bootstrap"];

/* =========================
   2. FUNCTIONS
========================= */

// Welcome message
function showWelcome() {
    let messageBox = document.getElementById("message-box");

    if (messageBox) {
        messageBox.innerText = "Welcome to my personal webpage, " + name + "!";
    }
}

// Greeting based on age
function showAgeMessage() {
    if (age >= 18) {
        console.log("You are an adult learner.");
    } else {
        console.log("You are still young.");
    }
}

/* =========================
   3. EVENTS (BUTTON CLICK)
========================= */

document.addEventListener("DOMContentLoaded", function () {

    // Button click message
    let buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("mouseover", function () {
            btn.style.backgroundColor = "orange";
        });

        btn.addEventListener("mouseout", function () {
            btn.style.backgroundColor = "";
        });
    });

});

/* =========================
   4. DOM MANIPULATION
========================= */

// Change heading text dynamically
function changeTitle() {
    let title = document.querySelector("h1");

    if (title) {
        title.innerText = "My Updated Personal Webpage";
    }
}

/* =========================
   5. FORM HANDLING
========================= */

document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            let nameInput = document.getElementById("name");
            let emailInput = document.getElementById("email");

            let resultBox = document.getElementById("form-result");

            // Validation
            if (nameInput.value === "" || emailInput.value === "") {
                resultBox.innerText = "❌ Please fill all fields!";
                resultBox.style.color = "red";
                return;
            }

            resultBox.innerText = "✅ Thank you " + nameInput.value + ", your message has been sent!";
            resultBox.style.color = "green";

            form.reset();
        });
    }
});

/* =========================
   6. ARRAYS DISPLAY
========================= */

function displayHobbies() {

    let list = document.getElementById("hobby-list");

    if (list) {

        for (let i = 0; i < hobbies.length; i++) {
            let li = document.createElement("li");
            li.innerText = hobbies[i];
            list.appendChild(li);
        }
    }
}

/* =========================
   7. LOOPS (SKILLS)
========================= */

function displaySkills() {

    let skillBox = document.getElementById("skill-box");

    if (skillBox) {

        skills.forEach(skill => {
            let p = document.createElement("p");
            p.innerText = "✔ " + skill;
            skillBox.appendChild(p);
        });
    }
}

/* =========================
   8. CONDITIONALS
========================= */

function checkUser() {

    let messageBox = document.getElementById("message-box");

    if (!messageBox) return;

    if (age >= 18) {
        messageBox.innerText = "You are eligible to access full content.";
    } else {
        messageBox.innerText = "You are underage.";
    }
}

/* =========================
   9. TIMER (LIVE CLOCK)
========================= */

function showTime() {

    let timeBox = document.getElementById("time-box");

    if (timeBox) {
        let now = new Date();
        timeBox.innerText = "Current Time: " + now.toLocaleTimeString();
    }
}

setInterval(showTime, 1000);

/* =========================
   10. INTERACTIVE FEATURE
   DARK MODE TOGGLE
========================= */

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

/* =========================
   AUTO RUN FUNCTIONS
========================= */

document.addEventListener("DOMContentLoaded", function () {

    showWelcome();
    showAgeMessage();
    displayHobbies();
    displaySkills();
    checkUser();
});
const quotes = [
    "Believe in yourself.",
    "Success is not final, failure is not fatal.",
    "Keep going, you're getting there.",
    "Dream big and dare to fail.",
    "Hard work beats talent when talent doesn't work hard."
];

let autoInterval = null;

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quoteElement = document.getElementById("quote");

    quoteElement.innerText = quotes[randomIndex];

    // restart fade animation
    quoteElement.classList.remove("fade");
    void quoteElement.offsetWidth;
    quoteElement.classList.add("fade");
}

// COPY BUTTON
function copyQuote() {
    let quoteText = document.getElementById("quote").innerText;

    navigator.clipboard.writeText(quoteText)
        .then(() => {
            alert("Quote copied!");
        })
        .catch(err => {
            alert("Failed to copy");
        });
}

// AUTO START
function startAuto() {
    if (autoInterval) return; // prevent multiple intervals

    autoInterval = setInterval(() => {
        generateQuote();
    }, 3000); // every 3 seconds
}

// STOP AUTO
function stopAuto() {
    clearInterval(autoInterval);
    autoInterval = null;
}