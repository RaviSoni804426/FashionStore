document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-indexed (1 is Feb)
    // const currentDate = today.getDate(); // Active for real-time 🕒

    // For testing: Uncomment this line to test different dates
    const currentDate = 15; // Set to 8 to unlock Rose Day 🔓 

    // Only activate logic if it's February (Month 1)
    if (currentMonth !== 1) {
        if (currentMonth > 1) {
            unlockAll();
            return;
        }
    }

    const cards = document.querySelectorAll('.day-card');
    const progressBar = document.getElementById('loveProgress'); // Get the progress bar
    let unlockedCount = 0;

    cards.forEach(card => {
        const cardDate = parseInt(card.getAttribute('data-date'));
        // Find the status indicator inside the card structure
        const indicator = card.querySelector('.status-indicator');

        // Check if the date has arrived
        if (currentDate >= cardDate) {
            unlockedCount++;

            // Unlocked
            card.classList.remove('locked');
            card.classList.add('unlocked');

            // Highlight today's card specially
            if (currentDate === cardDate) {
                card.classList.add('active-day');
                // Change indicator HTML to unlocked icon
                if (indicator) indicator.innerHTML = '<i class="fas fa-gift"></i> Open Now!';
            } else {
                if (indicator) indicator.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
            }

            // Allow clicking (href works by default)
        } else {
            // Locked
            card.classList.add('locked');
            if (indicator) indicator.innerHTML = '<i class="fas fa-lock"></i> Locked';

            // Disable link functionality
            card.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`Sabar ka phal meetha hota hai, Sarika! 😜\nWait until Feb ${cardDate} for this surprise! 💖`);
            });
        }
    });

    // Update Progress Bar
    if (progressBar && cards.length > 0) {
        const percentage = (unlockedCount / cards.length) * 100;
        // Small delay to show animation
        setTimeout(() => {
            progressBar.style.width = `${percentage}%`;
        }, 500);
    }

    function unlockAll() {
        const cards = document.querySelectorAll('.day-card');
        cards.forEach(card => {
            card.classList.remove('locked');
            card.classList.add('unlocked');
            const indicator = card.querySelector('.status-indicator');
            if (indicator) indicator.innerHTML = '<i class="fas fa-check-circle"></i> Unlocked';
        });
        const progressBar = document.getElementById('loveProgress');
        if (progressBar) progressBar.style.width = '100%';
    }
});
