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

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0.20,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target); //makes it so that the observer stops observing once the function has been executed once.
        }
        
    });
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})