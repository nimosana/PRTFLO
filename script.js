document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navBar = document.querySelector(".navbar");

    if (navToggle && navBar) {
        navToggle.addEventListener("click", () => {
            const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", !isExpanded);
            navBar.setAttribute("data-expanded", !isExpanded);
        });
    }

    // Portfolio Slideshow Logic
    const slideshows = document.querySelectorAll(".slideshow");
    slideshows.forEach(slideshow => {
        const track = slideshow.querySelector(".slideshow-track");
        const prevBtn = slideshow.querySelector(".slide-nav.prev");
        const nextBtn = slideshow.querySelector(".slide-nav.next");

        if (track && prevBtn && nextBtn) {
            prevBtn.addEventListener("click", () => {
                const scrollAmount = track.clientWidth;
                track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            nextBtn.addEventListener("click", () => {
                const scrollAmount = track.clientWidth;
                track.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    });
});