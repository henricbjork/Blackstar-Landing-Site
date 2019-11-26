const menuIcon = document.querySelector('.hamburgerMenu');
const navBar = document.querySelector('.navBar');
const navItems = document.querySelectorAll('.navItem');
const languagePicker = document.querySelector('.languagePicker');
const dropDownMenu = document.querySelector('.dropDown');
const startLink = document.querySelector('.start');
const slidesLink = document.querySelector('.inspiration');
const specsLink = document.querySelector('.specifications');
const merchLink = document.querySelector('.merchandise');
const signUpLink = document.querySelector('.signup');

// makes the nav bar dissappear when clicking on a nav link
navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
            navBar.classList.toggle('change')
    })
})
// add the class of 'change" to the navbar when clicking on hamburger menu, making the navigation links appear
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
})

//toggles the language picker menu
languagePicker.addEventListener('click', () => {
    dropDownMenu.classList.toggle('change');
})

// scrolls to start page when clicking on "Start" in navigation
startLink.addEventListener('click', (event) => {
    setTimeout(function scrollToStartPosition() {
        container.scrollIntoView({ behavior: 'smooth' });
    }, 500)
})
// scrolls to slides page when clicking on "Slides" in navigation
slidesLink.addEventListener('click', (event) => {
    setTimeout(function scrollToStartPosition() {
        slideShow.scrollIntoView({ behavior: 'smooth' });
    }, 500)
})
// scrolls to stats page when clicking on "Stats" in navigation
specsLink.addEventListener('click', (event) => {
    setTimeout(function scrollToStartPosition() {
        stats.scrollIntoView({ behavior: 'smooth' });
    }, 500)
})
// scrolls to merch page when clicking on "Merch" in navigation
merchLink.addEventListener('click', (event) => {
    setTimeout(function scrollToStartPosition() {
        merch.scrollIntoView({ behavior: 'smooth' });
    }, 500)
})
// scrolls to newsletter page when clicking on "Sign up" in navigation
signUpLink.addEventListener('click', (event) => {
    setTimeout(function scrollToStartPosition() {
        contact.scrollIntoView({ behavior: 'smooth' });
    }, 500)
})