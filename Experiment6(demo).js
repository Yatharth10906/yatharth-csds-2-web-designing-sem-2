// ─────────────────────────────────────────────
// Experiment 6 : DOM Manipulation using Events
// ─────────────────────────────────────────────

// Step 1: Get references to HTML elements
let heading = document.getElementById("mainHead");
let description = document.getElementById("description");
let userInput = document.getElementById("userInput");
let preview = document.getElementById("livePreview");
let container = document.querySelector(".container");

// Keep track of font size so we can increase it each click
let currentFontSize = 32;

// Keep the original values so Reset works properly
let originalHeading = heading.innerText;
let originalBg = document.body.style.background;
let originalFontSize = currentFontSize;
let originalBackground = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";


// ─────────────────────────────────────────────
// 1. Change Heading Text  (called via onclick)
// ─────────────────────────────────────────────
function changeHeading() {
    let text = userInput.value.trim();

    if (text !== "") {
        heading.innerText = text;
    } else {
        alert("Please type something in the input box first.");
    }
}


// ─────────────────────────────────────────────
// 2. Change Background Color  (called via onclick)
// ─────────────────────────────────────────────
// Uses Math.random() to pick a random hue every click
function changeBgColor() {
    let hue = Math.floor(Math.random() * 360);
    document.body.style.background = "hsl(" + hue + ", 60%, 75%)";
}


// ─────────────────────────────────────────────
// 3. Increase Font Size  (called via onclick)
// ─────────────────────────────────────────────
function increaseFontSize() {
    currentFontSize = currentFontSize + 4;
    heading.style.fontSize = currentFontSize + "px";
}


// ─────────────────────────────────────────────
// 4. Show / Hide Paragraph  (called via onclick)
// ─────────────────────────────────────────────
function toggleParagraph() {
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}


// ─────────────────────────────────────────────
// 5. Reset Page  (called via onclick)
// ─────────────────────────────────────────────
// Resets everything manually without reloading — content changes dynamically
function resetPage() {
    heading.innerText = originalHeading;
    heading.style.fontSize = originalFontSize + "px";
    heading.style.color = "#333";
    description.style.display = "block";
    document.body.style.background = originalBackground;
    userInput.value = "";
    preview.innerText = "";
    currentFontSize = originalFontSize;
}


// ─────────────────────────────────────────────
// 6. onchange Event on Input
// ─────────────────────────────────────────────
// onchange fires when user finishes typing and clicks away
// This is attached in HTML using  onchange="handleChange()"
function handleChange() {
    let text = userInput.value.trim();
    if (text !== "") {
        preview.innerText = 'Preview: "' + text + '"';
    } else {
        preview.innerText = "";
    }
}


// ─────────────────────────────────────────────
// 7. onmouseover Event — using addEventListener()
// ─────────────────────────────────────────────
// Changes heading color when mouse hovers over it
heading.addEventListener("mouseover", function () {
    heading.style.color = "#764ba2";
});

// Revert color when mouse leaves
heading.addEventListener("mouseout", function () {
    heading.style.color = "#333";
});


// ─────────────────────────────────────────────
// 8. addEventListener() on input — live preview while typing
// ─────────────────────────────────────────────
// keyup fires after every key press (gives live feedback)
userInput.addEventListener("keyup", function () {
    let text = userInput.value.trim();
    if (text !== "") {
        preview.innerText = 'Preview: "' + text + '"';
    } else {
        preview.innerText = "";
    }
});