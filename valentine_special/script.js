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

        const container = document.querySelector('.buttons-container');
        const containerRect = container.getBoundingClientRect();
        const yesRect = yesBtn.getBoundingClientRect();

        // Calculate YES button position relative to the container
        const yesLeft = yesRect.left - containerRect.left;
        const yesTop = yesRect.top - containerRect.top;

        // Define range around the YES button (~40px which is roughly 1cm)
        const range = 40;

        let randomX, randomY;
        let valid = false;
        let attempts = 0;

        // Container bounds
        const maxX = containerRect.width - noBtn.offsetWidth;
        const maxY = containerRect.height - noBtn.offsetHeight;

        while (!valid && attempts < 30) {
            // Generate random offset from Yes button center
            const offsetX = (Math.random() - 0.5) * range * 4; // spread out a bit horizontally
            const offsetY = (Math.random() - 0.5) * range * 3; // spread out vertically

            randomX = yesLeft + (yesRect.width / 2) + offsetX - (noBtn.offsetWidth / 2);
            randomY = yesTop + (yesRect.height / 2) + offsetY - (noBtn.offsetHeight / 2);

            // 1. Clamp to container edges
            randomX = Math.max(0, Math.min(randomX, maxX));
            randomY = Math.max(0, Math.min(randomY, maxY));

            // 2. Check overlap with YES button
            // Current proposed No Button Rect relative to container
            const noRight = randomX + noBtn.offsetWidth;
            const noBottom = randomY + noBtn.offsetHeight;
            const buffer = 10;

            // YES button rect relative to container
            const yesRight = yesLeft + yesRect.width;
            const yesBottom = yesTop + yesRect.height;

            const overlap = !(
                noRight < yesLeft - buffer ||
                randomX > yesRight + buffer ||
                noBottom < yesTop - buffer ||
                randomY > yesBottom + buffer
            );

            if (!overlap) {
                valid = true;
            }
            attempts++;
        }

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;

        // Increase YES button size with limits
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        if (currentSize < 100) { // Limit max size so it doesn't break layout completely
            yesBtn.style.fontSize = `${currentSize + 2}px`;
            yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 1}px ${parseFloat(window.getComputedStyle(yesBtn).paddingRight) + 2}px`;
        }

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

        // Tooltip follows the button
        tooltip.style.left = `${containerRect.left + randomX}px`;
        tooltip.style.top = `${containerRect.top + randomY - 35}px`;
        tooltip.style.opacity = '1';

        setTimeout(() => {
            tooltip.style.opacity = '0';
        }, 1000);
    };

    noBtn.addEventListener('mouseover', moveNoBtn);
    noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoBtn(); }); // For mobile
    noBtn.addEventListener('click', (e) => { e.preventDefault(); moveNoBtn(); });

    const typeWriter = (elementId, text, speed = 50, callback) => {
        const element = document.getElementById(elementId);
        element.innerHTML = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                if (callback) callback();
            }
        }
        type();
    };

    // "YES" Button Logic
    yesBtn.addEventListener('click', () => {

        // Heart Confetti Explosion
        const defaults = {
            spread: 360,
            ticks: 100,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ['heart'],
            colors: ['#FFC0CB', '#FF69B4', '#FF1493', '#C71585']
        };

        confetti({
            ...defaults,
            particleCount: 50,
            scalar: 2
        });

        confetti({
            ...defaults,
            particleCount: 25,
            scalar: 3,
            shapes: ['circle']
        });

        confetti({
            ...defaults,
            particleCount: 25,
            scalar: 4,
            shapes: ['circle'] // mixing circles for variety
        });

        // Hide Proposal, Show Success
        proposalScreen.classList.remove('active');
        proposalScreen.classList.add('hidden');

        setTimeout(() => {
            proposalScreen.style.display = 'none';
            successScreen.classList.remove('hidden');
            successScreen.classList.add('active');

            // Change background
            document.body.style.background = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)";

            // Second part reveal with Typing Animation
            setTimeout(() => {
                loveText1.classList.add('hidden');
                finalMessage.classList.remove('hidden');

                // Start Typing Effect Sequence
                typeWriter('typingText1', "I promise to make you smile every single day.", 50, () => {
                    typeWriter('typingText2', "You are my Favorite Person. Forever. 💖✨", 50, () => {
                        // Add glow effect class after typing
                        document.getElementById('typingText2').classList.add('slow-glow');

                        setTimeout(() => {
                            typeWriter('typingText3', "Happy Valentine’s Day, My Rashmi 🌹💘", 70, () => {
                                // Show wish section after typing is done
                                const wishSection = document.getElementById('wishSection');
                                if (wishSection) {
                                    wishSection.style.opacity = '1';
                                    wishSection.style.animation = 'fadeIn 1s ease forwards';
                                }

                                // Final Confetti
                                confetti({
                                    particleCount: 200,
                                    spread: 100,
                                    origin: { y: 0.6 },
                                    shapes: ['heart'],
                                    colors: ['#FFC0CB', '#FF69B4', '#FF1493']
                                });
                            });
                        }, 500);
                    });
                });

            }, 4000);

        }, 500);
    });

    // Wish Button Logic
    const sendWishBtn = document.getElementById('sendWishBtn');
    const wishInput = document.getElementById('wishInput');
    const wishSuccess = document.getElementById('wishSuccess');

    if (sendWishBtn && wishInput && wishSuccess) {
        sendWishBtn.addEventListener('click', () => {
            const message = wishInput.value.trim();
            if (message !== "") {
                // Construct WhatsApp Link
                // Using the specific phone number provided: 9608710567
                const phoneNumber = "919608710567";
                const encodedMessage = encodeURIComponent(`Hey Ravi! 💖 ${message}`);
                const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                // Open WhatsApp
                window.open(waLink, '_blank');

                wishSuccess.classList.remove('hidden');
                wishInput.value = ""; // Clear input

                // Optional: simulate server delay
                setTimeout(() => {
                    wishSuccess.style.opacity = '0'; // Fade out eventually
                    setTimeout(() => {
                        wishSuccess.classList.add('hidden');
                        wishSuccess.style.opacity = '1';
                    }, 500);
                }, 3000);
            } else {
                alert("Write something sweet first! 😜");
            }
        });
    }

});
