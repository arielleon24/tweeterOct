// function that counts the inputs in text area and manages errors if input incorrect
$(document).ready(function() {
  $("#tweet-text").on("keyup",function() {
    let input = $(this);
    const form = input.closest("form");
    const counter = form.find(".counter");
    let value = 140 - input.val().length
    counter.html(value); 
    if (value < 0) {
      counter.addClass("lessThan0");
    } else {
      counter.removeClass("lessThan0");
    }
  });


  // toggle for the compose AREA found in the NAV

const $button = $("#downArrow")
  $button.on("click", function(){
    $(".new-tweet").slideToggle(function() {
      $('.new-tweet').focus();
    })
  });

});

