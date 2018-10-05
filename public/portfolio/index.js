const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('nav');

const first = document.getElementById('first');
const second = document.getElementById('second');

const home = document.getElementById('home');
const portfolio = document.getElementById('portfolio');

const portfolioBar = document.getElementById('portfolio-bar');


const navLinks = document.getElementsByClassName('nav-h1');

//open nav menu
navBtn.addEventListener("click", function() {
  toggleNav();
})

portfolio.addEventListener("click", function() {
  toggleNav();
  second.style.display = 'block';
  first.classList.remove('navigate-in');
  first.classList.add('navigate-out');
  second.classList.remove('none');
  second.classList.add('navigate-in');

})

portfolioBar.addEventListener("click", function() {
  second.style.display = 'block';
  first.classList.remove('navigate-in');
  first.classList.add('navigate-out');
  second.classList.remove('none');
  second.classList.add('navigate-in');


})


home.addEventListener("click", function() {
  toggleNav();
  second.classList.remove('navigate-in');
  second.classList.add('navigate-out');
  first.classList.add('navigate-in');
  second.style.display = 'none';


})



function toggleNav() {
  navBar.classList.toggle('open');
  navBtn.classList.toggle('open');

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('open');
  }
}
