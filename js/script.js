
let userResponse = confirm("Are you sure you want to open this site?");

if (userResponse) {

  alert("You chose to open the site.");
} else {

  window.location.href = "https://aya-elsayed367.github.io/task/"; // هنا ضع الرابط الذي تريد أن يتم توجيه المستخدم إليه
}


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
(function () {
  const devtools = new Image();
  Object.defineProperty(devtools, "id", {
    get: function () {
      alert("Warning: This could potentially harm your device!");
    },
  });
  setInterval(function () {
    console.log(devtools);
  }, 1000);
})();
