document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.classList.add('hidden-section');
    });

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight * 0.8) {
                section.classList.remove('hidden-section');
                section.classList.add('show-section');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();

    const mainTitle = document.querySelector('header h1');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;

        const typeWriter = () => {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        };
        typeWriter();
    }

    const skillIcons = document.querySelectorAll('.habilidade-lista ul li i');
    skillIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ], {
                duration: 500,
                iterations: 1,
                easing: 'ease-in-out'
            });
        });
    });

    const navBar = document.querySelector('nav');
    if (navBar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navBar.classList.add('scrolled');
            } else {
                navBar.classList.remove('scrolled');
            }
        });
    }

    const sobreImage = document.querySelector('.sobre-conteudo img');
    if (sobreImage) {
        const observerImage = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sobreImage.classList.add('show-image-animation');
                    observerImage.unobserve(sobreImage);
                }
            });
        }, { threshold: 0.5 });

        observerImage.observe(sobreImage);
    }
});