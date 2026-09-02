// theme.js
// Ten plik definiuje i wstrzykuje Design System (kolory i tokeny typograficzne)
// Rozwiązanie to pozwala korzystać z potęgi dyrektyw @apply Tailwind CDN bezpośrednio z dysku lokalnego (file://)

window.tailwind = window.tailwind || {};
window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
                transitionTimingFunction: {
                    'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
                    'in-out-expo': 'cubic-bezier(0.77, 0, 0.175, 1)',
                },
            colors: {
                brand: {
                    DEFAULT: '#2656A1',
                    dark: '#0F3056',
                    light: '#6E9EEC',
                    pastel: '#E8F0FA',
                    pastelDark: '#6E9EEC',
                    pastelHover: '#568ADE',
                },
                accent: {
                    DEFAULT: '#FCB734',
                    hover: '#EBA014',
                },
                surface: {
                    DEFAULT: '#F8F9FB',
                    dark: '#0F3056',
                    warm: '#FFFDF9',
                },
                gray: {
                    900: '#111111',
                    800: '#2A2A2A',
                    700: '#4A4A4A',
                    600: '#666666',
                    500: '#888888',
                },
                social: {
                    google: { blue: '#4285F4', red: '#EA4335', yellow: '#FBBC05', green: '#34A853' },
                    reviewsLabel: '#00B4D8',
                    angi: '#FF5A45',
                    yelp: '#FF1A1A',
                    trustpilot: '#00B67A',
                    star: '#FFB800'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['"Outfit"', 'sans-serif'],
            },
            boxShadow: {
                'bubbly': '0 20px 40px -15px rgba(38, 86, 161, 0.15)',
                'card': '0 10px 30px -10px rgba(0,0,0,0.05)',
            }
        }
    }
};

