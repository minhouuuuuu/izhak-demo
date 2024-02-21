gsap.from(".letter", 1.2, {
    y: 20,
    opacity: 0,
    ease: "power3.inOut",
    stagger: 0.2,
    delay: 0.2,
})

gsap.to('.top-left', 2, {
    top: "0",
    ease: "power3.inOut",
    delay: 1.5,
})

gsap.to('.bottom-left, .bottom-right', 2, {
    bottom: "0",
    ease: "power3.inOut",
    delay: 1.5,
})

gsap.to('.top-left', 2, {
    left: "2.5%",
    ease: "power3.inOut",
    delay: 2.8,
})

gsap.to('.bottom-left', 2, {
    left: "2.5%",
    ease: "power3.inOut",
    delay: 2.8,
})

gsap.to('.bottom-right', 2, {
    right: "2.5%",
    ease: "power3.inOut",
    delay: 2.8,
})

gsap.to('.block-left', 2, {
    left: "-50%",
    ease: "power3.inOut",
    delay: 2.8,
})

gsap.to('.block-right', 2, {
    right: "-50%",
    ease: "power3.inOut",
    delay: 2.8,
})

gsap.from('p', 1.2, {
    opacity: 0,
    delay: 4.3,
    ease: "power3.inOut", 
});

gsap.to('video', 1.2, {
    scale: 1.2, 
    delay: 4,
    ease: "power3.inOut", 
});