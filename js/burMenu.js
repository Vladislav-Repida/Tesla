const burMenuBtn = document.querySelector(".bur-menu");
const menuWraper = document.querySelector(".wraper-nav");

document.addEventListener("click", (e)=>{
    if(e.target.closest(".bur-menu")){
        burMenuBtn.classList.toggle("active");
        menuWraper.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    }
    else if(!e.target.closest(".wraper-nav") && !e.target.closest(".bur-menu")){
        burMenuBtn.classList.remove("active");
        menuWraper.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});