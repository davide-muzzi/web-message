document.getElementById("yes-button").addEventListener("click", function() {
    document.getElementById("big-text").textContent = " ";
    document.querySelector(".button-container").classList.add("hidden");
    document.getElementById("yes-content").classList.remove("hidden");

    const music = document.getElementById("background-music");
    music.volume = 0.5;
    music.play();
    
    const maxHearts = 100;
    const heartContainer = document.getElementById("heart-container");

    function spawnHeart() {
        if (heartContainer.children.length >= maxHearts) {
            let firstHeart = heartContainer.children[0];
            firstHeart.style.opacity = "0"; // Fade out
            setTimeout(() => {
                firstHeart.style.left = Math.random() * 100 + "vw";
                firstHeart.style.top = "100vh";
                firstHeart.style.animationDuration = (Math.random() * 4 + 2) + "s";
                firstHeart.style.opacity = "1"; // Fade back in smoothly
                heartContainer.appendChild(firstHeart);
            }, 300); // Delay to avoid instant pop
        } else {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "100vh";
            heart.style.animationDuration = (Math.random() * 4 + 2) + "s";
            heartContainer.appendChild(heart);
        }
    
        setTimeout(spawnHeart, 200);
    }

    spawnHeart();
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
    document.getElementById("video-container").classList.remove("hidden");
    const video = document.getElementById("undertale-video");
    video.currentTime = 0;
    video.play();
    setTimeout(() => location.reload(), 10000);
});
