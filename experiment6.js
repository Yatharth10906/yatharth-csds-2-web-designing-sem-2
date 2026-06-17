
const heading = document.getElementById("mainHead");
const description = document.getElementById("description");
const input = document.getElementById("userInput");
const container = document.querySelector(".container");

document.getElementById("btnChangeText").addEventListener("click", () => {
    if (input.value.trim() !== "") {
        heading.innerText = input.value;
    }
});

document.getElementById("btnColor").addEventListener("click", () => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    document.body.style.background = randomColor;
});


let currentSize = 32;
document.getElementById("btnFontSize").addEventListener("click", () => {
    currentSize += 5;
    heading.style.fontSize = currentSize + "px";
});


document.getElementById("btnToggle").addEventListener("click", () => {
    description.style.display = (description.style.display === "none") ? "block" : "none";
});



// 7. Reset Page
document.getElementById("btnReset").addEventListener("click", () => {
    location.reload(); // Simplest way to reset everything
});

// 8. Event: Change event on input
input.addEventListener("change", () => {
    console.log("Input field updated to: " + input.value);
});