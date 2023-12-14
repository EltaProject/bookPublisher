const menu = document.querySelector("#humberger-menu");
const navbarNav = document.querySelector(".navbar-nav");

menu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


const modalToggle = document.querySelector('#detailModalToggle');
const detailModal = document.querySelector('#detailModal');
const closeModal = document.querySelector('#close-btn');

modalToggle.addEventListener('click', () =>{
    detailModal.classList.add('show');
})

closeModal.addEventListener('click', () => {
    detailModal.classList.remove('show');
})

