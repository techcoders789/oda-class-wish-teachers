document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 100; // Number of particles

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration
        particle.style.width = Math.random() * 10 + 5 + 'px'; // Random size
        particle.style.height = particle.style.width; // Ensure height matches width
        particlesContainer.appendChild(particle);
    }

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
});
