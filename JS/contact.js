const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbarLinks = document.querySelectorAll('.nav-link');
const navbarTitle = document.querySelector('.nav-title');

// Escucha el clic en el botón de cambio de tema
themeToggleButton.addEventListener('click', () => {
    // Alternar una clase que cambia el tema
    body.classList.toggle('dark-theme');

    // Cambiar el color de los títulos del navbar
    navbarLinks.forEach(link => {
        link.classList.toggle('dark-navbar-link');
    });
    navbarTitle.classList.toggle('dark-navbar-title');
});
