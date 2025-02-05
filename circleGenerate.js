function createCircle() {
    const background = document.getElementById('background');
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random positions

   /*
    x = Math.floor(Math.random() * 80 + 20);
    y = Math.floor(Math.random() * 80 + 20);

    bubble.style.left = `${x}%`;
    bubble.style.top = `${y}%`;
*/
    

    const x = Math.random() * (background.clientWidth - bubble.clientWidth);
    const y = Math.random() * (background.clientHeight - bubble.clientHeight);

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    background.appendChild(bubble);
}

// Create multiple circles
for (let i = 0; i < 10; i++) {
    createCircle();
}