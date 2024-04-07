// --------- Home to About Scroll Arrow ---------

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const scrollDownArrow = document.querySelector(".arrow_down");
    
    function scrollDowntoAbout() {
        scrollDownArrow.addEventListener("click", function() {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    scrollDowntoAbout();
    
});
