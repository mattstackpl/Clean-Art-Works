// main.js
// Main interaction logic file for the entire website

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Automatic year in the footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 3. Floating menu effect on scroll (Navbar Scroll)
    const headerInner = document.getElementById('header-inner');
    if (headerInner) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                headerInner.classList.add('shadow-[0_4px_12px_rgba(37,99,235,0.08)]');
                headerInner.classList.remove('shadow-[0_8px_30px_rgba(37,99,235,0.06)]');
            } else {
                headerInner.classList.add('shadow-[0_8px_30px_rgba(37,99,235,0.06)]');
                headerInner.classList.remove('shadow-[0_4px_12px_rgba(37,99,235,0.08)]');
            }
        });
    }

    // 4. Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Services dropdown on mobile
    const mobileServicesBtn = document.getElementById('mobile-services-btn');
    const mobileServicesMenu = document.getElementById('mobile-services-menu');
    const mobileServicesIcon = document.getElementById('mobile-services-icon');

    function toggleMenu() {
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    if (mobileServicesBtn && mobileServicesMenu) {
        mobileServicesBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileServicesMenu.classList.toggle('hidden');
            mobileServicesMenu.classList.toggle('flex');
            mobileServicesIcon.classList.toggle('rotate-180');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                toggleMenu();
            }
        }
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // 4.5. Services Accordion Logic
    const serviceBtns = document.querySelectorAll('.service-btn');
    serviceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const iconPlus = btn.querySelector('.lucide-plus');
            const iconX = btn.querySelector('.lucide-x');
            
            // Close others
            document.querySelectorAll('.service-content').forEach(otherContent => {
                if (otherContent !== content && otherContent.classList.contains('open')) {
                    otherContent.classList.remove('open');
                    const otherBtn = otherContent.previousElementSibling;
                    const otherPlus = otherBtn.querySelector('.lucide-plus');
                    const otherX = otherBtn.querySelector('.lucide-x');
                    if (otherPlus) otherPlus.classList.remove('hidden');
                    if (otherX) otherX.classList.add('hidden');
                }
            });

            // Toggle current
            content.classList.toggle('open');
            if (content.classList.contains('open')) {
                if (iconPlus) iconPlus.classList.add('hidden');
                if (iconX) iconX.classList.remove('hidden');
            } else {
                if (iconPlus) iconPlus.classList.remove('hidden');
                if (iconX) iconX.classList.add('hidden');
            }
        });
    });

    // 5. FAQ Accordion Logic
    const faqBtns = document.querySelectorAll('.faq-btn');
    
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            
            // Close other opened elements
            document.querySelectorAll('.faq-content').forEach(otherContent => {
                if (otherContent !== content && otherContent.classList.contains('open')) {
                    otherContent.classList.remove('open');
                    const otherIcon = otherContent.previousElementSibling.querySelector('.faq-icon');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Open / Close clicked element
            content.classList.toggle('open');
            
            if (content.classList.contains('open')) {
                if (icon) icon.style.transform = 'rotate(-180deg)'; 
            } else {
                if (icon) icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // 7. Generic Slider Logic (Continuous Glide + Manual)
    function initSlider(sliderId, prevId, nextId, numSlidesInSet, speedVal = 1) {
        const slider = document.getElementById(sliderId);
        const prevBtn = document.getElementById(prevId);
        const nextBtn = document.getElementById(nextId);

        if (!slider || !prevBtn || !nextBtn) return;

        let isInteracting = false;
        let resumeTimeout;
        const gap = 32; // 2rem
        let speed = speedVal; // pixels per frame

        const play = () => {
            if (!isInteracting) {
                slider.scrollLeft += speed;
            }
            requestAnimationFrame(play);
        };

        // Infinite loop logic on scroll (handles both auto and manual scrolling)
        slider.addEventListener('scroll', () => {
            const slideWidth = slider.querySelector('.slide').offsetWidth;
            const setWidth = numSlidesInSet * (slideWidth + gap);

            if (slider.scrollLeft >= setWidth) {
                slider.scrollLeft -= setWidth;
            } else if (slider.scrollLeft <= 0) {
                // Allows infinite scrolling to the left
                slider.scrollLeft += setWidth;
            }
        });

        const stop = () => {
            isInteracting = true;
            clearTimeout(resumeTimeout);
        };

        const resume = (delay = 0) => {
            clearTimeout(resumeTimeout);
            resumeTimeout = setTimeout(() => {
                isInteracting = false;
            }, delay);
        };

        const manualScroll = (direction) => {
            stop();
            const slideWidth = slider.querySelector('.slide').offsetWidth;
            const scrollAmount = slideWidth + gap;
            
            slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
            
            // Resume after smooth scrolling finishes
            resume(800);
        };

        nextBtn.addEventListener('click', () => manualScroll(1));
        prevBtn.addEventListener('click', () => manualScroll(-1));

        // Pause events
        slider.parentElement.addEventListener('mouseenter', stop);
        slider.parentElement.addEventListener('mouseleave', () => resume(0));
        slider.parentElement.addEventListener('touchstart', stop, {passive: true});
        slider.parentElement.addEventListener('touchend', () => resume(1200), {passive: true});
        slider.parentElement.addEventListener('wheel', () => {
            stop();
            resume(1200);
        }, {passive: true});

        // Start
        requestAnimationFrame(play);
    }

    initSlider('hero-slider', 'slider-prev', 'slider-next', 4, 1);
    initSlider('testimonials-slider', 'test-prev', 'test-next', 4, 1);


    // 8. Contact form handling (UX states)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if(!submitBtn) return;
            const originalContent = submitBtn.innerHTML;
            
            // Loading state
            submitBtn.innerHTML = '<span>Sending...</span><div class="btn-icon"><i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i></div>';
            submitBtn.disabled = true;
            if (typeof lucide !== 'undefined') lucide.createIcons();

            // Simulate API response
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = '<span>Message Sent!</span><div class="btn-icon" style="background:#00B67A"><i data-lucide="check" class="w-4 h-4"></i></div>';
                if (typeof lucide !== 'undefined') lucide.createIcons();
                
                // Reset after 4 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }, 4000);
            }, 1500);
        });
    }
});


    // 6. Active Nav Link
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('text-brand');
            link.classList.remove('text-gray-700');
        }
    });