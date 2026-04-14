window.openModal = function (id) {
    document.body.classList.add('modal-active');
    const target = document.getElementById(id);
    target.className = 'project-modal'; // pure reset
    target.showModal();
};
window.closeModal = function (id) {
    const dialog = document.getElementById(id);
    if (!dialog.hasAttribute('open')) return;
    dialog.className = 'project-modal modal-closing'; // force pure exit
    document.body.classList.remove('modal-active');

    setTimeout(() => {
        dialog.className = 'project-modal';
        dialog.close();
    }, 300); // Exactly matches CSS Out animation duration + buffer
};
window.switchModal = function (currentId, targetId, direction) {
    const current = document.getElementById(currentId);
    if (!current.hasAttribute('open')) return;

    // Hard override of class entirely skirts specificity/bubbling conflicts
    current.className = `project-modal ${direction === 'next' ? 'modal-switching-out-left' : 'modal-switching-out-right'}`;

    setTimeout(() => {
        current.close();
        current.className = 'project-modal';

        const target = document.getElementById(targetId);
        target.className = `project-modal ${direction === 'next' ? 'modal-switching-in-right' : 'modal-switching-in-left'}`;
        target.showModal();
    }, 250);
};

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navBar = document.querySelector(".navbar");

    setTimeout(() => {
        if (navBar) navBar.style.animation = 'none';
        const sidebar = document.querySelector(".portfolio-sidebar");
        if (sidebar) sidebar.style.animation = 'none';
    }, 1200);

    if (navToggle && navBar) {
        navToggle.addEventListener("click", () => {
            const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", !isExpanded);
            navBar.setAttribute("data-expanded", !isExpanded);
        });
    }

    // Generative Rendering from projects.js
    const portfolioContainer = document.getElementById("portfolio-container");
    const modalsContainer = document.getElementById("modals-container");

    if (portfolioContainer && modalsContainer && typeof portfolioData !== "undefined") {
        Object.values(portfolioData).forEach(category => {
            const section = document.createElement("section");
            section.id = category.id;
            section.className = "surface";

            let html = `<h2>${category.title}</h2>`;
            if (category.description) html += `<p>${category.description}</p>`;

            html += `<div class="slideshow-container"><div class="slideshow" data-slideshow-id="${category.id}"><div class="slideshow-track">`;

            category.items.forEach(item => {
                if (category.type === "video_gallery") {
                    html += `<div class="slide"><iframe loading="lazy" src="https://www.youtube.com/embed/${item.videoId}?enablejsapi=1" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
                } else {
                    html += `<div class="slide"><a href="#" onclick="window.openModal('${item.modalId}'); return false;"><img src="${item.coverThumb}" alt="${item.title}"></a></div>`;
                }
            });

            html += `</div><button class="slide-nav prev" aria-label="Previous frame">&#10094;</button><button class="slide-nav next" aria-label="Next frame">&#10095;</button></div><div class="slideshow-thumbnails">`;
            category.items.forEach((item, index) => {
                html += `<img tabindex="0" class="thumbnail ${index === 0 ? 'active' : ''}" src="${category.type === 'video_gallery' ? item.thumb : item.coverThumb}" alt="Thumbnail ${index + 1}">`;
            });
            html += `</div></div>`;

            if (category.showGrid) {
                html += `<h3 style="margin-top: var(--spacing-xl);">Responsive Image Grid</h3><div class="grid grid-auto image-grid">`;
                category.items.forEach(item => {
                    html += `<a href="#" onclick="window.openModal('${item.modalId}'); return false;"><img src="${item.gridImage}" alt="${item.title} Grid" class="grid-img"></a>`;
                });
                html += `</div>`;
            }

            section.innerHTML = html;
            portfolioContainer.appendChild(section);

            if (category.type === "project_gallery") {
                category.items.forEach((item, index) => {
                    const dialog = document.createElement("dialog");
                    dialog.id = item.modalId;
                    dialog.className = "project-modal";

                    const prevId = index > 0 ? category.items[index - 1].modalId : null;
                    const nextId = index < category.items.length - 1 ? category.items[index + 1].modalId : null;
                    const prevOnClick = prevId ? `window.switchModal('${item.modalId}', '${prevId}', 'prev'); return false;` : "return false;";
                    const nextOnClick = nextId ? `window.switchModal('${item.modalId}', '${nextId}', 'next'); return false;` : "return false;";

                    let dialogHtml = `<button class="btn btn-image close-modal-btn" aria-label="Close" onclick="window.closeModal('${item.modalId}')" style="position: absolute; top: var(--spacing-md); right: var(--spacing-md); width: 44px; height: 44px; z-index: 100;"><span style="font-family: var(--font-family-heading); font-size: 1.5rem; color: var(--color-primary); display:block; margin-top:-4px;">X</span></button>
                    <div class="project-modal-header">
                        <span style="font-family: var(--font-family-heading); text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; color: var(--color-text-muted); opacity: 0.8; display: block; margin-bottom: var(--spacing-xs);">${category.title}</span>
                        <div class="flex" style="align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-xs); flex-wrap: wrap;">
                            <h2 style="margin: 0;">${item.title}</h2>
                            <div class="modal-nav-arrows flex" style="gap: var(--spacing-sm);">
                                <button class="btn modal-nav-prev" onclick="${prevOnClick}" ${!prevId ? 'disabled' : ''} aria-label="Previous Project" style="padding: 4px 12px; font-size: 1rem;">&#10094;</button>
                                <button class="btn modal-nav-next" onclick="${nextOnClick}" ${!nextId ? 'disabled' : ''} aria-label="Next Project" style="padding: 4px 12px; font-size: 1rem;">&#10095;</button>
                            </div>
                        </div>
                        <div class="project-meta flex" style="gap: var(--spacing-md); margin-bottom: var(--spacing-lg); color: var(--color-primary); font-family: var(--font-family-heading);"><span><strong>Mediums:</strong> ${item.mediums}</span><span><strong>Date:</strong> ${item.date}</span></div>
                    </div>
                    <div class="project-modal-body"><div class="slideshow-container"><div class="slideshow" data-slideshow-id="${item.modalId}-slides"><div class="slideshow-track">`;

                    item.slides.forEach(slide => {
                        if (slide.type === "youtube") {
                            dialogHtml += `<div class="slide"><iframe loading="lazy" src="https://www.youtube.com/embed/${slide.videoId}?enablejsapi=1" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
                        } else if (slide.type === "comparison") {
                            dialogHtml += `<div class="slide comparison-slide" onmousedown="window.handleComparisonDown(event)" onmousemove="window.handleComparisonMove(event)">
                                <img class="img-before aspect-ratio-4-3" src="${slide.beforeSrc}" alt="Before">
                                <div class="img-after-wrapper aspect-ratio-4-3">
                                    <img class="img-after" src="${slide.afterSrc}" alt="After">
                                </div>
                                <div class="comparison-slider">
                                    <div class="comparison-slider-icon">&#8596;</div>
                                </div>
                            </div>`;
                        } else {
                            dialogHtml += `<div class="slide"><img src="${slide.src}" alt="${item.title} Slide"></div>`;
                        }
                    });

                    dialogHtml += `</div><button class="slide-nav prev" aria-label="Previous frame">&#10094;</button><button class="slide-nav next" aria-label="Next frame">&#10095;</button></div><div class="slideshow-thumbnails">`;
                    item.slides.forEach((slide, idx) => { dialogHtml += `<img tabindex="0" class="thumbnail ${idx === 0 ? 'active' : ''}" src="${slide.thumb}" alt="Thumb ${idx + 1}">`; });
                    dialogHtml += `</div></div><div class="surface" style="margin-top: var(--spacing-lg); padding: var(--spacing-md);"><h3 style="margin-bottom: var(--spacing-sm);">Project Overview</h3><p>${item.desc}</p></div></div>`;

                    dialog.innerHTML = dialogHtml;
                    dialog.addEventListener('cancel', (e) => {
                        e.preventDefault();
                        window.closeModal(item.modalId);
                    });
                    modalsContainer.appendChild(dialog);
                });
            }
        });
    }

    // Portfolio Slideshow Logic
    const slideshowContainers = document.querySelectorAll(".slideshow-container");
    slideshowContainers.forEach(container => {
        const slideshow = container.querySelector(".slideshow");
        if (!slideshow) return;

        const pauseAllIframes = (parent) => {
            parent.querySelectorAll('iframe').forEach(iframe => {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            });
        };

        const track = slideshow.querySelector(".slideshow-track");
        let currentIndex = 0;
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
                    if (currentIndex !== index) {
                        pauseAllIframes(track);
                        currentIndex = index;
                    }
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
            thumb.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    thumb.click();
                }
            });
        });
    });

    // Modal Backdrop Clicking Handler
    document.querySelectorAll('dialog.project-modal').forEach(dialog => {
        dialog.addEventListener('close', () => {
            dialog.querySelectorAll('iframe').forEach(iframe => {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            });
        });

        dialog.addEventListener('click', (e) => {
            if (window.compState && Date.now() < window.compState.preventClickUntil) return; // Prevent closing globally if just finished a drag
            
            const dialogDimensions = dialog.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                window.closeModal(dialog.id);
            }
        });
    });
});
window.compState = { isDown: false, startX: 0, startY: 0, dragged: false, activeSlide: null, preventClickUntil: 0 };

