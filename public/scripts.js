//preloader typed.js
var options = {
  strings: ["WHO GOES THERE?", "WHAT ARE YOU SEARCHING FOR?", "FOR THE LIGHT YOU SAY?", "PROCEED."],
  typeSpeed: 50,
  startDelay: 250,
  backDelay: 2000
}

var typed2 = new Typed("#typed", options);


$(document).ready(function()
{

  $('#menudropper').on("click", function() {
    $('.dropmenu').slideToggle(250);
    $('.dropmenu').css("display", "flex");
  })

  $('.proceed').delay(12000).show(1000);


  $('.proceed').on("click", function() {
    $('.heaven').fadeIn(1000);
    $('.preloader').fadeOut(1000);

    //heaven typed.js
    var options2 = {
      strings: ["WELCOME CHILD", "THIS IS YOUR TRUE HOME", "THIS IS WHERE YOU CAME FROM", "BUT YOU ABANDONED ME.", "AND SO I CASTED YOU OUT.", "INTO THE <span style='color: red; background: yellow'>FIRE</span> WITH YOU."],
      typeSpeed: 50,
      startDelay: 250,
      backDelay: 2000
    }

    var typed3 = new Typed("#typed2", options2);


    $('.angelmover').delay(20000).show(1000);



  })



  $('.hellbtn').on("click", function() {
    $('.hellimg').slideDown(250).delay(100, function(){
      $('.hellbtn').hide(10)
    })

  })




  $('.hellbtn2').on("click", function() {

    $('.hellimg').addClass("animated zoomOut")
      $('.hellimg2').slideDown(250);

  })


  $('.hellbtn3').on("click", function() {
    $('.hell').fadeOut(1000);
    $('.speechUp').fadeIn(1500, function() {
      $('.speechUp').css("display", "flex");
      $('.upgradetext').fadeIn(1000).delay(500, function() {
        $('.speechUp').fadeOut(1500, function() {
          $('.portfolio').fadeIn(200);
          $('.skilltree').fadeIn(200);
      })

    });
  })

})



  $('.portbtn').on("click", function() {
    $('.portimg').hide(10);
    $('.portimg2').slideDown(250).delay(100, function(){
      $('.portbtn').hide(10)

  })
})


$('.portbtn2').on("click", function() {
  $('.sunflowers').show(0, function() {
    $('.portfolio').fadeOut(3000, function() {
      $('.sunflowerimg').delay(3000).fadeIn(1000);
    })
  });
})


$('.sunbtn').on("click", function() {
  $('.sunflowerimg').hide(10);
  $('.sunflowerimg2').slideDown(250).delay(100, function() {
    $('.sunbtn').hide(10);
  })
})



$('#yeshungry').on("click", function() {
  $('.digifridge').show(0, function() {
    $('.digifridge').addClass('animated flipInX');
    $('.sunflowers').hide(10);
  })
})

$('.fridgebtn').on("click", function() {
  $('.adventurecontinues').show(250);
  $('.adventurecontinues').css("display", "flex");
})

$('#dontcontinue').on("click", function() {
  $('.adventurecontinues').hide(250);
})


//JQUERY UI


$( function() {
  $( "#draggable" ).draggable({scroll: false});
} );


$( function() {
  $( "#droppable" ).droppable({drop: function() {
    $('.heaven').fadeOut(2000);
    $('.hell').fadeIn(3000);
  }});
} );



})
