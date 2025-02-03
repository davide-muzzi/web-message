document.getElementById("yes-button").addEventListener("click", function() {
    document.querySelector(".button-container").style.display = "none";
    document.getElementById("yes-content").classList.remove("hidden");
});

document.getElementById("no-button").addEventListener("click", function() {
    let noButton = this;
    let randomX = Math.random() * (window.innerWidth - 150);
    let randomY = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
