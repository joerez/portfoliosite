$(document).ready(function()
{

$('.pg2').on("click", function() {

  $(this).css('transform', 'rotateY(-180deg)');

})

$('.pg3').on("click", function() {

   $(this).css('transform', 'rotateY(-180deg)');
   $(this).css('z-index', '20');

})

$('.pg4').on("click", function() {

   $(this).css('transform', 'rotateY(-180deg)');
   $(this).css('z-index', '20');

})

$('.pg5').on("click", function() {

$('.book').css("transform", "rotateY(40deg) rotateX(-39deg) scale(1.1)");


})

$('.cover').on("click", function() {

  $('.book').css("transform", "rotateY(0deg) rotateX(-0deg) scale(1)");
  $('.book').removeClass('hoveit');
   $('.cover').css('transform', 'rotateY(-180deg)').css("color", "brown");
   $(this).css('z-index', '20');
})

$('.firstPage').on("click", function() {

  $(this).css('transform', 'rotateY(-180deg)');

})



})
