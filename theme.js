// theme.js
// This file defines and injects the Design System (colors and typography tokens)
// This solution allows using the power of Tailwind CDN @apply directives directly from the local disk (file://)

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
                    DEFAULT: '#1F69F6',
                    dark: '#0B1740',
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
                    dark: '#0B1740',
                    warm: '#FFFDF9',
                },
                gray: {
                    900: '#091437',
                    800: '#2A2A2A',
                    700: '#4A4A4A',
                    600: '#666666',
                    500: '#888888',
                    400: '#A8B2C1',
                    300: '#D1D5DB',
                    200: '#E5E7EB',
                    100: '#F3F4F6',
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
                sans: ['"Figtree"', 'sans-serif'],
                heading: ['"Figtree"', 'sans-serif'],
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
            @apply inline-flex items-center justify-center gap-2 text-white border-2 border-white rounded-full font-heading font-bold px-6 py-2 transition-all duration-300;
        }
        .btn-secondary-dark {
            @apply inline-flex items-center justify-center gap-2 text-surface-dark border-2 border-brand rounded-full font-heading font-bold px-6 py-2 transition-all duration-300;
        }
        .btn-secondary:hover, .btn-secondary-dark:hover {
            @apply border-brand;
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
                @apply opacity-0 translate-y-6 scale-[0.95] transition-all duration-500 ease-out-expo;
                will-change: transform, opacity;
            }
            .reveal.is-visible {
                @apply opacity-100 translate-y-0 scale-100;
            }
        }
    .container-full { @apply w-full px-[20px]; }

    /* Typography System */
    .text-display-hero { @apply font-heading font-bold text-[3.25rem] md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight; }
    .text-display-huge { @apply font-heading font-bold text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.9] tracking-tighter; }
    .text-stat { @apply font-heading font-bold text-[3.5rem] md:text-6xl lg:text-7xl tracking-tighter; }
    
    .text-h1 { @apply font-heading font-bold text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] leading-[1.05] tracking-tight; }
    .text-h2 { @apply font-heading font-bold text-5xl md:text-6xl lg:text-[4rem] tracking-tight leading-[1.05]; }
    .text-h3 { @apply font-heading font-bold text-2xl md:text-3xl leading-snug; }
    .text-h4 { @apply font-heading font-bold text-lg md:text-xl leading-snug; }

    .text-body-lg { @apply font-sans font-medium text-[17px] md:text-lg leading-relaxed; }
    .text-body { @apply font-sans font-medium text-base leading-relaxed; }
    .text-body-sm { @apply font-sans font-medium text-sm md:text-[15px] leading-relaxed; }

    .text-label { @apply font-heading font-medium text-[10px] md:text-xs uppercase tracking-widest; }
    
    .pill-eyebrow { @apply text-label inline-flex items-center bg-brand text-white py-1.5 rounded-full mb-4 shadow-sm overflow-hidden relative whitespace-nowrap; }

    /* Button System (Cleanora Style) */
    
        .link-animated {
            @apply relative inline-block transition-colors duration-300;
        }
        .link-animated::after {
            content: '';
            @apply absolute left-0 -bottom-0.5 w-0 h-[1px] bg-brand transition-all duration-300 ease-out-expo;
        }
        .link-animated:hover::after {
            @apply w-full;
        }

    .btn-primary { @apply inline-flex items-center gap-4 bg-brand text-white font-heading font-bold text-base pl-6 pr-[6px] py-[6px] rounded-full transition-all hover:brightness-110 hover:shadow-bubbly; }
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

    /* Custom Form Elements */
    .form-checkbox {
        @apply appearance-none w-5 h-5 rounded-[4px] border border-gray-200 bg-gray-50 transition-all cursor-pointer relative shrink-0;
    }
    .form-checkbox:checked {
        @apply bg-brand border-brand;
    }
    .form-checkbox:checked::after {
        content: '';
        @apply absolute w-1.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 left-[6px] top-[2px];
    }
    
    .form-radio {
        @apply appearance-none w-5 h-5 rounded-full border border-gray-200 bg-gray-50 transition-all cursor-pointer relative shrink-0;
    }
    .form-radio:checked {
        @apply bg-brand border-brand;
    }
    .form-radio:checked::after {
        content: '';
        @apply absolute w-2 h-2 rounded-full bg-white left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2;
    }
    .form-checkbox:focus:not(:checked), .form-radio:focus:not(:checked) {
        @apply outline-none border-brand bg-white;
    }
}

html { scroll-behavior: smooth; }
body { background-color: #F8F9FB; overflow-x: hidden; }


/* Global Letter Spacing Overrides */
h1, h2, h3, h4, h5, h6, .font-heading {
    letter-spacing: -0.03em !important;
    font-weight: 700 !important;
}
.uppercase {
    letter-spacing: 0.06em !important;
}

/* Komponent FAQ */
.faq-content { max-height: 0; overflow: hidden; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0; }
.faq-content.open { max-height: 400px; opacity: 1; padding-top: 1rem; }

/* Komponent Services Accordion */
.service-content { max-height: 0; overflow: hidden; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0; }
.service-content.open { max-height: 1000px; opacity: 1; padding-top: 1rem; }

/* Custom Gradient */
.text-gradient { background: linear-gradient(135deg, #1F69F6 0%, #6E9EEC 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

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

@keyframes marquee-fast { 0% { transform: translateX(0); } 100% { transform: translateX(-33.3333%); } }
.animate-marquee-fast { display: flex; align-items: center; white-space: nowrap; width: max-content; animation: marquee-fast 15s linear infinite; }

`;

// Wstrzykiwanie stylów, by uniknąć problemów z ładowaniem pliku .css lokalnie z dyrektywami @apply
const styleEl = document.createElement('style');
styleEl.type = 'text/tailwindcss';
styleEl.innerHTML = twStyles;
document.head.appendChild(styleEl);
