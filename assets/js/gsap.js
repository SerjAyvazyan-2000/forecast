


gsap.registerPlugin(ScrollTrigger);



document.addEventListener("DOMContentLoaded", () => {

    const initAnimationUsage = () => {
        if (window.innerWidth > 768) {
            gsap.fromTo(
                '.trust-card',
                {
                    scale: 3.5,
                    opacity: 0,
                    y: -300,
                    z: -200,
                },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    z: 0,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '.trust-section',
                        start: 'top 20%',
                        end: 'top bottom',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    };

    initAnimationUsage();

    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimationUsage();
    });
});


