const img = document.getElementById("cursor-follower");

//Make cursor move
document.addEventListener("mousemove", function (e) {
    img.style.left = e.clientX + "px";
    img.style.top = e.clientY + "px";
});

// Change on hover over buttons 

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        img.src = "assets/img/cursor-alt.png";
    });

    btn.addEventListener("mouseleave", () => {
        img.src = "assets/img/cursor.png";
    });
});