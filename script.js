// Simple scroll effect for card roller duplicates for infinite look
const roller = document.getElementById('roller');
const cards = roller.innerHTML;
roller.innerHTML += cards; // Duplicate cards for seamless loop

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});