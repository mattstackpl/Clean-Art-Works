document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Staggered Reveals
    const revealElements = document.querySelectorAll('.reveal');
    let intersectingElements = [];
    let timeoutId = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                intersectingElements.push(entry.target);
                observer.unobserve(entry.target);
            }
        });

        if (intersectingElements.length > 0) {
            // Sort elements by their vertical position to ensure top-to-bottom animation
            intersectingElements.sort((a, b) => {
                return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
            });

            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                intersectingElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('is-visible');
                    }, index * 60); // 60ms stagger delay for a cohesive wave effect
                });
                intersectingElements = [];
            }, 50); // wait a brief moment to collect all intersecting elements in this frame
        }
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
    });

    revealElements.forEach(el => {
        // Remove hardcoded Tailwind delays as we handle staggering dynamically via JS
        el.className = el.className.replace(/delay-\[.*?\]/g, '').trim();
        observer.observe(el);
    });

    // 2. Smooth <details> FAQ Accordion Animation (WAAPI)
    class Accordion {
        constructor(el) {
            this.el = el;
            this.summary = el.querySelector('summary');
            this.content = el.querySelector('summary + div');
            this.icon = this.summary.querySelector('.lucide-chevron-right, .lucide-chevron-down, [data-lucide]');
            this.animation = null;
            this.isClosing = false;
            this.isExpanding = false;
            this.summary.addEventListener('click', (e) => this.onClick(e));
        }

        onClick(e) {
            e.preventDefault();
            this.el.style.overflow = 'hidden';
            if (this.isClosing || !this.el.open) {
                this.open();
            } else if (this.isExpanding || this.el.open) {
                this.shrink();
            }
        }

        shrink() {
            this.isClosing = true;
            const startHeight = `${this.el.offsetHeight}px`;
            const endHeight = `${this.summary.offsetHeight}px`;
            
            if (this.animation) this.animation.cancel();
            
            if (this.icon) {
                this.icon.style.transform = 'rotate(0deg)';
                this.icon.style.transition = 'transform 250ms cubic-bezier(0.23, 1, 0.32, 1)';
            }

            this.animation = this.el.animate({
                height: [startHeight, endHeight]
            }, {
                duration: 250,
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)' 
            });
            
            this.animation.onfinish = () => this.onAnimationFinish(false);
            this.animation.oncancel = () => this.isClosing = false;
        }

        open() {
            this.el.style.height = `${this.el.offsetHeight}px`;
            this.el.open = true;
            window.requestAnimationFrame(() => this.expand());
        }

        expand() {
            this.isExpanding = true;
            const startHeight = `${this.el.offsetHeight}px`;
            const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
            
            if (this.animation) this.animation.cancel();

            if (this.icon) {
                this.icon.style.transform = 'rotate(90deg)';
                this.icon.style.transition = 'transform 250ms cubic-bezier(0.23, 1, 0.32, 1)';
            }

            this.animation = this.el.animate({
                height: [startHeight, endHeight]
            }, {
                duration: 350,
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
            });
            
            this.animation.onfinish = () => this.onAnimationFinish(true);
            this.animation.oncancel = () => this.isExpanding = false;
        }

        onAnimationFinish(open) {
            this.el.open = open;
            this.animation = null;
            this.isClosing = false;
            this.isExpanding = false;
            this.el.style.height = this.el.style.overflow = '';
        }
    }

    document.querySelectorAll('details').forEach((el) => {
        new Accordion(el);
    });
});