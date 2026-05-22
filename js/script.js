let name = "Bilha Nangami";
let age = 20;
let favoriteColor = "Blue";

let hobbies = ["Reading", "Coding", "Music", "Walking"];

// FUNCTION (button click)
function showMessage() {
    document.getElementById("message-box").style.color="blue";
    document.getElementById("message-box").innerText =
        "Welcome to my webpage!";
}
setInterval(function () {
    let time = new Date();
    document.getElementById("time-box").innerText =
        time.toLocaleTimeString();
}, 1000);

// DOM manipulation
document.getElementById("about-title").innerText = "About Me";

// FORM HANDLING
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

    document.getElementById("form-result").innerText =
        "Thank you " + userName + ", we received your message!";
});

// LOOP (display hobbies in console)
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

// TIMER
setInterval(function () {
     let time = new Date();
    console.log(time.toLocaleTimeString());
}, 1000);

setInterval(function () {
    let time = new Date();
    document.getElementById("time-box").innerText =
        time.toLocaleTimeString();
}, 1000);
