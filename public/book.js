$(document).ready(function()
{


function newPage(element) {

  $(this).css("z-index", "19");

  $(element).on("click", function() {
    $(this).css('transform', 'rotateY(-180deg)');

  })
}


$('.cover').on("click", function() {

  $('.book').css("transform", "rotateY(0deg) rotateX(-0deg) scale(1)");
  $('.book').removeClass('hoveit');
   $('.cover').css('transform', 'rotateY(-180deg)');
   $('.cover').css("color", "brown");
   $(this).css('z-index', '20');
})

$('.firstPage').on("click", function() {

  $(this).css('transform', 'rotateY(-180deg)');

})

$('.bookBack').on("click", function() {
  $('.fifthPage').css('transform', 'rotateY(0deg)');
  $('.fourthPage').css('transform', 'rotateY(0deg)');
  $('.thirdPage').css('transform', 'rotateY(0deg)');
  $('.secondPage').css('transform', 'rotateY(0deg)');
  $('.firstPage').css('transform', 'rotateY(0deg)');
  $('.cover').css('transform', 'rotateY(0deg)');
  $('.cover').css("color", "white");
  $('.book').css("transform", "rotateY(40deg) rotateX(-39deg) scale(1.1)").show(0, function() {
    $('')
})
})

newPage('.secondPage');

newPage('.thirdPage');

newPage('.signature');

newPage('.fourthPage');

// newPage('.fifthPage');


$('.signbutton').on("click", function() {
  $('.signBook').show();
  $('.signBook').addClass('woah blazingStar');
})

})
