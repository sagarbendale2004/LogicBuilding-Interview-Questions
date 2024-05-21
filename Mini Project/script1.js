let navLinks = document.querySelector(".nav-links");
let gallary = document.querySelectorAll(".images");

navLinks.addEventListener("click", (e) => {
    if(e.target.dataset.category !== undefined) {
        filterSearch(e.target.dataset.category);
    }
});

function filterSearch(value) {
    gallary.forEach((elem) => {
        if(elem.dataset.category === value) {
            elem.style.display = 'block';
        }
        else if(value === 'all') {
            elem.style.display = 'block';
        }
        else {
            elem.style.display = 'none';
        }
    })
}

