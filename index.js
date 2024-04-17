/*--------- Show Menu------ */

const menu = document.querySelector(".nav_menu");
const toggle = document.querySelector(".nav_toggle");
const close = document.querySelector(".nav_close");

/* ---menu display --- */
if(toggle){
    toggle.addEventListener("click",()=>{
        menu.classList.add("show_menu");
        close.style.display = "block"; 
        close.style.color = "black";
    })
}
/* ----- hide menu ---- */
if(close){
close.addEventListener("click",() => {
    menu.classList.remove("show_menu");
    close.style.display = "none"; 
})
}
/* ----- Remove menu Mobile ---- */
const links = document.querySelectorAll(".item");

links.forEach (link => {
    link.addEventListener("click",() => {
        menu.classList.remove("show_menu"); 
        close.style.display = "none"; 
    })
})


// --------- Home to About Scroll Arrow Direct ---------//

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

//--------For Page Pop Up ----------//

const previewContainer = document.querySelector('.preview_container');
const insidePreview = document.querySelector(".inside_preview");
const body = document.querySelector("body");


const galleryImages = document.querySelectorAll('.thumbnail img');
galleryImages.forEach(img => {
    img.addEventListener('click', showPreviewContainer);
});

function showPreviewContainer() {
    previewContainer.style.display = 'block';
    body.style.overflow = "hidden";
}

//-----Pop Up closing Working -----------//
const popupPageCloseButton = document.querySelector(".close_icon");
popupPageCloseButton.addEventListener("click", () => {
previewContainer.style.display = "none";
body.style.overflow = "auto";
})

