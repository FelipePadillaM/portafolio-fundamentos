const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.container_menu')

navbarBtn.addEventListener('click', function (e) {
  console.log(navbarNav)
  navbarNav.classList.toggle('active')
})