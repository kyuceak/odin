


const dropdown = document.querySelector("#dropdown");
const ddmenu = document.querySelector("#dropdown-menu");


dropdown.addEventListener("click", () => {
    ddmenu.classList.toggle("hidden");
});