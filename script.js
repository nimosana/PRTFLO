window.openModal = function (id) {
    document.body.classList.add('modal-active');
    const target = document.getElementById(id);
    target.className = 'project-modal'; // pure reset
    target.showModal();
    window.loadActiveIframes(target);
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
        window.loadActiveIframes(target);
    }, 250);
};

window.loadActiveIframes = function(dialog) {
    if (!dialog) return;
    const track = dialog.querySelector('.slideshow-track');
    if (!track) return;
    requestAnimationFrame(() => {
        const slides = track.querySelectorAll('.slide');
        const slideWidth = track.clientWidth || 1;
        const index = Math.max(0, Math.round(track.scrollLeft / slideWidth));
        if (slides[index]) {
            slides[index].querySelectorAll('iframe.generic-webpage').forEach(iframe => {
                const src = iframe.getAttribute('src');
                if (iframe.dataset.src && (!src || src === 'about:blank' || src === window.location.href)) {
                    iframe.src = iframe.dataset.src;
                }
            });
        }
    });
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

            let html = `<h1>${category.title}</h1>`;
            if (category.description) html += `<p>${category.description}</p>`;

            html += `<div class="slideshow-container"><div class="slideshow" data-slideshow-id="${category.id}"><div class="slideshow-track">`;

            category.items.forEach(item => {
                if (category.type === "video_gallery") {
                    html += `<div class="slide"><iframe loading="lazy" src="https://www.youtube.com/embed/${item.videoId}?enablejsapi=1" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
                } else {
                    html += `<div class="slide"><a href="#" onclick="window.openModal('${item.modalId}'); return false;" class="gallery-slide-link" style="position: relative; display: block; height: 100%; border-radius: var(--radius-md); overflow: hidden;">
                        <img src="${item.coverThumb}" alt="${item.title}" style="display: block; width: 100%; height: 100%; object-fit: cover;">
                        <div class="portrait-overlay"></div>
                        <div class="portrait-content" style="position: absolute; top: var(--spacing-sm); left: var(--spacing-sm); bottom: auto; text-align: left; padding: var(--spacing-md); justify-content: flex-start; z-index: 10;">
                            <h2 class="portrait-title" style="margin-bottom: 0;">${item.title}</h2>
                            <h3 class="portrait-mediums" style="margin: 0; margin-top: var(--spacing-xs); font-family: var(--font-family-heading); font-size: 0.9rem;">${item.mediums}</h3>
                        </div>
                    </a></div>`;
                }
            });

            html += `</div><button class="slide-nav prev" aria-label="Previous frame">&#10094;</button><button class="slide-nav next" aria-label="Next frame">&#10095;</button></div><div class="slideshow-thumbnails">`;
            category.items.forEach((item, index) => {
                html += `<img tabindex="0" class="thumbnail ${index === 0 ? 'active' : ''}" src="${category.type === 'video_gallery' ? item.thumb : item.coverThumb}" alt="Thumbnail ${index + 1}">`;
            });
            html += `</div></div>`;

            // if (category.showGrid) {
            //     html += `<h3 style="margin-top: var(--spacing-xl);">Responsive Image Grid</h3><div class="grid grid-auto image-grid">`;
            //     category.items.forEach(item => {
            //         html += `<a href="#" onclick="window.openModal('${item.modalId}'); return false;"><img src="${item.gridImage}" alt="${item.title} Grid" class="grid-img"></a>`;
            //     });
            //     html += `</div>`;
            // }

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
                        <div class="project-meta flex" style="gap: var(--spacing-md); margin-bottom: var(--spacing-lg); color: var(--color-text-muted); font-family: var(--font-family-heading);"><span><strong style="color: var(--color-primary); font-weight: normal;">Mediums:</strong> ${item.mediums}</span><span><strong style="color: var(--color-primary); font-weight: normal;">Date:</strong> ${item.date}</span>${item.linkUrl ? `<span><strong style="color: var(--color-primary); font-weight: normal;">Link:</strong> <a href="${item.linkUrl}" target="_blank" style="color: var(--color-primary); text-decoration: underline;">${item.linkText || item.linkUrl}</a></span>` : ''}</div>
                    </div>
                    <div class="project-modal-body"><div class="slideshow-container"><div class="slideshow" data-slideshow-id="${item.modalId}-slides" style="--aspect-ratio: ${item.aspectRatio || '16 / 9'};"><div class="slideshow-track">`;

                    item.slides.forEach(slide => {
                        if (slide.type === "youtube") {
                            dialogHtml += `<div class="slide"><iframe loading="lazy" src="https://www.youtube.com/embed/${slide.videoId}?enablejsapi=1" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
                        } else if (slide.type === "webpage") {
                            dialogHtml += `<div class="slide"><iframe class="generic-webpage" loading="lazy" data-src="${slide.url}" src="about:blank" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
                        } else if (slide.type === "comparison") {
                            dialogHtml += `<div class="slide comparison-slide" onpointerdown="window.handleComparisonDown(event)" onpointermove="window.handleComparisonMove(event)">
                                <img class="img-before aspect-ratio-4-3" src="${slide.beforeSrc}" alt="Before">
                                <div class="img-after-wrapper aspect-ratio-4-3">
                                    <img class="img-after" src="${slide.afterSrc}" alt="After">
                                </div>
                                <div class="comparison-slider">
                                    <div class="comparison-slider-icon">&#8596;</div>
                                </div>
                            </div>`;
                        } else {
                            dialogHtml += `<div class="slide zoomable-slide" onpointerdown="window.handleComparisonDown(event)" onpointermove="window.handleComparisonMove(event)"><img src="${slide.src}" alt="${item.title} Slide" oncontextmenu="return false;" style="pointer-events: none;"></div>`;
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
                const targetSrc = iframe.getAttribute('src') || '';
                if (targetSrc.includes('youtube.com')) {
                    iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                } else if (iframe.classList.contains('generic-webpage') && iframe.dataset.src) {
                    if (targetSrc !== 'about:blank' && targetSrc !== '') {
                        iframe.src = 'about:blank';
                    }
                }
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
                        window.loadActiveIframes(container.closest('dialog'));
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
                const targetSrc = iframe.getAttribute('src') || '';
                if (targetSrc.includes('youtube.com')) {
                    iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                } else if (iframe.classList.contains('generic-webpage') && iframe.dataset.src) {
                    if (targetSrc !== 'about:blank' && targetSrc !== '') {
                        iframe.src = 'about:blank';
                    }
                }
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

    // Iframe focus lock to prevent native browser scrolling from stealing arrow keys/swipes
    window.addEventListener('blur', () => {
        setTimeout(() => {
            if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
                const track = document.activeElement.closest('.slideshow-track');
                const modal = document.activeElement.closest('.project-modal');
                if (track) {
                    track.style.overflowX = 'hidden';
                    window._lockedTrack = track;
                }
                if (modal) {
                    modal.style.overflowY = 'hidden';
                    window._lockedModal = modal;
                }
            }
        }, 50);
    });

    const unlockTrack = () => {
        if (window._lockedTrack) {
            window._lockedTrack.style.overflowX = '';
            window._lockedTrack = null;
        }
        if (window._lockedModal) {
            window._lockedModal.style.overflowY = '';
            window._lockedModal = null;
        }
        document.querySelectorAll('.slideshow-track').forEach(t => t.style.overflowX = '');
        document.querySelectorAll('.project-modal').forEach(m => m.style.overflowY = '');
    };

    window.addEventListener('focus', unlockTrack);
    document.addEventListener('click', (e) => {
        if (!e.target.closest('iframe')) unlockTrack();
    });

});
window.compState = { isDown: false, startX: 0, startY: 0, dragged: false, activeSlide: null, preventClickUntil: 0, isSliderDragging: false };

window.addEventListener('pointerup', (event) => {
    if (window.compState && window.compState.isDown && window.compState.activeSlide) {
        window.handleComparisonUp({ currentTarget: window.compState.activeSlide, pointerType: event.pointerType, clientX: event.clientX, clientY: event.clientY });
    }
});

window.handleComparisonDown = function (event) {
    const slide = event.currentTarget;

    if (event.pointerType === 'touch') {
        if (event.target.closest('.comparison-slider-icon') || event.target.closest('.comparison-slider')) {
            window.compState.isSliderDragging = true;
            window.compState.isDown = true;
            window.compState.activeSlide = slide;
            slide.style.transition = 'none';
            return;
        }

        // Double tap detection
        const currentTime = Date.now();
        const tapLength = currentTime - (parseInt(slide.dataset.lastTap) || 0);
        slide.dataset.lastTap = currentTime;

        if (tapLength > 0 && tapLength < 300) {
            window.toggleComparisonZoom(slide, event.clientX, event.clientY);
            window.compState.preventClickUntil = Date.now() + 300;
            return;
        }
    } else {
        if (event.target.closest('.comparison-slider-icon') || event.target.closest('.comparison-slider')) {
            window.compState.isSliderDragging = true;
        }
    }

    window.compState.isDown = true;
    window.compState.dragged = false;
    window.compState.startX = event.clientX;
    window.compState.startY = event.clientY;
    window.compState.activeSlide = slide;
    slide.style.transition = 'none';
};

window.handleComparisonMove = function (event) {
    const slide = event.currentTarget;

    // Mask logic
    if (event.pointerType === 'mouse' || window.compState.isSliderDragging) {
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

        if (event.pointerType === 'touch' && window.compState.isSliderDragging) {
            return;
        }
    }

    // Ensure we don't trigger panning if dragging the slider
    if (window.compState.isDown && !window.compState.isSliderDragging) {
        window.compState.dragged = true;
    }

    // Pan logic
    if (window.compState.isDown && !window.compState.isSliderDragging && slide.classList.contains('zoomed')) {
        const dx = event.clientX - window.compState.startX;
        const dy = event.clientY - window.compState.startY;

        let tx = parseFloat(slide.dataset.tx || 0) + (dx / 2.5);
        let ty = parseFloat(slide.dataset.ty || 0) + (dy / 2.5);

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

        // Dynamically anchor the slider icon to the visible center of the original box
        const sliderIcon = slide.querySelector('.comparison-slider-icon');
        if (sliderIcon) {
            const yPercent = (0.2 + (0.6 * oy) - (ty / unscaledH)) * 100;
            sliderIcon.style.top = `${yPercent}%`;
        }
    }
};

window.handleComparisonUp = function (event) {
    const slide = event.currentTarget || window.compState.activeSlide;
    if (!slide) return;

    slide.style.transition = 'transform 0.3s ease';
    if (!window.compState.isDown) return;

    window.compState.isDown = false;
    window.compState.activeSlide = null;

    if (window.compState.isSliderDragging) {
        window.compState.isSliderDragging = false;
        return;
    }

    const dx = event.clientX - window.compState.startX;
    const dy = event.clientY - window.compState.startY;
    const isDrag = window.compState.dragged && (Math.abs(dx) > 5 || Math.abs(dy) > 5);

    if (isDrag) {
        window.compState.preventClickUntil = Date.now() + 100;
        if (slide.classList.contains('zoomed')) {
            slide.dataset.tx = slide.dataset.currTx || slide.dataset.tx;
            slide.dataset.ty = slide.dataset.currTy || slide.dataset.ty;
        }
        return;
    }

    window.compState.preventClickUntil = Date.now() + 100;

    // Zoom strictly on single click for MOUSE.
    if (event.pointerType === 'mouse' && !isDrag) {
        window.toggleComparisonZoom(slide, event.clientX, event.clientY);
    }
};

window.toggleComparisonZoom = function (slide, clientX, clientY) {
    if (slide.classList.contains('zoomed')) {
        slide.classList.remove('zoomed');
        slide.style.transform = 'none';
        slide.dataset.tx = 0;
        slide.dataset.ty = 0;

        const sliderIcon = slide.querySelector('.comparison-slider-icon');
        if (sliderIcon) sliderIcon.style.top = '50%';
    } else {
        slide.classList.add('zoomed');
        slide.dataset.tx = 0;
        slide.dataset.ty = 0;

        const rect = slide.getBoundingClientRect();
        const clickX = ((clientX - rect.left) / rect.width);
        const clickY = ((clientY - rect.top) / rect.height);
        slide.dataset.ox = clickX;
        slide.dataset.oy = clickY;

        slide.style.transformOrigin = `${clickX * 100}% ${clickY * 100}%`;
        slide.style.transform = 'scale(2.5) translate(0px, 0px)';

        const sliderIcon = slide.querySelector('.comparison-slider-icon');
        if (sliderIcon) {
            const yPercent = (0.2 + (0.6 * clickY)) * 100; // ty is 0 natively
            sliderIcon.style.top = `${yPercent}%`;
        }
    }
};
