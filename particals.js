document.addEventListener('DOMContentLoaded', () => {
    const createParticles = () => {
        const numParticles = 100;
        const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']; // Rainbow colors

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.style.top = '100vh';
            }, 0);
        }
    };

    createParticles();
});
