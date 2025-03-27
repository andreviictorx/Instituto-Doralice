// Smooth scroll functionality
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function() {
    const botaoOpen = document.getElementById('btn-abrir');
    const botaoClosed = document.getElementById('btn-fechar');
    const overlay = document.getElementById('overlay-menu');

    function openMenu() {
        botaoClosed.classList.add('menu-open');
    }

    function closeMenu() {
        botaoClosed.classList.remove('menu-open');
    }

    botaoOpen.addEventListener('click', openMenu);
    botaoClosed.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
});




