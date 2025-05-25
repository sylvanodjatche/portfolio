document.addEventListener('DOMContentLoaded', function() {
    const profileImageContainer = document.querySelector('.profile-image-container');
    const profileImage = document.querySelector('.profile-image');

    if (profileImageContainer && profileImage) {
        profileImageContainer.addEventListener('mouseenter', () => {
            profileImage.classList.add('moving-image');
        });

        profileImageContainer.addEventListener('mouseleave', () => {
            profileImage.classList.remove('moving-image');
        });
    }

    // Effet de survol sur les liens de la navbar
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)'; // Léger décalage vers le haut
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Effet de survol pour les cartes de projets (si tu veux un effet JS en plus du CSS)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.18)'; // Ombre plus prononcée
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'; // Revenir à l'ombre normale
        });
    });

    // Optionnel: Défilement actif sur la navbar
    // Permet d'indiquer la section active dans la navbar
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) { // Ajustez le '-100' si nécessaire
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });
});