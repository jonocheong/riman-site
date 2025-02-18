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

    // === Infinite Horizontal Scroll Effect ===
   
    
        let track = document.querySelector(".hero__bg-track");
        let images = document.querySelectorAll(".hero__bg-track img");
    
        let totalWidth = 0; // Ensure totalWidth is globally defined
    
        // Function to check when all images are loaded
        function imagesLoaded(callback) {
            let loadedCount = 0;
            images.forEach((img) => {
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        callback(); // Run callback when all images are loaded
                    }
                };
            });
        }
    
        // Function to start the carousel animation
        function startCarousel() {
            images = document.querySelectorAll(".hero__bg-track img"); // Update node list (includes duplicates)
            images.forEach((img) => (totalWidth += img.offsetWidth)); // Calculate total width
    
            console.log("Total Width of Images:", totalWidth); // Debugging: Check if width is calculated
    
            // Set track width dynamically to fit all images
            track.style.width = `${totalWidth}px`;
    
            // GSAP Animation for Infinite Scroll
            gsap.to(track, {
                x: `-${totalWidth / 2}px`, // Moves left by half its width
                duration: 30, // Adjust speed
                ease: "linear",
                repeat: -1, // Infinite loop
                modifiers: {
                    x: gsap.utils.wrap(-totalWidth, 0), // Ensures seamless loop
                },
            });
        }
    
        // Duplicate images dynamically for seamless looping
        images.forEach((img) => {
            let clone = img.cloneNode(true);
            track.appendChild(clone);
        });
    
        // Run the function when all images are loaded
        imagesLoaded(startCarousel);
    });
    

//nav link animation



    document.querySelectorAll(".nav__list a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { y: -1, duration: 0.2, ease: "power2.out" }); // Slight lift effect
        });
    
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { y: 0, duration: 0.2, ease: "power2.out" }); // Reset position
        });
    });