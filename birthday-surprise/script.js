// Main Content Reveal
window.addEventListener('load', () => {
    // Simulate loading for effect
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('main-content').classList.add('visible');
                playMusic(); // Auto-play attempt
            }, 100);
        }, 1000);
    }, 2000);
});

function playMusic() {
    const music = document.getElementById('bg-music');
    // Most browsers block auto-play without interaction, so we try:
    music.play().catch(error => {
        console.log("Autoplay blocked, waiting for interaction.");
    });
}

// Start Button (Extra interaction to ensure music plays)
document.getElementById('start-btn').addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    }
    // Scroll to next section
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    launchConfetti();
});

// Card Flip Interaction
const card = document.querySelector('.card');
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

// Cake Interaction State
let isCandleBlown = false;

document.getElementById('cut-cake-btn').addEventListener('click', function () {
    this.innerText = "Tap the Candle to Blow it Out! 🕯️💨";
    this.style.background = "#FF9F43";
    this.style.pointerEvents = "none"; // disable button

    // Show Cake
    const cake = document.getElementById('cake');
    cake.classList.remove('hidden-cake');
    cake.classList.add('cake-visible');
});

// Candle Interaction
const candle = document.querySelector('.candle');
const flame = document.querySelector('.flame');

candle.addEventListener('click', () => {
    if (!isCandleBlown) {
        // Blow out candle
        flame.style.animation = 'none'; // stop flickering
        flame.style.opacity = '0';
        flame.style.transform = 'skewX(10deg) scaleY(0.5)';

        // Change button text
        const btn = document.getElementById('cut-cake-btn');
        btn.innerText = "Now Tap the Cake to Cut it! 🔪🎂";
        btn.style.background = "#ff4081";
        btn.classList.add('pulse-btn');

        isCandleBlown = true;
    }
});

// Cake Cut Interaction
document.getElementById('cake').addEventListener('click', () => {
    if (isCandleBlown) {
        // Cut the cake (visual effect)
        document.getElementById('cake').classList.add('cut-animation');

        // Hide button
        document.getElementById('cut-cake-btn').style.opacity = '0';

        // Celebration
        launchConfetti(5000); // Run for 5 seconds

        // Show Message
        setTimeout(() => {
            const msg = document.getElementById('wish-message');
            msg.innerHTML = "<h3>✨ May all your wishes come true, Upasana! ✨</h3><p>Enjoy your special day!</p>";
            msg.classList.remove('hidden-message');
            msg.classList.add('show-message');
        }, 1000);
    }
});

/* --- Optimized Confetti Logic --- */
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let particles = [];
const colors = ['#ffd700', '#ff4081', '#74b9ff', '#ffffff', '#00e676'];
let animationId = null;

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height; // Start above screen
        this.rotation = Math.random() * 360;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedRotation = Math.random() * 2 - 1;
        this.opacity = 1;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.speedRotation;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, width, height);

    // Filter out particles that have fallen off screen
    particles = particles.filter(p => p.y < height + 20);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    if (particles.length > 0) {
        animationId = requestAnimationFrame(animateConfetti);
    } else {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}

function launchConfetti(duration = 3000) {
    // Burst generation
    const end = Date.now() + duration;

    (function frame() {
        // Add new particles only if within duration
        if (Date.now() < end) {
            for (let i = 0; i < 5; i++) { // Add 5 particles per frame
                particles.push(new Particle());
            }
            if (!animationId) animateConfetti();
            requestAnimationFrame(frame);
        }
    }());
}

// Resize handler
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

