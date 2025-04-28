// gsap.to("#box", {
//     duration: 2,
//     scale: 2,
//     repeat: -1,
//     yoyo: true,
//     backgroundColor: "red",
//     ease: "power1.inOut",
//     // x: 1000,
// });

// gsap.from("#box2", {
//     duration: 2,
//     scale: 2,
//     repeat: -1,
//     yoyo: true,
//     backgroundColor: "red",
//     ease: "power1.inOut",
//     // x: 1000,
// });

//! scrollTrigger animations
gsap.to("#section2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        // end: "bottom top",
        end: "top -100%",
        scrub: 2,
        markers: true,
        pin: true,
    },
});

//! SVG animations
var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

// string.addEventListener("mousemove", function (dets) {
//     path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
//     gsap.to("svg path", {
//         attr: { d: path },
//         duration: 0.2,
//         ease: "power3.out",
//     });
// });

string.addEventListener("mousemove", function (dets) {
    const rect = string.getBoundingClientRect();
    // console.log(rect);
    const x = dets.clientX - rect.left; //x position within the element.
    const y = dets.clientY - rect.top; //y position within the element.
    path = `M 10 100 Q ${x} ${y} 990 100`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out",
    });
});

string.addEventListener("mouseleave", function (dets) {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.3,
        ease: "elastic.out(1, 0.3),",
    });
});
