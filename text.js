function breakTheText() {
    let h1 = document.querySelector("h1");
    let h1Text = h1.textContent;
    console.log(h1Text);

    let splitText = h1Text.split("");
    console.log(splitText);

    let h1TextLength = splitText.length;
    let halfValue = Math.floor(h1TextLength / 2);
    // console.log(h1TextLength);

    // ! typewriter effect
    // splitText.forEach((letter, index) => {
    //   console.log(letter, index);
    //   setTimeout(() => {
    //     document.querySelector("h1").textContent = splitText.slice(0, index + 1).join("");
    //   }, index * 100);
    // });

    let clutter = "";
    splitText.forEach((letter, index) => {
        if (index < halfValue) {
            clutter += `<span class="left">${letter}</span>`;
        } else {
            clutter += `<span class="right">${letter}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .left", {
    y: 80,
    duration: 0.6,
    opacity: 0,
    stagger: 0.15,
    // ease: "power2.out",
});

gsap.from("h1 .right", {
    y: 80,
    duration: 0.6,
    opacity: 0,
    stagger: -0.15,
    // ease: "power2.out",
});