// ===== ATTENTE CHARGEMENT DOM =====
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initSmoothScroll();
    initScrollSpy();
    initScrollAnimations();
});

// ===== NAVIGATION (Menu mobile & scroll) =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Gestion du scroll pour la navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Menu mobile toggle
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Fermer le menu mobile quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
}

// ===== SCROLL FLUIDE =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Mise à jour URL sans saut
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });
}

// ===== SCROLL SPY (Navigation active) =====
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Offset pour déclencher plus tôt

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initialisation
}

// ===== ANIMATIONS AU SCROLL (Intersection Observer) =====
function initScrollAnimations() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .about-text, .contact-info-card, .availability-card-full');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Ne réanime pas après
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// ===== GESTION DES PERFORMANCES =====
// Lazy loading des images (si vous ajoutez des images plus tard)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

// ===== CONSOLE MESSAGE (pro) =====
console.log(
    '%c🔒 Erwan Cadorel - Portfolio Cybersécurité',
    'font-size: 16px; font-weight: bold; color: #2dd4bf;'
);
console.log(
    '%c📅 Disponible stage juin 2026 | Alternance 4 ans',
    'font-size: 14px; color: #a0a8b4;'
);
console.log(
    '%c📧 Email: Erwan.cadorel@edu.ecole-89.com',
    'font-size: 12px; color: #6c7a8c;'
);
