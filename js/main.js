document.addEventListener('DOMContentLoaded', () => {
    console.log('Smart Site loaded successfully!');

    // Smooth scroll effect for 'Learn More' button
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#learn-more').scrollIntoView({ behavior: 'smooth' });
    });

    // Simulate Hazard Alert
    const alertButton = document.getElementById('trigger-alert');
    const status = document.getElementById('status');

    alertButton.addEventListener('click', () => {
        status.textContent = '🚨 Hazard Detected!';
        status.style.color = '#e74c3c';

        // Flashing effect
        status.style.animation = 'flash 0.5s infinite alternate';

        // Sound Alert
        const alertSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
        alertSound.play();

        setTimeout(() => {
            status.textContent = '✅ Monitoring...';
            status.style.color = '#27ae60';
            status.style.animation = 'none';
        }, 3000);
    });
});
