document.addEventListener('DOMContentLoaded', () => {

    // Animação de fade-in para as seções ao rolar a página
    const sections = document.querySelectorAll('section');

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight * 0.8) { // Quando 80% da seção estiver visível
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    };

    

    // Aplica estilos iniciais para a animação
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Chama no carregamento para elementos já visíveis

    // Interação de hover para os itens da galeria
    const galleryItems = document.querySelectorAll('.galeria-lista');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.03)';
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animação sutil para os links de navegação
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ffcc00'; // Uma cor de destaque ao passar o mouse
            link.style.textShadow = '0 0 5px rgba(255, 204, 0, 0.5)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = 'white';
            link.style.textShadow = 'none';
        });
    });

    // Efeito de "digitação" no título principal
    const mainTitle = document.querySelector('header h1');
    const originalText = mainTitle.textContent;
    mainTitle.textContent = ''; // Limpa o texto original
    let i = 0;

    const typeWriter = () => {
        if (i < originalText.length) {
            mainTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 80); // Velocidade da digitação
        }
    };

    typeWriter(); // Inicia o efeito de digitação

    // Animação para os ícones de habilidades
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

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adiciona a classe após rolar 50px
                navBar.classList.add('scrolled');
            } else {
                navBar.classList.remove('scrolled');
            }
        });

                // Animação de entrada para a imagem da seção "Sobre"
        const sobreImage = document.querySelector('.sobre-conteudo img');

        const observerImage = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sobreImage.classList.add('show');
                    observerImage.unobserve(sobreImage); // Para animar apenas uma vez
                }
            });
        }, { threshold: 0.5 }); // Aciona quando 50% da imagem está visível

        if (sobreImage) {
            observerImage.observe(sobreImage);
        }
    

});