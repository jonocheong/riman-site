document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // === Ensure Header Stays Above Content ===
    gsap.set(".header", { zIndex: 100 });

    // === Subtle Banner Entrance ===
    gsap.from(".hero__banner", {
        opacity: 0,
        y: -10,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
    });

    // === Header Logo Staggered Fade-in ===
    gsap.from(".header__logo", {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3,
    });

    // === Navbar Links Staggered In ===
    gsap.from(".nav__list li", {
        opacity: 0,
        y: -30,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.5,
    });

    // === Apply Initial Blur for Extra Elegance ===
    gsap.set(".hero__title, .hero__title2, .hero__subtitle", {
        filter: "blur(10px)",
    });

    // === Hero Titles Staggered Fade-in with Blur Effect ===
    gsap.fromTo(
        ".hero__title, .hero__title2",
        { opacity: 0, y: 80, filter: "blur(10px)" },
        {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.2,
            delay: 0.8,
            force3D: true,
        }
    );

    // === Hero Subtitles - Delayed Fade-In ===
    gsap.fromTo(
        ".hero__subtitle",
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.1,
            delay: 1.2,
            force3D: true,
        }
    );

    // === Smooth Scroll Animation for Image ===
    gsap.from(".riman-1", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".riman-1",
            start: "top 80%",
            end: "top 40%",
            scrub: true,
        },
    });

    // === Smooth Infinite Scrolling Background Effect ===
    gsap.to(".hero__bg-track", {
        x: "-50%",
        duration: 30,
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.wrap(-window.innerWidth, 0), // Ensures a seamless loop
        },
    });

    // === Prevent Any Animation Glitches on Load ===
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
});
