const menuIcon = document.querySelector('.hamburger-menu');

const navbar = document.querySelector('.navBar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

// scrolls to position of div "container" on click
function scrollToStartPosition() {
    const elmnt = document.querySelector('#container');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

function scrollToSlideshowPosition() {
    const elmnt = document.querySelector('#slideShow');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

// scrolls to position of div "stats" on click
function scrollToStatsPosition() {
    const elmnt = document.querySelector('#stats');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

function scrollToSeasonsPosition() {
    const elmnt = document.querySelector('#seasons');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

// scrolls to position of div "merch" on click
function scrollToMerchPosition() {
    const elmnt = document.querySelector('#merch');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 
// scrolls to position of div "contact" on click
function scrollToContactPosition() {
    const elmnt = document.querySelector('#contact');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 