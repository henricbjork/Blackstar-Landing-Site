const sliders = document.querySelectorAll(".slideIn");


// tells the animation when to happen based on how far down the div the user has scrolled
const appearOptions = {
    threshold: 0.50,
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

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})