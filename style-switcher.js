/* ================================================ toggle style switcher ===================================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher n scroll 
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
/* ================================================ theme colors ===================================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    let userColor =  color;
    localStorage.userColor = userColor;
    alternateStyles.forEach((style) => {
        if(userColor === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* ================================================ theme light and dark mode ===================================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", true)
    } else {
        localStorage.removeItem("dark")
    }
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
function toggleMenu(){
    document.querySelector(".aside").classList.toggle("left");
}
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector(".aside");
    var menu = document.querySelector(".menu-icon");

    if (!container) {
        console.error("Container not found");
        return;
    }

    function handleClickOutside(event) {
        if (!container.contains(event.target) && !menu.contains(event.target)) {
            container.classList.add("left");
            console.log("Clicked outside container. Removing 'left' class.");
        }
    }

    document.addEventListener('click', handleClickOutside);

    let userColor =  localStorage.userColor;
    localStorage.userColor = userColor;
    alternateStyles.forEach((style) => {
        if(userColor === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })

    if(localStorage.dark){
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
        document.body.classList.add("dark");
    } else {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
        document.body.classList.remove("dark");
    }
});
