document.getElementById('one').addEventListener("click", function() {
  document.querySelector('.cube').classList.add('neg90-y')
})

document.getElementById('two').addEventListener("click", function() {
  document.querySelector('.cube').classList.add('neg90-x')
})

document.getElementById('three').addEventListener("click", function() {
  document.querySelector('.cube').classList.add('neg90-x-90-y')
})


document.getElementById('four').addEventListener("click", function() {
  document.querySelector('.cube').classList.add('pos90-x-neg90y')
})

document.getElementById('five').addEventListener("click", function() {
  document.querySelector('.cube').classList.add('five')
})

document.getElementById('six').addEventListener("click", function() {
  document.querySelector('.cube').classList.add('reset')

  document.querySelector('.cube').classList.remove('neg90-y');
  document.querySelector('.cube').classList.remove('neg90-x');
  document.querySelector('.cube').classList.remove('neg90-x-90-y');
  document.querySelector('.cube').classList.remove('pos90-x-neg90y');
  document.querySelector('.cube').classList.remove('five');
  document.querySelector('.cube').classList.remove('reset');




})