const twStyles = `
@layer components {
        .btn-secondary {
            @apply inline-flex items-center justify-center gap-2 text-white border-2 border-brand rounded-full font-heading font-medium px-6 py-2 transition-all duration-300;
        }
        .btn-secondary-dark {
            @apply inline-flex items-center justify-center gap-2 text-surface-dark border-2 border-brand rounded-full font-heading font-medium px-6 py-2 transition-all duration-300;
        }
        .btn-secondary:hover, .btn-secondary-dark:hover {
            @apply border-brand-dark;
        }
        .btn-secondary i {
            @apply flex items-center justify-center transition-all duration-300 ease-out-expo text-white;
        }
        .btn-secondary-dark i {
            @apply flex items-center justify-center transition-all duration-300 ease-out-expo text-surface-dark;
        }
        .btn-secondary:hover i, .btn-secondary-dark:hover i {
            @apply text-brand scale-110 bg-transparent;
        }
        .btn-secondary.btn-sm, .btn-secondary-dark.btn-sm {
            @apply px-4 py-1.5 text-sm;
        }

        
        
        

    
        .btn-primary:active, .btn-secondary:active, .btn-secondary-dark:active {
            transform: scale(0.97);
        }

    
        .btn-text {
            @apply relative inline-flex items-center gap-1 font-bold transition-all duration-300;
        }
        .btn-text::after {
            content: '';
            @apply absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 ease-out-expo;
        }
        .btn-text:hover::after {
            @apply w-full;
        }
        .btn-text:hover i {
            @apply translate-x-1;
        }
        .btn-text i {
            @apply transition-transform duration-300 ease-out-expo;
        }

    /* Layout Containers */
    .container-default { @apply max-w-7xl mx-auto w-full px-5 md:px-[60px]; }
        @layer utilities {
            .reveal {
                @apply opacity-0 translate-y-6 scale-[0.98] transition-all duration-[700ms] ease-out-expo;
                will-change: transform, opacity;
            }
            .reveal.is-visible {
                @apply opacity-100 translate-y-0 scale-100;
            }
        }
    .container-full { @apply w-full px-[20px]; }

    /* Typography System */
    .text-display-hero { @apply font-heading font-medium text-[3.25rem] md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight; }
    .text-display-huge { @apply font-heading font-medium text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.9] tracking-tighter; }
    .text-stat { @apply font-heading font-medium text-[3.5rem] md:text-6xl lg:text-7xl tracking-tighter; }
    
    .text-h1 { @apply font-heading font-medium text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] leading-[1.05] tracking-tight; }
    .text-h2 { @apply font-heading font-medium text-4xl md:text-5xl tracking-tight leading-tight; }
    .text-h3 { @apply font-heading font-medium text-2xl md:text-3xl leading-snug; }
    .text-h4 { @apply font-heading font-medium text-lg md:text-xl leading-snug; }

    .text-body-lg { @apply font-sans font-normal text-[17px] md:text-lg leading-relaxed; }
    .text-body { @apply font-sans font-normal text-base leading-relaxed; }
    .text-body-sm { @apply font-sans font-normal text-sm md:text-[15px] leading-relaxed; }

    .text-label { @apply font-heading font-medium text-[10px] md:text-xs uppercase tracking-widest; }
    
    .pill-eyebrow { @apply text-label inline-flex items-center bg-[#2F589E] text-white py-1.5 rounded-full mb-4 shadow-sm overflow-hidden relative whitespace-nowrap; }

    /* Button System (Cleanora Style) */
    .btn-primary { @apply inline-flex items-center gap-4 bg-brand text-white font-heading font-medium text-base pl-6 pr-[6px] py-[6px] rounded-full transition-all hover:brightness-110 hover:shadow-bubbly; }
    .btn-primary .btn-icon {
        @apply w-10 h-10 rounded-full bg-white text-brand flex items-center justify-center transition-transform duration-300 flex-shrink-0;
    }
    .btn-primary:hover .btn-icon svg {
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }
    
    
    
    .btn-secondary:hover::after {
        @apply w-full;
    }
    .btn-secondary:hover svg {
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }
}

html { scroll-behavior: smooth; }
body { background-color: #F8F9FB; overflow-x: hidden; }

/* Komponent FAQ */
.faq-content { max-height: 0; overflow: hidden; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0; }
.faq-content.open { max-height: 400px; opacity: 1; padding-top: 1rem; }

/* Komponent Services Accordion */
.service-content { max-height: 0; overflow: hidden; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0; }
.service-content.open { max-height: 1000px; opacity: 1; padding-top: 1rem; }

/* Custom Gradient */
.text-gradient { background: linear-gradient(135deg, #2656A1 0%, #6E9EEC 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

/* Slider controls via JS & Scroll Snap */
.slider-track { display: flex; gap: 2rem; overflow-x: auto; scroll-behavior: auto; -ms-overflow-style: none; scrollbar-width: none; }
.slider-track::-webkit-scrollbar { display: none; }
.slide { width: 320px; flex-shrink: 0; }
@media (min-width: 768px) { .slide { width: 400px; } }

/* Custom Dark Select */
.select-dark { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.2em; }

/* City Marquee */
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.3333%); } }
.animate-marquee { display: flex; width: max-content; animation: marquee 40s linear infinite; }
.animate-marquee:hover { animation-play-state: paused; }

@keyframes marquee-fast { 0% { transform: translateX(0); } 100% { transform: translateX(-33.3333%); } }
.animate-marquee-fast { display: flex; align-items: center; white-space: nowrap; width: max-content; animation: marquee-fast 15s linear infinite; }
.animate-marquee-fast:hover { animation-play-state: paused; }

`;

// Wstrzykiwanie stylów, by uniknąć problemów z ładowaniem pliku .css lokalnie z dyrektywami @apply
const styleEl = document.createElement('style');
styleEl.type = 'text/tailwindcss';
styleEl.innerHTML = twStyles;
document.head.appendChild(styleEl);
