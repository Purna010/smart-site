document.addEventListener('DOMContentLoaded', () => {
    console.log('Smart Site loaded successfully!');

    // Smooth scroll effect for 'View Demo' button
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#demo-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Simulate Hazard Alert
    const alertButton = document.getElementById('trigger-alert');
    const status = document.getElementById('status');

    alertButton.addEventListener('click', () => {
        status.textContent = '🚨 Hazard Detected!';
        status.style.color = '#e74c3c';
        status.style.animation = 'flash 0.5s infinite alternate';

        // Bounce effect on button
        alertButton.style.animation = 'bounce 0.5s';

        // Sound Alert
        const alertSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
        alertSound.play();

        setTimeout(() => {
            status.textContent = '✅ Monitoring...';
            status.style.color = '#27ae60';
            status.style.animation = 'none';
            alertButton.style.animation = 'none';
        }, 3000);
    });
});

// Bounce animation for alert button
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
