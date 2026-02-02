// Global variables for navigation
let currentStep = 1;
const totalSteps = 6; // Includes success screen

function nextStep(stepNumber) {
    // Hide current step
    const currentScreen = document.querySelector('.screen.active');
    currentScreen.classList.remove('active');
    currentScreen.classList.add('hidden');

    // Show next step with delay
    setTimeout(() => {
        currentScreen.style.display = 'none'; // Ensure it's removed from flow

        const nextScreen = document.getElementById(stepNumber === 5 ? 'proposalScreen' : `step${stepNumber}`);
        if (stepNumber === 6) {
            // Handle success logic separately inside Yes button click
            return;
        }

        // Logic to allow display:flex to work with animation
        nextScreen.classList.remove('hidden');
        nextScreen.classList.add('active');

        // Attempt to play music on first interaction (User clicks "What is it?")
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic.paused && stepNumber === 2) {
            bgMusic.volume = 0.5;
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
        }

    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const proposalScreen = document.getElementById('proposalScreen');
    const successScreen = document.getElementById('successScreen');
    const escapePopup = document.getElementById('escapePopup');
    const finalMessage = document.getElementById('finalMessage');
    const loveText1 = document.querySelector('.love-text-1');

    let noClickCount = 0;
    const tooltips = [
        "Are you sure? 🥺",
        "Think again Rashmi 😏",
        "Last chance!",
        "Love is calling 💌",
        "Don't be shy! 🙈"
    ];

    // "NO" Button Logic (Escape & Tooltips)
    const moveNoBtn = () => {
        // Increment attempts
        noClickCount++;

        // Make it absolute if it isn't yet (to move freely)
        if (noBtn.style.position !== 'absolute') {
            noBtn.style.position = 'absolute';
        }

        // Calculate random position within viewport
        // Keep it safe from edges
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        const randomX = Math.max(20, Math.random() * maxX);
        const randomY = Math.max(20, Math.random() * maxY);

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;

        // Increase YES button size
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = `${currentSize + 2}px`;
        yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 2}px ${parseFloat(window.getComputedStyle(yesBtn).paddingRight) + 5}px`;

        // Show Popup after 5 attempts
        if (noClickCount === 5) {
            escapePopup.classList.remove('hidden');
        }

        // Create random tooltip
        const randomTooltip = tooltips[Math.floor(Math.random() * tooltips.length)];

        let tooltip = document.getElementById('customTooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'customTooltip';
            tooltip.className = 'tooltip';
            tooltip.style.position = 'absolute';
            tooltip.style.background = '#333';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.fontSize = '0.8rem';
            tooltip.style.pointerEvents = 'none';
            tooltip.style.zIndex = '1000';
            document.body.appendChild(tooltip);
        }
        tooltip.innerText = randomTooltip;
        tooltip.style.left = `${randomX}px`;
        tooltip.style.top = `${randomY - 30}px`;
        tooltip.style.opacity = '1';

        setTimeout(() => {
            tooltip.style.opacity = '0';
        }, 1000);
    };

    noBtn.addEventListener('mouseover', moveNoBtn);
    noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoBtn(); }); // For mobile
    noBtn.addEventListener('click', (e) => { e.preventDefault(); moveNoBtn(); });

    // "YES" Button Logic
    yesBtn.addEventListener('click', () => {
        // Confetti Explosion
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff3366', '#ff85a2', '#ffffff']
        });

        // More confetti from sides
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff3366', '#ff85a2']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff3366', '#ff85a2']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Hide Proposal, Show Success
        proposalScreen.classList.remove('active');
        proposalScreen.classList.add('hidden');

        setTimeout(() => {
            proposalScreen.style.display = 'none';
            successScreen.classList.remove('hidden');
            successScreen.classList.add('active');

            // Change background
            document.body.style.background = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)";

            // Second part reveal
            setTimeout(() => {
                loveText1.classList.add('hidden');

                finalMessage.classList.remove('hidden');
                finalMessage.style.animation = "fadeIn 2s ease";

                // More confetti for final moment
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.6 }
                });

            }, 4000); // 4 seconds delay for reading

        }, 500);
    });

});
