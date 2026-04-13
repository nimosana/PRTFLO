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
    const slideshowContainers = document.querySelectorAll(".slideshow-container");
    slideshowContainers.forEach(container => {
        const slideshow = container.querySelector(".slideshow");
        if (!slideshow) return;

        const track = slideshow.querySelector(".slideshow-track");
        const prevBtn = slideshow.querySelector(".slide-nav.prev");
        const nextBtn = slideshow.querySelector(".slide-nav.next");
        const thumbnails = container.querySelectorAll(".thumbnail");

        const updateActiveThumbnail = (index) => {
            thumbnails.forEach(t => t.classList.remove("active"));
            if (thumbnails[index]) {
                thumbnails[index].classList.add("active");
                thumbnails[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        };

        if (track && prevBtn && nextBtn) {
            prevBtn.addEventListener("click", () => {
                const scrollAmount = track.clientWidth;
                track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            nextBtn.addEventListener("click", () => {
                const scrollAmount = track.clientWidth;
                track.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });

            // Sync thumbnails on scroll natively
            track.addEventListener("scroll", () => {
                const scrollLeft = track.scrollLeft;
                const slideWidth = track.clientWidth;
                if (slideWidth > 0) {
                    const index = Math.round(scrollLeft / slideWidth);
                    updateActiveThumbnail(index);
                }
            });
        }

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener("click", () => {
                if (track) {
                    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
                }
            });
        });
    });
});