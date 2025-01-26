document.addEventListener('DOMContentLoaded', () => {
    // Gestion de la barre de progression
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Gestion du bouton retour en haut
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animation des sections au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    });

    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Fermer le menu mobile lors du clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Smooth scroll pour tous les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Fermer le menu mobile si ouvert
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    // Préchargement des images d'arrière-plan
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const bgImg = window.getComputedStyle(section).backgroundImage;
        if (bgImg && bgImg !== 'none') {
            const img = new Image();
            img.src = bgImg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            img.onload = () => {
                section.classList.add('loaded');
            };
        }
    });

    // Gestion du carrousel de témoignages
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Création des points de navigation
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = index;
        if (currentIndex < 0) currentIndex = testimonials.length - 1;
        if (currentIndex >= testimonials.length) currentIndex = 0;
        testimonials[currentIndex].classList.add('active');
        updateDots();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Auto-rotation du carrousel
    setInterval(() => goToSlide(currentIndex + 1), 5000);

    // Gestion de la galerie
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Images de la galerie (à remplacer par vos images)
    const galleryImages = [
        { src: 'path-to-image1.jpg', category: 'courts', alt: 'Coupe courte' },
        { src: 'path-to-image2.jpg', category: 'longs', alt: 'Coupe longue' },
        { src: 'path-to-image3.jpg', category: 'accessoires', alt: 'Accessoire' }
    ];

    // Création des éléments de la galerie
    function createGalleryItems(images) {
        galleryGrid.innerHTML = '';
        images.forEach(img => {
            const item = document.createElement('div');
            item.className = 'gallery-item fade-in';
            item.dataset.category = img.category;
            item.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            galleryGrid.appendChild(item);
        });
    }

    // Filtrage de la galerie
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.filter;
            const filteredImages = category === 'all' 
                ? galleryImages 
                : galleryImages.filter(img => img.category === category);
            
            createGalleryItems(filteredImages);
        });
    });

    // Initialisation de la galerie
    createGalleryItems(galleryImages);

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Simulation d'envoi (à remplacer par votre logique d'envoi)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Affichage du message de confirmation
        showToast('Message envoyé avec succès !');
        
        // Réinitialisation du formulaire
        contactForm.reset();
        submitBtn.innerHTML = 'Envoyer le message <i class="fas fa-paper-plane"></i>';
    });

    // Fonction pour afficher un toast
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast fade-in';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // Animation de la navbar au scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(253, 251, 248, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.background = 'rgba(253, 251, 248, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Style pour le toast de confirmation
    const style = document.createElement('style');
    style.textContent = `
        .toast {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--secondary-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            animation: slideUp 0.3s ease, slideDown 0.3s ease 2.7s;
            z-index: 1000;
        }

        @keyframes slideUp {
            from {
                transform: translate(-50%, 100%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }

        @keyframes slideDown {
            from {
                transform: translate(-50%, 0);
                opacity: 1;
            }
            to {
                transform: translate(-50%, 100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}); 