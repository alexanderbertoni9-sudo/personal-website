const cursor = document.getElementById("cursor-follower");

const pointer = "assets/img/cursor.png";
const grab_hover = "assets/img/cursor-alt.png";


//Make cursor move
document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Change on hover over buttons 

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        cursor.src = grab_hover;
    });

    btn.addEventListener("mouseleave", () => {
        cursor.src = pointer;
    });
});

const img = document.querySelectorAll("img")

img.forEach(img => {
    img.addEventListener("mouseenter", () => {
        cursor.src = grab_hover;
    });

    img.addEventListener("mouseleave", () => {
        cursor.src = pointer;
    });
});