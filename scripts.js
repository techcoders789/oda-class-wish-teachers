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
function checkPassword() {
    const correctPassword = 'roshelmampic'; // Replace with your desired password
    const inputPassword = document.getElementById('password').value;
    const secretImage = document.getElementById('secretImage');
    const message = document.getElementById('message');

    if (inputPassword === correctPassword) {
        secretImage.style.display = 'block'; // Show the image
        message.textContent = 'Correct password! Image revealed.';
        message.style.color = 'green';
    } else {
        message.textContent = 'Incorrect password. Try again.';
        message.style.color = 'red';
    }
}
