const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('nav');

const first = document.getElementById('first');

const navLinks = document.getElementsByClassName('nav-h1');

navBtn.addEventListener("click", function() {
  navBar.classList.toggle('open');
  this.classList.toggle('open');


  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('open');
  }

})
