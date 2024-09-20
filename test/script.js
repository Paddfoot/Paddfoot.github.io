document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');

    menuToggle.addEventListener('click', () => {
        if (mainMenu.classList.contains('menu-hidden')) {
            mainMenu.classList.remove('menu-hidden');
            mainMenu.classList.add('menu-visible');
        } else {
            mainMenu.classList.remove('menu-visible');
            mainMenu.classList.add('menu-hidden');
        }
    });
});
