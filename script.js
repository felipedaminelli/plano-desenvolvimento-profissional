document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Animação de scroll para todos os elementos marcados
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Para de observar o elemento depois que ele já foi animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Efeito de gradiente que segue o mouse
    const gradientBackground = document.querySelector('.mouse-gradient-background');
    window.addEventListener('mousemove', e => {
        const { clientX, clientY } = e;
        gradientBackground.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(139, 92, 246, 0.15), transparent 80%)`;
    });
});