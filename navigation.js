const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navBar');
const navItems = document.querySelectorAll('.nav-item');
const languagePicker = document.querySelector('.languagePicker');
const dropDownMenu = document.querySelector('.dropDown');
const startLink = document.querySelector('.start');




// makes the nav bar dissappear when clicking on a navigation link
navItems.forEach((navItem) => {

    navItem.addEventListener('click', () => {

            navBar.classList.toggle('change')

    })
})
// add the class of 'change" to the navbar when clicking on hamburger menu, makeing the navigation links appear
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
})

languagePicker.addEventListener('click', () => {
    dropDownMenu.classList.toggle('change');
})


// scrolls to position of div "container" on click

startLink.addEventListener('click', (event) => {
    setTimeout(function scrollToStartPosition() {
        container.scrollIntoView({ behavior: 'smooth' });
    }, 500)
})




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
