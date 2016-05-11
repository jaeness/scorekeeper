$(document).ready(function(){

  //set variable that is equal to the score,  .html whatever is after it sets anything after that.  Line 11 and 12 set the score to 0.

  var score=0;
  $("#score").html(score);

  //this second part is when click increase or decrease changes the main score section.

  $(document).on("click", "#increase-5", function() {
    score=score+5;
    $("#score").html(score);
  });

  $(document).on("click", "#decrease-5", function() {
    score=score-5;
    $("#score").html(score);
  });

  $(document).on("click", "#submit-custom-score", function() {
    score=parseInt($("#custom-score").val());
    $("#score").html(score);
  });

});
