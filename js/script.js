

function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("open");
}


const searchIcon = document.getElementById("search");
const searchBar = document.querySelector(".search-bar");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});


// .................... privacy .............................

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}); // rigth click XXXXXXX

document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && (e.key === "u" || e.key === "U")) ||
    (e.ctrlKey && e.shiftKey && e.key === "I")
  ) {
    e.preventDefault();
  }
}); // (Ctrl+Shift+I / F12)   XXXXXXXXXXXXXXXXXXXXXxxx
