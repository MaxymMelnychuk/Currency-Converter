const darkmodeBtn = document.getElementById("darkmode");
const panel = document.querySelector(".panel");
const main = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar")
const texte = document.querySelectorAll(".texte")
const history = document.querySelectorAll(".history-list")
const titre = document.querySelector(".menu-item")

darkmodeBtn.addEventListener("click", function () {
    darkmode();
})

function darkmode () {
    panel.classList.toggle("panel_dark");
    main.classList.toggle("content_dark");
    sidebar.classList.toggle("sidebar_dark");
    texte.forEach(el => el.classList.toggle("text_dark"));
    history.forEach(el => el.classList.toggle("history-list_dark"));
    history.forEach(el => el.classList.toggle("history-list"));
    titre.classList.toggle("active")
}