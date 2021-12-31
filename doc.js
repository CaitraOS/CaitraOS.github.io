var buttonMenu = document.getElementById("menu-btn");
var navMenu = document.getElementById("navmob")

buttonMenu.addEventListener("click", () => {
    navMenu.classList.toggle("navmob")
    buttonMenu.classList.toggle("animate")
})