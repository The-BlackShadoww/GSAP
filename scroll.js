const marqueAnimation = () => {
    window.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            // console.log("scrolling down");
            gsap.to(".marque", {
                transform: "translateX(-200%)",
                duration: 5,
                repeat: -1,
                ease: "none",
            });
            gsap.to(".marque img", {
                rotate: 180,
            });
        } else {
            // console.log("scrolling up");
            gsap.to(".marque", {
                transform: "translateX(0%)",
                duration: 5,
                repeat: -1,
                ease: "none",
            });
            gsap.to(".marque img", {
                rotate: 0,
            });
        }
    });
};

marqueAnimation();
