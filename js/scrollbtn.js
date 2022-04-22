const scrollBtn = document.querySelector(".arrow-down");
const element = document.querySelector(".section-2");

scrollBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top: getYCoord(element),
        behavior: 'smooth'
    });
});


function getYCoord(elem) {
    let box = elem.getBoundingClientRect(); 
    return box.top + pageYOffset;
}