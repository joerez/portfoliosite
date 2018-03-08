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




// $('.pg1').hover(
//        function(){ $(this).addClass('animated flip') },
//        function(){ $(this).removeClass('animated flip') }
// )
})
