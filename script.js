document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    let cartCount = 0;

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.querySelector('.slider-dots');
        let currentSlide = 0;

        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function prevSlide() {
            goToSlide(currentSlide - 1);
        }

        const nextBtn = document.querySelector('.slider-btn.next');
        const prevBtn = document.querySelector('.slider-btn.prev');
        
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        setInterval(nextSlide, 5000);
    }

    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    function checkScroll() {
        scrollRevealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.getAttribute('data-product');
            
            cartCount++;
            const cartCountElement = document.querySelector('.cart-count');
            if (cartCountElement) {
                cartCountElement.textContent = cartCount;
                
                cartCountElement.style.animation = 'none';
                setTimeout(() => {
                    cartCountElement.style.animation = 'bounceIn 0.5s ease';
                }, 10);
            }

            const cartIcon = document.querySelector('.cart-icon');
            if (cartIcon) {
                cartIcon.style.animation = 'none';
                setTimeout(() => {
                    cartIcon.style.animation = 'pulse 0.5s ease';
                }, 10);
            }

            showNotification(`${productName} ajouté à votre sélection`);
        });
    });

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #c9a961, #b8954d);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
            font-family: 'Poppins', sans-serif;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    const orderForm = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (orderForm && confirmationMessage) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formInputs = orderForm.querySelectorAll('input, select, textarea');
            let isValid = true;

            formInputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    setTimeout(() => {
                        input.style.borderColor = '';
                    }, 2000);
                }
            });

            if (isValid) {
                orderForm.style.display = 'none';
                confirmationMessage.style.display = 'block';

                setTimeout(() => {
                    window.scrollTo({
                        top: confirmationMessage.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }, 100);
            } else {
                showNotification('Veuillez remplir tous les champs obligatoires');
            }
        });
    }

    window.resetForm = function() {
        if (orderForm && confirmationMessage) {
            orderForm.reset();
            orderForm.style.display = 'block';
            confirmationMessage.style.display = 'none';
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(targetTab + 'Form').classList.add('active');
        });
    });

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        const form = loginForm.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                showNotification('Fonctionnalité de démonstration - Connexion simulée');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            });
        }
    }

    if (registerForm) {
        const form = registerForm.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const password = document.getElementById('registerPassword').value;
                const confirmPassword = document.getElementById('registerConfirmPassword').value;

                if (password !== confirmPassword) {
                    showNotification('Les mots de passe ne correspondent pas');
                    return;
                }

                showNotification('Fonctionnalité de démonstration - Inscription simulée');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            });
        }
    }

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('input[type="file"]').forEach(input => {
        input.addEventListener('change', function() {
            const fileName = this.files[0]?.name;
            if (fileName) {
                showNotification(`Fichier sélectionné: ${fileName}`);
            }
        });
    });

    const parallaxSections = document.querySelectorAll('.hero-slider');
    window.addEventListener('scroll', function() {
        parallaxSections.forEach(section => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            section.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
    });

    function animateCards() {
        document.querySelectorAll('.product-card, .category-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const deltaX = (mouseX * 20);
                const deltaY = (mouseY * 20);
                card.style.transform = `perspective(1000px) rotateY(${deltaX * 0.05}deg) rotateX(${-deltaY * 0.05}deg)`;
            }
        });
        requestAnimationFrame(animateCards);
    }

    animateCards();

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.info-card, .category-card, .product-card').forEach(element => {
        observer.observe(element);
    });

    console.log('🌟 Royal Optique Médicale - Site web chargé avec succès!');
});
