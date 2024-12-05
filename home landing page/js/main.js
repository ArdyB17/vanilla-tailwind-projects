document.addEventListener("DOMContentLoaded", () => {
    const navTriggerBtn = document.querySelector("#nav_trigger_btn");
    const navMenu = document.querySelector("#nav_menu");

    // Event listener for mobile menu
    navTriggerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("nav-is-open");
    });

    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            960: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
});

const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1500, // Reduced duration
    delay: 300, // Reduced delay
    reset: true,
});

// section "hero" animations
sr.reveal(".hero__text", { origin: "top" });

// steps
sr.reveal(".steps__step", { distance: "100px", interval: 50 });

// about
sr.reveal(".about__img", { origin: "right", delay: 200 });
sr.reveal(".about__text", { origin: "left" });

// testimonial
sr.reveal(".testimonial__bg", { delay: 200 });
sr.reveal(".testimonial__title", { origin: "top", delay: 100 });
sr.reveal(".testimonial__slider", { delay: 200 });

// brands
sr.reveal(".brands__img", { delay: 100, distance: "80px", interval: 100 });

// work
sr.reveal(".work__title");
sr.reveal(".work__subtitle", { delay: 400 });
sr.reveal(".work__grid", { delay: 400 });

// stats
sr.reveal(".stats");
sr.reveal(".stats__item", {
    distance: "100px",
    interval: 50,
});

// news
sr.reveal(".news__title");
sr.reveal(".news__subtitle", { delay: 300 });

sr.reveal(".news__item", {
    distance: "100px",
    interval: 50,
    delay: 300,
});

// contact
sr.reveal(".contact__container");
sr.reveal(".contact__text", { delay: 300 });

// footer
sr.reveal(".footer__item", {
    distance: "100px",
    interval: 50,
    delay: 300,
});

sr.reveal(".footer__copyright");
