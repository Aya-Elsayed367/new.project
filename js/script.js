function toggleMenu() {
  const menu = document.querySelector('nav ul');
  console.log('Toggling menu'); 
  menu.classList.toggle('open');
}

const dropdownItems = document.querySelectorAll('li.dropdown > a');
dropdownItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdownMenu = item.nextElementSibling;
    console.log('Dropdown clicked', dropdownMenu); 
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('open');
    }
  });
});     