window.addEventListener('mouseup', (event) => {
    if (window.compState && window.compState.isDown && window.compState.activeSlide) {
        window.handleComparisonUp({ currentTarget: window.compState.activeSlide, clientX: event.clientX, clientY: event.clientY });
    }
});

window.handleComparisonDown = function(event) {
    const slide = event.currentTarget;
    window.compState.isDown = true;
    window.compState.dragged = false;
    window.compState.startX = event.clientX;
    window.compState.startY = event.clientY;
    window.compState.activeSlide = slide;
    slide.style.transition = 'none'; 
};

window.handleComparisonMove = function(event) {
    const slide = event.currentTarget;
    
    if (window.compState.isDown) {
        window.compState.dragged = true; // Any movement while mouse is down counts as drag
    }
    
    // Pan logic when zoomed
    if (window.compState.isDown && slide.classList.contains('zoomed')) {
        const dx = event.clientX - window.compState.startX;
        const dy = event.clientY - window.compState.startY;
        
        let tx = parseFloat(slide.dataset.tx || 0) + (dx / 2.5);
        let ty = parseFloat(slide.dataset.ty || 0) + (dy / 2.5);
        
        // Clamping constraints to prevent dragging outside of image edges
        const rect = slide.getBoundingClientRect();
        const unscaledW = rect.width / 2.5; 
        const unscaledH = rect.height / 2.5;
        const ox = parseFloat(slide.dataset.ox || 0.5);
        const oy = parseFloat(slide.dataset.oy || 0.5);
        
        const minTx = -0.6 * (1 - ox) * unscaledW;
        const maxTx = 0.6 * ox * unscaledW;
        const minTy = -0.6 * (1 - oy) * unscaledH;
        const maxTy = 0.6 * oy * unscaledH;
        
        tx = Math.max(minTx, Math.min(tx, maxTx));
        ty = Math.max(minTy, Math.min(ty, maxTy));
        
        slide.style.transform = `scale(2.5) translate(${tx}px, ${ty}px)`;
        slide.dataset.currTx = tx;
        slide.dataset.currTy = ty;
    }
    
    // Mask sliding logic (works perfectly even while scaled!)
    const rect = slide.getBoundingClientRect();
    let xPercentage = event.clientX - rect.left;
    xPercentage = Math.max(0, Math.min(xPercentage, rect.width));
    const percent = (xPercentage / rect.width) * 100;
    
    const wrapper = slide.querySelector('.img-after-wrapper');
    const slider = slide.querySelector('.comparison-slider');
    if (wrapper && slider) {
        wrapper.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
        slider.style.left = `${percent}%`;
    }
};

