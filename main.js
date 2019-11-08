const menuIcon = document.querySelector('.hamburger-menu');

const navbar = document.querySelector('.navBar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})