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

noButton.addEventListener("mouseover", function() {
    let move = moveSteps[moveIndex];
    noButton.style.position = "absolute";
    noButton.style.transform = `translate(${move.x}, ${move.y})`;
    moveIndex = (moveIndex + 1) % moveSteps.length;
});
