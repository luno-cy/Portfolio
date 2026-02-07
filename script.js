// script.js
// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile lorsqu'on clique sur un lien
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Animation de la section hero (terminal)
const terminalCursor = document.querySelector('.cursor');
const terminalLines = document.querySelectorAll('.terminal-line');

// Animation d'apparition des lignes du terminal
let lineIndex = 0;
const showTerminalLines = () => {
    if (lineIndex < terminalLines.length) {
        terminalLines[lineIndex].style.opacity = '1';
        terminalLines[lineIndex].style.transform = 'translateY(0)';
        lineIndex++;
        setTimeout(showTerminalLines, 300);
    } else {
        // Clignotement continu du curseur
        terminalCursor.style.animation = 'blink 1s infinite';
    }
};

// Initialiser l'opacité et la position des lignes
terminalLines.forEach(line => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(10px)';
    line.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Démarrer l'animation après le chargement
window.addEventListener('load', () => {
    setTimeout(showTerminalLines, 500);
});

// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.project-card, .skill-category, .certification-card, .availability-item').forEach(el => {
    observer.observe(el);
});

// Animation du curseur du terminal
let cursorVisible = true;
setInterval(() => {
    if (terminalCursor) {
        cursorVisible = !cursorVisible;
        terminalCursor.style.opacity = cursorVisible ? '1' : '0';
    }
}, 500);
