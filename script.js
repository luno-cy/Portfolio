// script.js - Minimal, juste l'essentiel

// Défilement fluide pour la navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation active au défilement
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#0066cc';
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Animation légère au défilement (optionnel)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.projet-carte, .competence-groupe, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    observer.observe(el);
});

// Console log - pro
console.log('Erwan Cadorel - Portfolio Cybersécurité');
console.log('Disponible stage juin 2026');
