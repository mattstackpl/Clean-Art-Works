document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animujemy tylko raz podczas pierwszego wjazdu
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Wyzwalacz działa lekko przed wejściem elementu
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});