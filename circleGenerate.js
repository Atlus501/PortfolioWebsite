function createCircle() {
    let background = document.getElementById('background');

    let bubble = document.createElement('div');

    bubble.className = "bubble";

    const x = Math.random() * (70)+15;
    const y = Math.random() * (80)+10;

    let duration = Math.random() * 6 + 2;
    let delay = Math.random() * 2.5 + 2.5;

    bubble.style.left = `${x}%`;
    bubble.style.top = `${y}%`;

    bubble.style.backgroundColor = 'rgba('+255*x*.01+', 0, '+255*y*.01+', 0.6)';

    bubble.style.animation = 'pop '+duration+'s '+delay+'s ease-out infinite';

    background.appendChild(bubble);
}

// Create multiple circles
for (let i = 0; i < 13; i++) {
    createCircle();
}