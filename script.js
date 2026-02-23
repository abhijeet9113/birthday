function goToSurprise() {
    window.location.href = "surprise.html";
}

/* Confetti Auto */
if (document.querySelector(".confetti-container")) {
    const container = document.querySelector(".confetti-container");

    for (let i = 0; i < 150; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ",100%,50%)";
        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        container.appendChild(confetti);
    }
}
