document.addEventListener('DOMContentLoaded', () => {
    const birthday = new Date('June 28, 2025 00:00:00').getTime(); // Set Avika's birthday to June 28, 2025
    const countdownElement = document.getElementById('countdown');
    const birthdayMessageElement = document.getElementById('birthday-message');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = birthday - now;

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            // Birthday has passed or it's today!
            clearInterval(countdownInterval);
            countdownElement.innerHTML = ''; // Clear countdown
            birthdayMessageElement.classList.remove('hidden');
            birthdayMessageElement.classList.add('show');
            birthdayMessageElement.textContent = "Happy Birthday, Avika! We love you! 🎉🎂";
            // Trigger confetti or other celebration effects here
            triggerConfetti();
        } else {
            // Update countdown display
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }
    }

    // Initial call to set up countdown
    updateCountdown();

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // --- Confetti Effect (Simple Example) ---
    function triggerConfetti() {
        // This is a very basic confetti. For a more robust one, consider a library.
        const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#C70039', '#FFC300', '#DAF7A6'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);

            // Remove confetti after animation to prevent DOM bloat
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    // Add CSS for confetti in style.css
    // .confetti {
    //     position: fixed;
    //     width: 10px;
    //     height: 10px;
    //     border-radius: 50%;
    //     opacity: 0;
    //     animation: fall linear forwards;
    //     z-index: 9999;
    // }

    // @keyframes fall {
    //     0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    //     100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    // }
});