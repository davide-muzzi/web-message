document.getElementById("yes-button").addEventListener("click", function() {
    document.querySelector(".button-container").style.display = "none";
    document.getElementById("yes-content").classList.remove("hidden");
});

const noButton = document.getElementById("no-button");
let moveIndex = 0;
const moveSteps = [
    { x: "5vw", y: "-35vh" },
    { x: "-40vw", y: "10vh" },
    { x: "15vw", y: "-7vh" },
    { x: "-20vw", y: "6vh" },
    { x: "1vw", y: "-25vh" },
    { x: "-45vw", y: "20vh" },
    { x: "18vw", y: "-6vh" },
    { x: "-15vw", y: "5vh" },
    { x: "0vw", y: "-40vh" },
    { x: "0vw", y: "40vh" },
    { x: "35vw", y: "0vh" },
    { x: "-35vw", y: "0vh" },
    { x: "25vw", y: "-25vh" },
    { x: "-30vw", y: "20vh" },
    { x: "40vw", y: "-10vh" },
    { x: "-10vw", y: "35vh" },
    { x: "25vw", y: "-15vh" },
    { x: "-30vw", y: "5vh" },
    { x: "15vw", y: "-25vh" },
    { x: "-20vw", y: "30vh" }
];

let moving = true;
noButton.addEventListener("mouseover", function() {
    if (moving) {
        setTimeout(() => {
            let move = moveSteps[moveIndex];
            noButton.style.position = "absolute";
            noButton.style.transform = `translate(${move.x}, ${move.y})`;
            moveIndex = (moveIndex + 1) % moveSteps.length;
        }, 75); // Short delay before moving, adjust to reaction speed
    }
});

noButton.addEventListener("click", function() {
    moving = false;
    document.getElementById("no-button-container").innerHTML = `
        <button class="split-button" id="n-button">N</button>
        <button class="split-button" id="o-button">O</button>
    `;
    document.getElementById("n-button").addEventListener("click", function() {
        this.outerHTML = `
            <button class="split-button">I</button>
            <button class="split-button">\\</button>
            <button class="split-button">I</button>
        `;
    });
    document.getElementById("o-button").addEventListener("click", function() {
        this.outerHTML = `
            <button class="split-button">(</button>
            <button class="split-button">)</button>
        `;
    });
});