window.handleComparisonUp = function(event) {
    const slide = event.currentTarget;
    slide.style.transition = 'transform 0.3s ease'; 
    if (!window.compState.isDown) return;
    
    window.compState.isDown = false;
    window.compState.activeSlide = null;
    
    const dx = event.clientX - window.compState.startX;
    const dy = event.clientY - window.compState.startY;
    const isDrag = window.compState.dragged && (Math.abs(dx) > 5 || Math.abs(dy) > 5);
    
    // Finalize pan
    if (isDrag) {
        window.compState.preventClickUntil = Date.now() + 100; // Block clicks globally for 100ms
        if (slide.classList.contains('zoomed')) {
            slide.dataset.tx = slide.dataset.currTx || slide.dataset.tx;
            slide.dataset.ty = slide.dataset.currTy || slide.dataset.ty;
        }
        return;
    }
    
    window.compState.preventClickUntil = Date.now() + 100;
    
    // It's a clean click
    if (slide.classList.contains('zoomed')) {
        slide.classList.remove('zoomed');
        slide.style.transform = 'none';
        slide.dataset.tx = 0;
        slide.dataset.ty = 0;
    } else {
        slide.classList.add('zoomed');
        slide.dataset.tx = 0;
        slide.dataset.ty = 0;
        
        const rect = slide.getBoundingClientRect();
        const clickX = ((event.clientX - rect.left) / rect.width);
        const clickY = ((event.clientY - rect.top) / rect.height);
        slide.dataset.ox = clickX;
        slide.dataset.oy = clickY;
        
        slide.style.transformOrigin = `${clickX * 100}% ${clickY * 100}%`;
        slide.style.transform = 'scale(2.5) translate(0px, 0px)';
    }
};

window.handleComparisonLeave = function(event) {
    if (window.compState.isDown && event.currentTarget.classList.contains('zoomed')) {
        window.handleComparisonUp(event);
    }
};
