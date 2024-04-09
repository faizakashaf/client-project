// --------- Home to About Scroll Arrow ---------//

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

//-----Pop Up clsing Working -----------//
const popupPageCloseButton = document.querySelector(".close_icon");
popupPageCloseButton.addEventListener("click", () => {
previewContainer.style.display = "none";
body.style.overflow = "auto";
})
