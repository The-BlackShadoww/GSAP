var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
    // cursor.style.left = dets.x + "px";
    // cursor.style.top = dets.y + "px";
    // cursor.style.transform = "translate(-50%, -50%)";
    // cursor.style.display = "block";
    gsap.to(cursor, {
        x: dets.x - 10,
        y: dets.y - 10,
        duration: 0.6,
    });
});

imageDiv.addEventListener("mouseenter", function () {
    // cursor.innerHTML = "<img src='images/zoom.png' />";
    cursor.innerHTML = "View more";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffff8a",
    });
});

imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff",
    });
});
