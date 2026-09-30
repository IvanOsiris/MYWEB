/* ==========================================================================
   LÓGICA JAVASCRIPT PERSONALIZADA - PORTAFOLIO IVÁN OLGUÍN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Control del Menú Desplegable en Celulares
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        // Abrir y cerrar menú al presionar el botón de tres barras
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar menú automáticamente cuando el usuario toca una opción
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Desplazamiento Suave (Smooth Scroll) entre Secciones
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});